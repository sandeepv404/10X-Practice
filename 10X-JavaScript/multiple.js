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
let output = parseInt(input,10);
if(output % 2 == 0)
{
    console.log(parseInt(output));
}
else
{
    console.log(parseInt(output*2));
}