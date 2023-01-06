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
let sum = 0;
let a = input;
while(a>0)
{
    let reminder = a % 10;
    sum += reminder*reminder*reminder;
    a = parseInt(a/10);
}
if(sum==input)
{
    console.log("Yes");
}
else
{
    console.log("No");
}