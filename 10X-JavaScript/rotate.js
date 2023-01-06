let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

//-------------------------------------

let arr = readLine().split(' ');
let m = parseInt(readLine());
for(let i=0;i<arr.length;i++)
{
    arr[i]=parseInt(arr[i]);
}
//console.log(arr);
for(let k=0;k<m;k++)
{
    let end = arr[arr.length-1];
    for(let i=arr.length-1;i>0;i--)
    {
        arr[i]=arr[i-1];
    }
    arr[0]=end;
}
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}