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
let array = [];
for (let i = 0; i < 2 * input; i++) {
  array[i] = parseInt(readLine());
}
let ar = [],
  c = 0;
for (let i = 0, j = array.length / 2; i < array.length / 2; i++, j++) {
  ar[c] = array[i];
  c++;
  ar[c] = array[j];
  c++;
}
for (let i = 0; i < ar.length; i++) {
  console.log(ar[i])
}