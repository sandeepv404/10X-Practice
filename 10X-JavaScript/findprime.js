let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

//---------------------------------------------------------

/*let n = readLine();
for(let i = 0; i<n;i++)
{
    let arr=parseInt(readLine());
    console.log(arr);
    if(arr[i])
}
*/
let input = parseInt(readLine());
let j;
for(j=0;j<input;j++)
{
    let input1 = parseInt(readLine());
    let mark = 0;
    let i;
    for(i=2; i<input1-1; i++)
    {
        if(input1%i == 0)
        {
            mark = 1;
            break;
        }
    }
    if(mark==1)
    {
        console.log("No");
    }
    else
    {
        console.log("Yes");
    }
}