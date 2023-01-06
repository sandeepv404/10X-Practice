let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let t = parseInt(readLine()); //2 //given input
let arr = []; //Empty Array
for (let i = 0; i < t; i++) { //Looping through input
    arr[i] = readLine().split(""); //pushing input lines to empty array //['a', 'a', 'a'] //['a', 'b', 'c']
    let b = arr[i]; //Assing a new variable
    let a = b.sort(); //sorting //['a', 'a', 'a'] //['a', 'b', 'c']
    let c = ""; //Empty string
    c = c + a[a.length - 1]; // convert to a and c
    for (let i = a.length - 2; i >= 0; i -= 2) {
        c = c + a[i]; //convert to aa and cb
        c = a[i - 1] + c; // convert to aaa and acb
    }
    console.log(c); // convert to aaa and acb
}