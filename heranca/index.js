class Proprety{
    constructor(area, price){
        this.area = area
        this.price = price
    }
    getPricePorSquareMeter(){
        return this.price / this.area        
    }
}

class House extends Proprety{}


const land = new Proprety(200, 50000)
const someHouse = new House(300, 100000)

console.log(land.getPricePorSquareMeter())
console.log(someHouse.getPricePorSquareMeter())
console.log(someHouse instanceof Proprety)


class Apartment extends Proprety{
    constructor(number, area, price){
        super(area, price)
         // this.area = area
         // this.price = price 
         // ...
        this.number = number
    }

    getFloor(){
        return this.number.slice(0, -2)
    }
}

const apt = new Apartment("200", 5000, 200000)

console.log(apt)
console.log(apt.getFloor())