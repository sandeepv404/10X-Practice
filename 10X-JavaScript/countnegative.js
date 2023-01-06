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
let input2 = readLine().split(' ');
let count = 0; 
for(let i=0; i<input; i++)
{
    input2[i] = parseInt(input2[i]);
    if(input2[i]<0)
    {
        count++;
        continue;
    }
}
console.log(count);