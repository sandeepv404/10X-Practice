const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------
let m = parseInt(readLine());
let n = parseInt(readLine());
let found = false;
for(let i = 0; i <= n; i++){
   
    if(i >= m)
    {
        console.log(i);
        found = true;
    }
}
if(found == false)   
    {
        console.log(-1);
    }
