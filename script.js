const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = () => {
         const messages = `${this.title} by ${this.author}, ${this.pages}, ${this.isRead ? "read":"not read yet"}`
         return messages
    }
  // the constructor...
}

function addBookToLibrary() {
  
  const title = document.getElementById("title").value
  const author = document.getElementById("author").value
  const pages = document.getElementById("pages").value
  const isRead = document.getElementById("isRead").checked
  // do stuff here
  let book = new Book(title, author, pages, isRead)
  myLibrary.push(book)
  displayBook();
}

// Adding books to the library
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 254, false);
myLibrary.push(book1)

const book2 = new Book("Dune", "Frank Herbert", 300, true);
myLibrary.push(book2)

const book3 = new Book("Harry Potter ", "J.K. Rowling", 150, true);
myLibrary.push(book3)

const book4 = new Book("Atomic Habbit", "Jame", 150, true);
myLibrary.push(book4)

const submit = document.querySelector(".submit")
submit.addEventListener("click", (event) => {
  event.preventDefault();
  
  addBookToLibrary();
  
})

function displayBook(){
  
  const bookContainer = document.querySelector(".bookContainer")
  bookContainer.innerHTML = " "
  
  myLibrary.forEach(book => {
     /*const book = myLibrary[i]*/

     const bookCard = document.createElement("div")
     bookCard.classList.add("book-card")
    
     const bookTitle = document.createElement("div")
     bookTitle.classList.add("book-title")
     bookTitle.textContent = `${book.title}`
     
     const bookAuthor = document.createElement("div")
     bookAuthor.classList.add("book-author")
     bookAuthor.textContent = `Write by ${book.author}`
   
     const bookPages = document.createElement("div")
     bookPages.classList.add("book-pages")
     bookPages.textContent = `Number of page: ${book.pages}`
   
     const bookIsRead = document.createElement("div")
     bookIsRead.classList.add("book-info")
     bookIsRead.textContent = `${book.isRead ? "Read" : "Not Read Yet"}`
     
     bookCard.appendChild(bookTitle)
     bookCard.appendChild(bookAuthor)
     bookCard.appendChild(bookPages)
     bookCard.appendChild(bookIsRead)
     
     bookContainer.appendChild(bookCard)
     
     console.log(bookCard)
/***********removeBook********/

    const containerDiv = document.createElement("div")
    containerDiv.classList.add("containerDiv")

    
    const removeBook = document.createElement("button")
    removeBook.classList.add("removeButton")
    removeBook.textContent = "Remove Book"
    removeBook.addEventListener("click", () => {
      const indices = myLibrary.indexOf(book)
      myLibrary.splice(indices, 1)
      displayBook()
      
    })
    containerDiv.appendChild(removeBook)
    bookCard.appendChild(containerDiv)
    /*bookCard.appendChild(removeBook)*/
/************changeStatusOfBook***********/

    const changeStatusOfBook = document.createElement("button")
    changeStatusOfBook.classList.add("changeStatus")
    changeStatusOfBook.textContent = "Change Status Of Book"
    changeStatusOfBook.addEventListener("click", () => {
      book.isRead = !book.IsRead
      displayBook()
    })
    containerDiv.appendChild(changeStatusOfBook)
    bookCard.appendChild(containerDiv)
    /*bookCard.appendChild(changeStatusOfBook)*/
//************************** */ 
   });  

}
displayBook()







