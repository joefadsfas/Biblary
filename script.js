let myBiblary = []; //current added book
let myBiblary_all = []; //all books


//{title: 'The Hobbit', author: 'J.R.R Tolkien', pages: '290', read_status: 'no'}, {title: 'The', author: 'J.R.R', pages: '29', read_status: 'yes'}

function Book(title, author, pages, read_status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read_status = read_status
    this.info = function() {
        if (read_status == true){
        return `${title} by ${author}, ${pages} pages, read`
    }
        else {
            return `${title} by ${author}, ${pages} pages, not read yet`
        }
    }
}

function display_books() {
    const shelf = document.querySelector('.books');

    //create new book block
    let div = document.createElement('div');
    let html_title = document.createElement('p')
    let html_author = document.createElement('p')
    let html_pages = document.createElement('p')
    let html_read_status = document.createElement('button')
    let remove_btn = document.createElement('button')
    remove_btn.classList.add('btn')
    remove_btn.innerHTML = 'Remove'

    remove_btn.setAttribute("id", "remove")
    html_title.setAttribute("id", "title")
    html_author.setAttribute("id", "author")
    html_pages.setAttribute("id", "pages")
    html_read_status.classList.add('btn')
    div.classList.add('book-card')

    let title = myBiblary[0].$title
    let author = myBiblary[0].$author
    let pages = myBiblary[0].$pages
    let read_status = ''

    if (title === '' && author === '' && pages === '') {
        return
    }
    
    if (myBiblary[0].$status == false) {
        read_status = 'Not read'
        html_read_status.classList.add('red-btn')
    }
    else {
        read_status = 'Read'
        html_read_status.classList.add('green-btn')
    }
    shelf.appendChild(div)
    html_title.innerHTML = `${title}`
    html_author.innerHTML = `${author}`
    html_pages.innerHTML = `${pages}`
    html_read_status.innerHTML = `${read_status}`
    div.appendChild(html_title)
    div.appendChild(html_author)
    div.appendChild(html_pages)
    div.appendChild(html_read_status)
    div.appendChild(remove_btn)

    myBiblary = []
}

function addBook() {
    let addBook = document.querySelector('.new-book')
    const form = document.querySelector('.form')
    addBook.addEventListener('click', () => {
        if (document.querySelector('.form').style.visibility='hidden'){
            form.style.visibility='visible'
            form.classList.add("backgr")
        }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let $book = {
            $title: document.querySelector('#form_title').value,
            $author: document.querySelector('#form_author').value,
            $pages: document.querySelector('#form_pages').value,
            $status: document.querySelector('#form_read').checked,
            $data_id: document.querySelector('#form_title').value
        }
        if ($book.$title === '' && $book.$author === '' && $book.$pages === '' && $book.$status === false) {
            return
        }
        else {
            myBiblary.push($book)
            myBiblary_all.push($book)
            document.querySelector('form').reset()
            form.style.visibility='hidden'
            display_books()
    }
    })

})
    


}

function removeBook() {
    const books = myBiblary_all
    let removeBtn = document.getElementById('remove')
    removeBtn.addEventListener('click', () => {
        for (let book in books) {
            console.log(book)
        }
    })
}

addBook()