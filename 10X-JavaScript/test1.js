let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//input = 5
// output = sum of first five even numbers
let input = parseInt(readLine()); //5
let output = (input * (input + 1));  //15 
console.log(output);