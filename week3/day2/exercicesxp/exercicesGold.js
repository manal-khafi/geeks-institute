//exercice1
const genresSelect = document.getElementById("genres");
console.log(genresSelect.value);
const newOption = document.createElement("option");
newOption.value = "classic";
newOption.textContent = "Classic";
newOption.selected = true;
genresSelect.appendChild(newOption);

//exercice2
function removecolor() {
    const colorSelect = document.getElementById("colorSelect");
    const selectedIndex = colorSelect.selectedIndex;
    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
}
const removeButton = document.querySelector("input[type='button']");
removeButton.addEventListener("click", removecolor);

//exercice3
let shoppingList = [];
const rootDiv = document.getElementById("root");

const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Item to buy";

const addButton = document.createElement("button");
addButton.type = "button";
addButton.textContent = "AddItem";

form.appendChild(input);
form.appendChild(addButton);
rootDiv.appendChild(form);

const listContainer = document.createElement("ul");
rootDiv.appendChild(listContainer);

const clearButton = document.createElement("button");
clearButton.type = "button";
clearButton.textContent = "ClearAll";
rootDiv.appendChild(clearButton);

function addItem() {
    const itemValue = input.value.trim();
    if (itemValue !== "") {
        shoppingList.push(itemValue);
        const li = document.createElement("li");
        li.textContent = itemValue;
        listContainer.appendChild(li);
        input.value = "";
    }
}

addButton.addEventListener("click", addItem);

function clearAll() {
    shoppingList = [];
    listContainer.innerHTML = "";
}

clearButton.addEventListener("click", clearAll);