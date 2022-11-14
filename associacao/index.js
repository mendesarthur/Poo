const Address = require("./Address");
const Person = require("./Person")

const addr = new Address(" 7 de setembro", 99, "Centro", "São fidelis", "RJ")
const john = new Person("John", addr)


console.log(john)
console.log(john.address.fullAdress())