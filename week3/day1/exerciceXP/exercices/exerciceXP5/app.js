const divContainer = document.getElementById("container");
console.log(divContainer);

const ulLists = document.querySelectorAll(".list");
ulLists[0].children[1].textContent = "Richard";

ulLists[1].removeChild(ulLists[1].children[1]);

ulLists.forEach(ul => {
    ul.firstElementChild.textContent = "Manal";
});

ulLists.forEach(ul => {
    ul.classList.add("student_list");
});
ulLists[0].classList.add("university", "attendance");

divContainer.style.backgroundColor = "light blue";
divContainer.style.padding = "10px";

ulLists[0].lastElementChild.style.display = "none";

ulLists[0].children[1].style.border = "1px solid black";

document.body.style.fontSize = "18px";

if (divContainer.style.backgroundColor === "light blue") {
    const users = [];
    document.querySelectorAll("li").forEach(li => {
        if (li.style.display !== "none") {
            users.push(li.textContent);
        }
    });
    alert(`Hello ${users.join(" and ")}`);
}