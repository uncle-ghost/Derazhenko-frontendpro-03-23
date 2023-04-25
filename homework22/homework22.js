class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    human() {
        return `${this.name} ${this.age} years`
    }
}

const Anna = new Human('Anna', 25)
const John = new Human('John', 30)
const George = new Human('John', 15)


class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand
        this.model = model
        this.year = year
        this.licensePlate = licensePlate
    }

    showCar() {
        console.log(this.brand, this.model, this.year, this.licensePlate)
        this.ownerName ? console.log('owner: ' + this.ownerName.human()) : console.log(`${this.brand} ${this.model} has no owner`);
    }

    owner(owner) {
        if (owner.age > 18) {
            this.ownerName = owner;
        }
    }
}

const porsche = new Car('porsche', 'panamera', 2015, 5555)
const ford = new Car('ford', 'focus', 2014, 1221)
const dodge = new Car('dodge', 'charger', 1980, 1484)

porsche.owner(Anna)
ford.owner(John)
dodge.owner(George)

porsche.showCar()
ford.showCar()
dodge.showCar()


// porsche panamera 2015 5555
// owner: Anna 25 years
// ford focus 2014 1221
// owner: John 30 years
// dodge charger 1980 1484
// dodge charger has no owner
