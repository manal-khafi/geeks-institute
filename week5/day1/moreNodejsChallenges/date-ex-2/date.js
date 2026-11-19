function minutesLived(birthdateInput) {
  const birthDate = new Date(birthdateInput);
  if (Number.isNaN(birthDate.getTime())) {
    throw new Error("Invalid birthdate format. Try 'YYYY-MM-DD' or 'YYYY-MM-DD HH:mm'.");
  }

  const now = new Date();
  const diffMs = Math.max(0, now - birthDate);
  return Math.floor(diffMs / (1000 * 60));
}

module.exports = minutesLived;