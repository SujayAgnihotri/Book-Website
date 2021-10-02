function showBooks() {
    // let books = localStorage.getItem('books');
    // let bookObj;
    let tableBody = document.getElementById('tableBody');
    let books = localStorage.getItem('books')
    let booksArr = JSON.parse(books);
    if (booksArr == null) {
        tableBody.innerHTML = `<tr>
        <td>Your Book Name here...</td>
        <td>Your Book category here...</td>
        <td>Your Book contant here...</td>
        <button type="button" class="btn btn-primary mt-1" onclick="delete()">Delete</button>
        </tr>`;
    }
    else {
        let i = 0;
        let html;
        while (i < booksArr.length) {
            booksArr[i]= `<tr>
            <td>sdggg</td>
            <td>sdfgdfg}</td>
            <td>gsdfgfd</td>
            <button id="${i}" type="button" onclick="deleteItem(${booksArr},${this.id})" class="btn btn-primary mt-1">Delete</button>
            </tr>`;
            html += booksArr[i];
            i++
        }
        tableBody.innerHTML = html;
    }
}
showBooks()
// creating a book class
class Book {
    constructor(bookName, bookCategory, bookContant) {
        this.name = bookName;
        this.contant = bookContant;
        this.category = bookCategory;
    }

    updateTable() {
        let htmlStr = `<tr>
        <td>${this.name}</td>
        <td>${this.category}</td>
        <td>${this.contant}</td>
        <button type="button" class="btn btn-primary mt-1">Delete</button>
        </tr>`;
        let books = localStorage.getItem('books');
        let bookObj;
        if (books == null) {
            bookObj = []
        }
        else {
            bookObj = JSON.parse(books)
        }
        bookObj.push(htmlStr);
        localStorage.setItem('books', JSON.stringify(bookObj));

    }

    showBooks() {
        let booksArr = JSON.parse(localStorage.getItem('books'));
        let tableBody = document.getElementById('tableBody');
        let i = 0;
        let html;
        while (i < booksArr.length) {
            // booksArr[i]= `<tr>
            // <td>${this.name}</td>
            // <td>${this.category}</td>
            // <td>${this.contant}</td>
            // <button id="${i}" type="button" onclick="deleteItem(booksArr,this.id)" class="btn btn-primary mt-1">Delete</button>
            // </tr>`;
            html += booksArr[i];
            i++
        }
        // localStorage.setItem('books', JSON.stringify(booksArr));
        tableBody.innerHTML = html;
        console.log(booksArr);
    }
}

function deleteItem(arr,i){
return arr.splice(i,1)
}
let arr1=['lhsfkashkg',43]
console.log(arr1);
deleteItem(arr1,0)
console.log(arr1);
// Add Submit Event Listener in Form
const form = document.getElementById('libararyForm');
form.addEventListener('submit', addBook);

function addBook(e) {
    console.log('you have submit a form');
    let bookname = document.getElementById('bookname').value;
    let bookcontant = document.getElementById('bookcontant').value;

    //redio inputs
    let category;
    let scifi = document.getElementById('scifi');
    let poem = document.getElementById('poem');
    let programming = document.getElementById('programming');
    if (scifi.checked) {
        category = scifi.value
    }
    else if (poem.checked) {
        category = poem.value;
    }
    else if (programming.checked) {
        category = programming.value;
    }

    let book = new Book(bookname, category, bookcontant);
    book.updateTable();
    book.showBooks();
    form.reset();
    console.log('you have finally submit a form');
    e.preventDefault();
}