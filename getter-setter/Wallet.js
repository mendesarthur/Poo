class Wallet{
    #amount
    #userName
    constructor(){
        this.#amount = 200.99 * 100 // 10099
    }
    get amount(){
        return this.#amount / 100
    }

    set userName(user){
        this.#userName = user
    }
    get userName(){
        return this.#userName 
    }
}

const Mywallet = new Wallet()

Mywallet.userName = 'Arthur'.toUpperCase()

console.log(Mywallet.userName)
