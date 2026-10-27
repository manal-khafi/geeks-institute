const h1 = document.querySelector("h1");
console.log(h1);

const article = document.querySelector("article");
const lastParagraph = article.lastElementChild;
article.removeChild(lastParagraph);

const h2 = document.querySelector("h2");
h2.addEventListener("click", function() {
    h2.style.backgroundColor = "red";
});

const h3 = document.querySelector("h3");
h3.addEventListener("click", function() {
    h3.style.display = "none";
});

const button = document.getElementById("boldBtn");
button.addEventListener("click", function() {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => {
        p.style.fontWeight = "bold";
    });
});

h1.addEventListener("mouseover", function() {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + "px";
});

const secondParagraph = document.querySelectorAll("p")[1];
secondParagraph.style.transition = "opacity 1s ease";
secondParagraph.addEventListener("mouseover", function() {
    secondParagraph.style.opacity = "0";
});
secondParagraph.addEventListener("mouseout", function() {
    secondParagraph.style.opacity = "1";
});