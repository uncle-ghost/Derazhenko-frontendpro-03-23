class Human {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }
}

const residents = []

class Flat extends Human {
    resident() {
        residents.push(`${this.name} is ${this.gender}`)
    }
}

const flat1 = new Flat('Anna', 'female')
const flat2 = new Flat('John', 'male')
const flat3 = new Flat('Katya', 'female')
const flat4 = new Flat('Vasya', 'male')

flat1.resident()
flat2.resident()
flat3.resident()
flat4.resident()

class Building {
    constructor(numberOfApartments) {
        this.flats = numberOfApartments
    }

    addFlat(flats) {
        flats = this.flats
        const building = []

        for (let i = 0; i < residents.length; i++) {
            building.push([])

            if (building.length < flats) {
                building[i].push(residents[i])
            } else {
                return console.log('Немає вільних квартир');
            }
        }

        console.log(building)
    }
}

const building = new Building(5)

building.addFlat()


// [
//     [ 'Anna is female' ],
//     [ 'John is male' ],
//     [ 'Katya is female' ],
//     [ 'Vasya is male' ]
// ]
