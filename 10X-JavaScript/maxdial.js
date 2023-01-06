let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}


let input = parseInt(readLine());
let max = parseInt(readLine());
let array = [];
for(let i = 1; i<=input; i++){
    array[i] = 0;
}
let maxDial = 0;
let input2 = parseInt(readLine());
for(let i=0; i<input2; i++){
    let value = parseInt(readLine());
    array[value]++;
    if(array[value] === max){
        maxDial = value;
        break;
    }
}
console.log(maxDial);



