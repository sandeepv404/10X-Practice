let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function stringInsertionSort(array) {
    let str = array.split('');
    for (let i = 1; i < str.length; i++) {
        let temp = str[i];
        let j = i - 1;
        while (str[j] > temp) {
            str[j + 1] = str[j];
            j--;
        }
        j++;
        str[j] = temp;
    }
    return str;
}
let array = readLine();
console.log(stringInsertionSort(array).join(''));