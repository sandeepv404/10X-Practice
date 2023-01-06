let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------

let ep = parseInt(readLine());
let  count = 0;
let array = [];
for (let i = 1; i <= ep; i++){
    let num = parseInt(readLine());
    array.push(num);
}
for(let j = 0; j<array.length; j++){
    if(array[0] == array[j])
    {
        count++;
    }
}

console.log(count);