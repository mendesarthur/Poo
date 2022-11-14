// PascalCase 
function Book(title, paginas, author, tags){
    this.title = title
    this.paginas = paginas
    this.author = author
    this.tags = tags
    this.plubished = false
    this.inStock = 0
    this.addNewStock = function addNewStock(quantity){
        this.inStock += quantity
    }
    this.save = () => {
        // SALVA NO BANCO DE DADOS
    } 
}

const author = {nome: 'arturo kujo', idade: 126}
const tags = ['Fantasia', 'Ação']

const book = new Book('eragon', 111, author, tags)

book.addNewStock(20)

// console.log(book)


const eldest = new Book("Eldest", 300, {nome: 'Oda'}, tags)
eldest.addNewStock(1000)

console.log(eldest)