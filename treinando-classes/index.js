class User{
    constructor(fullName){
        this.fullName = fullName,
        this.email = ''
        this.password = ''
    }
    login(email, password){
        this.email = email
        this.password = password
    }
}
const user = new User('Catarina')
user.login('arthurmendescunha123@gmail.com', "n#567")

console.log(user)


class Product {
    constructor (name, description, price) {
      this.name = name
      this.description = description
      this.price = price
      this.inStock = 0
    }
  
    addToStock(quantity) {
      this.inStock += quantity
    }
  
    calculateDiscount(discount) {
      return this.price * ((100 - discount) / 100)
    }
  }
  
  const product = new Product("1984", {author: 'george orwel', classificação: 9.8}, 80)
  product.addToStock(99)
  console.log(product)
  console.log(product.calculateDiscount(15))
  console.log(product.calculateDiscount(10))