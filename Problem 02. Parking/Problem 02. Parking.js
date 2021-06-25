class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if(this.vehicles.length >= this.capacity){
            throw new Error("Not enough parking space.");
        }

        let car = {
            carModel,
            carNumber,
            payed: false,
        };

        this.vehicles.push(car);

        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber){
        // ще влезе в масив аи ще намери отговарящите на предиката
        let currentCar = this.vehicles.find(x => x.carNumber == carNumer)

        if (!currentCar) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (!currentCar) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        // създава нов масив където ще изреще търсената кола и връща новия масив без търсената кола
        this.vehicles = this.vehicles.filter(x => x.carNumber != currentCar.carNumber);

        return `${carNumber} left the parking lot.`;
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
// console.log(parking.getStatistics());

// console.log(parking.pay("TX3691CA"));
// console.log(parking.removeCar("TX3691CA"));
