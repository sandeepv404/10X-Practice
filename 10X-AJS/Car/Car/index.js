function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;

    this.fill = function (gallons) {
        this.tank += gallons;
    }

    this.drive = function (distance) {
        if (this.tank * this.milesPerGallon < distance) {
            return `I ran out of fuel at ${this.odometer} miles!`;
        }
        this.odometer += distance;
        this.tank -= distance / this.milesPerGallon;
    }
}