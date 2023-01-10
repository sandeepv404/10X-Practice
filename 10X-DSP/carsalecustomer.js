let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

class CarSell {
    constructor(arr) {
        this.arr = arr
    }
    getPromisingCustomers() {
        let bool = false
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] >= 900000) {
                console.log(i)
                bool = true
            }
        }
        if (bool == false) {
            console.log(-1)
        }
    }
}

let n = parseInt(readLine())
let arr = []
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()))
}
let obj = new CarSell(arr)
obj.getPromisingCustomers()