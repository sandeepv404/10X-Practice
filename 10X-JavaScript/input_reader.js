// let fs = require("fs");
// let data = fs.readFileSync(0, "utf-8");
// let idx = 0;
// data = data.split("\n");

// function readLine() {
//     idx++;
//     return data[idx - 1];
// }

// let input1 = parseInt(readLine());
// let inputArray = readLine();
// console.log(inputArray);
// let array = [];
// for (i = 0; i < input1; i++) {
//     array[i] = readLine();

//     console.log(i + " " + (Math.round(array[i] * 100) / 100).toFixed(2));

// }


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// class InputReader {
//     constructor(num) {
//         this.num = num;

//     }

//     readStrings(num) {
//         let array = [];
//         for (let i = 0; i < num; i++) {
//             array[i] = readLine();
//             console.log(i + " " + array[i]);

//         }
//     }
//     readIntegers(num) {
//         let array = [];
//         for (let j = 0; j < num; j++) {
//             array[j] = readLine();
//             console.log(j + " " + array[j]);

//         }
//     }
//     readFloats(num) {
//         let array = [];
//         for (let k = 0; k < num; k++) {
//             array[k] = readLine();
//             console.log(k + " " + (Math.round(array[k] * 100) / 100).toFixed(2));

//         }
//     }

// };




class InputReader {
    constructor(num) {
        this.num = num;

    }

    readStrings(num) {
        let array = [];
        for (let i = 0; i < num; i++) {
            array[i] = readLine();
            console.log(i + " " + array[i]);

        }
    }
    readIntegers(num) {
        let array = [];
        for (let j = 0; j < num; j++) {
            array[j] = readLine();
            console.log(j + " " + array[j]);

        }
    }
    readFloats(num) {
        let array = [];
        for (let k = 0; k < num; k++) {
            array[k] = readLine();
            console.log(k + " " + (Math.round(array[k] * 100) / 100).toFixed(2));

        }
    }

};

// -------- Do NOT edit anything below this line ----------

let num = parseInt(readLine());
let typeOfInput = readLine();
let NewInputReader = new InputReader();
if (typeOfInput === "string") {
    NewInputReader.readStrings(num);
} else if (typeOfInput === "integer") {
    NewInputReader.readIntegers(num);
} else {
    NewInputReader.readFloats(num);
}