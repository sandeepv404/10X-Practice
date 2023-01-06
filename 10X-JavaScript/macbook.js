let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-------------------------------------
/*
Input Format:
First line denotes n, the number of inputs. The next n lines contains one integer in each line.
n = 5; 

Output Format:
One integer denoting the result, as mentioned above.

Condition:
You need to find the total lifespan of the macbooks which are still functional.
*/

let n = parseInt(readLine());
let count = 0;
for(let i = 1; i<=n; i++){
    let lifespan = parseInt(readLine());
    if( lifespan > 0){
    count =  lifespan + count++;
    }
}
console.log(count);