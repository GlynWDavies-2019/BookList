// Book Class
// Represents a Book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class
// Represents the UI

class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: 'Eloquent JavaScript',
                author: 'Marijn Haverbeke',
                isbn: '978-1593279509'
            },
            {
                title: 'Learning Web Design',
                author: 'Jennifer Niederst Robbins',
                isbn: '978-1491960202'
            }
        ];
        const books = storedBooks;
        books.forEach(book => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
}

// Store Class
// Represents the persistent storage for this application

// Event: Display Books

document.addEventListener('DOMContentLoaded',UI.displayBooks);

// Event: Add Book

// Event: Remove Book