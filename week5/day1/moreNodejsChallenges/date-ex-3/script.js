const { nextHolidayInfo, getNextPublicHoliday } = require("./date");

async function main() {
  const hardcoded = nextHolidayInfo("Winter Break / New Year", "2027-01-01T00:00:00");
  console.log("Today's date:", hardcoded.today);
  console.log(`Next holiday: ${hardcoded.holiday}`);
  console.log(`the next holiday is in ${hardcoded.countdown}`);

  try {
    const apiHoliday = await getNextPublicHoliday("MA");
    console.log("\n[API Holiday]:", apiHoliday.summary);
  } catch (err) {
    console.log("\n[API Holiday fallback]: Could not fetch remote holidays:", err.message);
  }
}

main();