class Reservation{
    constructor(guests, room, days){
        this.guests = guests
        this.room = room
        this.days = days
        this.totals = days * Reservation.baseFed
    }
    static baseFed = 150

    static showBaseFed(){
        console.log(`Base Fed is ${Reservation.baseFed}`)
    }

    static get premiumFed() {
        return Reservation.baseFed * 1.6
    }
}

Reservation.showBaseFed()


const r1 = new Reservation(3, 201, 6)

console.log(r1)

Reservation.baseFed = 240

const r2 = new Reservation(5, 101, 6)
console.log(r2)

console.log(`Premium fed is ${Reservation.premiumFed}$`)