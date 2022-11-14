class Book{
    constructor(title, paginas, tags, author){
        this.title = title,
        this.paginas = paginas,
        this.tags = tags,
        this.author = author
        this.inStock = 0
    }
    addStock(quantities){
        this.inStock += quantities
    }
}

const author = {nome: 'joseph eron'}
const tags = ['Fantasia', 'Aventura']

const book = new Book('elfron', 456, tags, author)

book.addStock(50)

console.log(book)
console.log(book instanceof Array)