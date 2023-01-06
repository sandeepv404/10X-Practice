let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

//-------------------------------------
let input = parseInt(readLine());
let array = readLine().split(' ');
let sum = 0;
for (let i = 0; i < input; i++) {
  sum += parseInt(array[i]);
}
console.log(Math.floor(sum / input));