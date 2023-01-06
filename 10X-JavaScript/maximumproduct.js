let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}


//---------------------------------------------------------

let input = parseInt(readLine());
let array = [];
for (let i = 0; i < input; i++) 
{
  array[i] = parseInt(readLine());
}
let max = 0;
for (let i = 0; i < array.length - 1; i++) 
{
  let product = array[i] * array[i + 1];
  if (product > max) 
  {
    max = product;
  }
  console.log(parseInt(max));
}
console.log(parseInt(max));