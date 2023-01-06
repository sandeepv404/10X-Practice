let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------



// Define the required class here...
class Car {
    constructor(name = "Audi", model = "A4") {
        this.name = name
        this.model = model
    }
    name() {
        return this.name
    }
    model() {
        return this.model
    }

}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let flag = parseInt(readLine());
if (flag === 1) {
    let inputString = readLine().split(' ');
    vehicle = new Car(inputString[0], inputString[1]);
}
else {
    vehicle = new Car();
}

console.log(vehicle.name);
console.log(vehicle.model);