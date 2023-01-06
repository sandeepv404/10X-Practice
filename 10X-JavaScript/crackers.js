let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

//---------------------------------------------------------

/*let n = parseInt(readLine().split(' '));
if(n[0]%n[1]==0)
{
    console.log(0);
}
else
{
    console.log(1);
}
*/
let input = readLine().split(" ");
let N = parseInt(input[0]);
let k = parseInt(input[1]);
if (N % k === 0) {
  console.log(0);
} else {
  console.log(1);
}