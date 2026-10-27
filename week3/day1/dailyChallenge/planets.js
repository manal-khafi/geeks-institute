const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "goldenrod", moons: 0 },
    { name: "Earth", color: "dodgerblue", moons: 1 },
    { name: "Mars", color: "orangered", moons: 2 },
    { name: "Jupiter", color: "sandybrown", moons: 4 },
    { name: "Saturn", color: "khaki", moons: 3 },
    { name: "Uranus", color: "lightblue", moons: 2 },
    { name: "Neptune", color: "royalblue", moons: 1 }
];

const section = document.querySelector(".listPlanets");

planets.forEach(planetData => {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planetData.color;
    planetDiv.textContent = planetData.name;

    for (let i = 0; i < planetData.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        
        // Position moons around the planet
        const angle = (i / planetData.moons) * 2 * Math.PI;
        const distance = 60; // Distance from center
        const x = Math.cos(angle) * distance + 35;
        const y = Math.sin(angle) * distance + 35;
        
        moonDiv.style.left = `${x}px`;
        moonDiv.style.top = `${y}px`;
        
        planetDiv.appendChild(moonDiv);
    }

    section.appendChild(planetDiv);
});