const navBarDiv = document.getElementById("navBar");
navBarDiv.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const newText = document.createTextNode("Logout");
newLi.appendChild(newText);
const ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newLi);

const firstLiLink = ul.firstElementChild.querySelector("a");
const lastLiLink = ul.lastElementChild.querySelector("a");
console.log(firstLiLink.textContent);
console.log(lastLiLink.textContent);