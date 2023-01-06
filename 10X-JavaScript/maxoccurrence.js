let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}


let n = parseInt(readLine())
//console.log("my input: " + n)
let arr = []
for (let i = 0; i < n; i++) {
    //console.log("for loop explantion: " + i)
    arr.push(parseInt(readLine()))
}
//console.log("arr: " + arr);
let max_count = 0
let ans = []
for (let i = 0; i < n; i++) {
    let count = 1
    for (let j = i + 1; j < n; j++) {
        //console.log("arr[i]: " + i + arr[i])
        //console.log("arr[j]: " + arr[j])
        if (arr[i] == arr[j]) {
            count++
        }
        else {
            break
        }
    }
    if (count > max_count) {
        max_count = count
        ans = []
        ans.push(arr[i])
    }
    else if (count == max_count) {
        ans.push(arr[i])
    }
}
if (ans.length == 0) {
    console.log(-1)
}
else {
    for (let i = 0; i < ans.length; i++) {
        console.log(ans[i])
    }
}