class TrainerRed {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    startJourney() {
        console.log(`${this.name} begins their journey from ${this.location}!`);
    }

    journeyStatus() {
        return `${this.name} is currently traveling from ${this.location}!`;
    }
}

// Create an instance of TrainerRed
const red = new TrainerRed("Trainer Red", "Pallet Town");

// Start the journey
red.startJourney();

// Display journey status
console.log(red.journeyStatus());