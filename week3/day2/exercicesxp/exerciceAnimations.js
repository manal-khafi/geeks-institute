//exercise 1

// Part 1
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part 2
setTimeout(function() {
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

// Part 3
const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

const intervalId = setInterval(function() {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);

    if (container.children.length >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

clearButton.addEventListener("click", function() {
    clearInterval(intervalId);
});


//exercise 2

function myMove() {
    const elem = document.getElementById("animate");
    let pos = 0;
    const id = setInterval(function() {
        if (pos >= 350) { 
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }, 1);
}