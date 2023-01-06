let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named `CarSell`.
// Your method should be named `getPromisingCustomers`
// Your method should return the indices of customers who are willing to pay greater than or equal to 90% of the car value

class CarSell {
    constructor(customerProposals) {
        this.customerProposals = customerProposals
    }
    getPromisingCustomers() {

    }
}

let numCustomers = parseInt(readLine());
let customerProposals = [];
for (let i = 0; i < numCustomers; i++) {
    customerProposals.push(parseInt(readLine()));
}

let car = new CarSell(customerProposals);
for (let j of car.getPromisingCustomers()) {
    console.log(j);
}