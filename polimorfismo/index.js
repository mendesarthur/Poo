class Vehicle {
    move(){
        console.log('O veiculo está se movendo!')
    }
}

class Car extends Vehicle {
    move(){
        console.log('O carro está se movendo')
    }
}


class Ship extends Vehicle{
    move(){
        console.log('O navio está em movimento!')
    }
}

class Plane extends Vehicle{
    move(speed){
        console.log(`O avião está voando a: ${speed}`)
    }
}

const delore = new Car ()
const blackPearl = new Ship()
const aircraft = new Plane()

// delore.move()
// blackPearl.move()
// aircraft.move(80)



function start (Vehicle){
    console.log('Inicializando o veiculo')
    Vehicle.move()
}


start(delore)
start(blackPearl)
start(aircraft)
