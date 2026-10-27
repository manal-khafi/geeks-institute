const form = document.querySelector("form");
console.log(form);

const fnameInputById = document.getElementById("fname");
const lnameInputById = document.getElementById("lname");
console.log(fnameInputById, lnameInputById);

const fnameInputByName = document.querySelector("input[name='firstname']");
const lnameInputByName = document.querySelector("input[name='lastname']");
console.log(fnameInputByName, lnameInputByName);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fnameValue = fnameInputById.value.trim();
    const lnameValue = lnameInputById.value.trim();

    if (fnameValue !== "" && lnameValue !== "") {
        const usersAnswerUl = document.querySelector(".usersAnswer");
        
        const liFname = document.createElement("li");
        liFname.textContent = fnameValue;
        
        const liLname = document.createElement("li");
        liLname.textContent = lnameValue;
        
        usersAnswerUl.appendChild(liFname);
        usersAnswerUl.appendChild(liLname);
    }
});