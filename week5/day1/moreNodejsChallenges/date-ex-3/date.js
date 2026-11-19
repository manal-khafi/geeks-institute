function formatCountdown(targetDate, now = new Date()) {
  const diffMs = Math.max(0, targetDate - now);
  const totalSeconds = Math.floor(diffMs / 1000);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  return `${days} days and ${hh}:${mm}:${ss} hours`;
}

function nextHolidayInfo(holidayName = "New Year's Day", holidayDateStr = "2027-01-01T00:00:00") {
  const now = new Date();
  const holidayDate = new Date(holidayDateStr);
  const countdown = formatCountdown(holidayDate, now);

  return {
    today: now.toLocaleString(),
    holiday: holidayName,
    countdown,
    summary: `Today is ${now.toLocaleString()} — the next holiday (${holidayName}) is in ${countdown}`,
  };
}

async function getNextPublicHoliday(countryCode = "MA") {
  const axios = require("axios");
  const now = new Date();
  const year = now.getFullYear();

  const res = await axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`);
  const upcoming = res.data.find((h) => new Date(`${h.date}T00:00:00`) > now);

  if (!upcoming) {
    return nextHolidayInfo("New Year's Day", `${year + 1}-01-01T00:00:00`);
  }

  const holidayDate = new Date(`${upcoming.date}T00:00:00`);
  const countdown = formatCountdown(holidayDate, now);

  return {
    today: now.toLocaleString(),
    holiday: upcoming.localName || upcoming.name,
    date: upcoming.date,
    countdown,
    summary: `Today is ${now.toLocaleString()} — the next holiday (${upcoming.localName || upcoming.name} on ${upcoming.date}) is in ${countdown}`,
  };
}

module.exports = { nextHolidayInfo, getNextPublicHoliday };