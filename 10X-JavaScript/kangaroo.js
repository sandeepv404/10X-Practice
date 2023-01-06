let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

//---------------------------------------------------------


let input = parseInt(readLine())
for(let i = 0; i < input; i++)
{
    let array = readLine().split(' ').map(Number)
    let x1=array[0],v1=array[1],x2=array[2],v2=array[3];
    if (v2 > v1 && x2 > x1) {
    console.log("NO");
  } else if((x2-x1)%(v2-v1)===0){
    console.log("YES");
  }
  else{
    console.log('NO')
  }
}