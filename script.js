const main = document.getElementById("main");
const input = document.getElementById("inputField");
const bookView = document.getElementById("books");

const myLibrary = [];

console.log("Hej");
createElements();



function Book(title, author, pages, id) {
    this.title = title,
        this.author = author,
        this.pages = pages
    this.id = id;
}

const lotr = new Book("Lord of the rings", "J.R.R Tolkien", 842, crypto.randomUUID());
const got = new Book("A song of fire and ice", "George R.R Marting", 872, crypto.randomUUID());
const narnia = new Book("Narnia", "C.S Lewis", 438, crypto.randomUUID());

myLibrary.push(lotr);
myLibrary.push(got);
myLibrary.push(narnia);

console.log(myLibrary);

displayBook(myLibrary);


function createElements() {
    const title = document.createElement("input");
    title.type = "text";
    title.setAttribute("id", "title");
    title.placeholder = "Name of the book: ";
    input.appendChild(title);

    const author = document.createElement("input");
    author.type = "text";
    author.placeholder = "Author: ";
    author.setAttribute("id", "author");
    input.appendChild(author);

    const pages = document.createElement("input");
    pages.type = "text";
    pages.placeholder = "Number of pages: ";
    pages.setAttribute("id", "pages");
    input.appendChild(pages);

    const addBtn = document.createElement("button");
    addBtn.innerText = "Add";
    input.appendChild(addBtn);

    addBtn.addEventListener("click", () => {
        addBookToLibrary();
    })
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    let id = crypto.randomUUID();

    const newBook = new Book(title, author, pages, id);
    myLibrary.push(newBook);
    displayBook(myLibrary);

    console.log(newBook);
    console.log(myLibrary);
};

function displayBook(myLibrary) {
    bookView.innerHTML = "";
    myLibrary.forEach(book => {
        let bookInformation = document.createElement("p");
        bookInformation.textContent = `Titel: ${book.title}`;
        bookView.appendChild(bookInformation);
    })
} 