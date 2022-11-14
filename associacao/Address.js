class Address{
    constructor(rua, numero, bairro, cidade, estado) {
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    fullAdress(){
        return `Rua ${this.rua}, nº ${this.numero}, ${this.bairro}, ${this.cidade}/${this.estado}`
    }
}

module.exports = Address