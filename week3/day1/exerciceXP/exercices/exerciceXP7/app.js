const allBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
        alreadyRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const div = document.createElement("div");
    const details = document.createElement("p");
    details.textContent = `${book.title} written by ${book.author}`;
    
    if (book.alreadyRead) {
        details.style.color = "red";
    }

    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";

    div.appendChild(details);
    div.appendChild(img);
    section.appendChild(div);
});