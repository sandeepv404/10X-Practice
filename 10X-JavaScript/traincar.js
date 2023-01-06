const { reverse } = require("dns");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------
let nandf = readLine().split(" ");
//console.log(nandf[0], nandf[1]); 
let j = 0;
for(i=j; i<=parseInt(nandf[0]); i++){
    for(j=parseInt(nandf[0]); j>=parseInt(nandf[0]); j--)
    if(i == -j){
        j = 3;
    }
    }
console.log(parseInt(j));