function timeUntilNewYear(now = new Date()) {
  const nextYear = now.getFullYear() + 1;
  const newYear = new Date(nextYear, 0, 1, 0, 0, 0); // January 1st, 00:00:00
  const diffMs = Math.max(0, newYear - now);

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  return `the 1st January is in ${days} days and ${hh}:${mm}:${ss} hours`;
}

module.exports = timeUntilNewYear;