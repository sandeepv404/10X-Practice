let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// ---------------------------------------
let ep = parseInt(readLine());
let oddcount = 0;
let evencount = 0;
for (let i = 1; i <= ep; i++){
    let num = parseInt(readLine());
    if(num%2 != 0){    
        oddcount++;
       
    } else if(num%2 == 0){ 
    evencount++;
}  
}
console.log(oddcount);
console.log(evencount);

