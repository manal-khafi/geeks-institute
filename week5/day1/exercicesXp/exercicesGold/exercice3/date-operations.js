const { addDays, format } = require("date-fns");

function performDateOperations() {
  const now = new Date();
  const futureDate = addDays(now, 5);
  const formattedDate = format(futureDate, "yyyy-MM-dd HH:mm:ss");
  console.log(formattedDate);
}

module.exports = performDateOperations;