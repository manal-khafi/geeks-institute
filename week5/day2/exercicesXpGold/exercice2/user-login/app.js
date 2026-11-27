const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-key-change-in-prod";
const SALT_ROUNDS = 10;
const MAX_FAILED_ATTEMPTS = 5;
const LOCK_TIME_MS = 15 * 60 * 1000; 

app.use(express.json());

const users = [];

function isStrongPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token missing" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = decoded;
    next();
  });
}

function authorizeRole(...allowedRoles) {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: insufficient role permissions" });
    }
    next();
  };
}

app.post("/api/register", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    if (!isStrongPassword(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include uppercase, lowercase, and a number",
      });
    }

    const existingUser = users.find(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const assignedRole = role === "admin" ? "admin" : "user";

    const newUser = {
      id: users.length + 1,
      username,
      passwordHash,
      role: assignedRole,
      failedAttempts: 0,
      lockUntil: null,
    };

    users.push(newUser);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        role: newUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Registration error", error: error.message });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const user = users.find(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user.lockUntil && Date.now() < user.lockUntil) {
      const remainingMinutes = Math.ceil((user.lockUntil - Date.now()) / 60000);
      return res.status(423).json({
        message: `Account locked due to failed login attempts. Try again in ${remainingMinutes} minute(s).`,
      });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      user.failedAttempts += 1;

      if (user.failedAttempts >= MAX_FAILED_ATTEMPTS) {
        user.lockUntil = Date.now() + LOCK_TIME_MS;
        user.failedAttempts = 0;
        return res.status(423).json({
          message: "Too many failed attempts. Account locked for 15 minutes.",
        });
      }

      return res.status(401).json({
        message: "Invalid credentials",
        attemptsRemaining: MAX_FAILED_ATTEMPTS - user.failedAttempts,
      });
    }

    user.failedAttempts = 0;
    user.lockUntil = null;

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Login error", error: error.message });
  }
});

app.get("/api/profile", authenticateToken, (req, res) => {
  const user = users.find((u) => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({
    id: user.id,
    username: user.username,
    role: user.role,
  });
});

app.get("/api/admin/users", authenticateToken, authorizeRole("admin"), (req, res) => {
  res.status(200).json({
    users: users.map((u) => ({ id: u.id, username: u.username, role: u.role })),
  });
});

app.listen(PORT, () => {
  console.log(`User login server running on http://localhost:${PORT}`);
});