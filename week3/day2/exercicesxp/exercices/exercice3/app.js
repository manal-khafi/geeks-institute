let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}

function highlight() {
    getBoldItems();
    allBoldItems.forEach(item => {
        item.style.color = "blue";
    });
}

function returnItemsToDefault() {
    getBoldItems();
    allBoldItems.forEach(item => {
        item.style.color = "black";
    });
}

const paragraph = document.getElementById("text");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);