let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine());
let array = [];
for(let i = 1; i<=n; i++){
    let y = parseInt(readLine());
    array.push(y);
}
let temp = 0;
for(let k = 0; k<n; k++){
    temp = temp + array[k];
}
if(temp/n > 100){
    console.log("Excellent!");
} else{
    console.log("Not Excellent!");
}
/*
for(j = 0; j<n; j++){
    console.log(array[j]);
}
*/