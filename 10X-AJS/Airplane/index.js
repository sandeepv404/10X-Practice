

//Airplane Constructor
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
}

//Takeoff Method
Airplane.prototype.takeOff = function () {
    this.isFlying = true;
};

//Land Method
Airplane.prototype.land = function () {
    this.isFlying = false;
};

let airplane1 = new Airplane("Emirates");
console.log(airplane1.name);
console.log(airplane1.isFlying);