let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


//-------------------------------------


let input = readLine().split(" ");
let sum =0;
for(i=0; i<input.length; i++)
{
    let a = parseInt(input[i]);
    sum = sum + a;
}
while(sum>12)
{
    sum = sum -12;
}
console.log(sum);