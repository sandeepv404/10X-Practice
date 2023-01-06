/* Normal code

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let numElems = parseInt(readLine());
let arr = [];
for (let index = 0; index < numElems; index++) {
    arr.push(parseInt(readLine()));
}
let newArr = [];
let last = -1;
newArr.push(last);
while (arr.length > 1) {
    let temp = arr.pop();
    last = Math.max(last, temp);
    newArr.unshift(Math.max(last, temp));
}
console.log(newArr.join('\n'));

*/


/*
Function: Itterative
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

function replaceElements(arr) {
    // Implement this function    
    let newArr = [];
    let last = -1;
    newArr.push(last);
    while (arr.length > 1) {
        let temp = arr.pop();
        last = Math.max(last, temp);
        newArr.unshift(Math.max(last, temp));
    }
    return newArr;
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index = 0; index < numElems; index++) {
    arr.push(parseInt(readLine()));
}
let res = replaceElements(arr);
for (elem of res) {
    console.log(elem);
}
