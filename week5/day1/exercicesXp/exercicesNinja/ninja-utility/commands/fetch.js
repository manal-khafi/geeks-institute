const axios = require("axios");

async function fetchData(url = "https://jsonplaceholder.typicode.com/posts/1") {
  try {
    const response = await axios.get(url);
    console.log("Fetched Data:");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

module.exports = fetchData;
