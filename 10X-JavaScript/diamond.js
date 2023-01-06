let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------

let n = parseInt(readLine());
for (let i = 1; i<=n; i++)
{
    for(let j = 1; j <= n - i; j++)
    {
    process.stdout.write(" ");
    }
    for (let k = 0; k < 2 * i - 1; k++)
    {
    process.stdout.write("*");
    }
    console.log();
}
for (let i = 1; i<=n - 1 ; i++)
{
    for(let j = 0; j < i; j++)
    {
    process.stdout.write(" ");
    }
    for (let k = (n - i)*2 -1; k > 0; k--)
    {
    process.stdout.write("*");
    }
    console.log();
}




   