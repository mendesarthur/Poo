class Account{
    #password
    #balence = 0
    constructor(user){
        this.email = user.email
        this.#password = user.password
    }
    getBalence(email, password){
        if(this.#authenticate(email, password)){
            return this.#balence
        }
        else{
            return null
        }
    }
    #authenticate (email, password){
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'artjirj@gmail.com',
    password: '1235576',
}

const myAccount = new Account(user)

console.log(myAccount.getBalence('artjirj@gmail.com','1235576'))
console.log(myAccount)