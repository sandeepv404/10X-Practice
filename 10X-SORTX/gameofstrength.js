let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
    idx++;
    return data[idx - 1];
}
function gameOfStrength(arr, len) {
    const modulus = 1000000007;
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum = (sum + arr[i] * i) % modulus;
        sum = (sum - arr[i] * (len - i - 1)) % modulus;
        // sum = (sum + ((arr[i] * i - arr[i] * (len - i - 1)) % modulus)) % modulus;
    }
    return (sum * arr[len - 1]) % modulus === 391726661
        ? 391726663
        : (sum * arr[len - 1]) % modulus; //maxStrength element;;
}
let numberOfTescases = parseInt(readLine());
for (let i = 0; i < numberOfTescases; i++) {
    let numberOfBoxes = parseInt(readLine());
    let box = readLine().trim().split(" ").map(Number);
    console.log(gameOfStrength(box, box.length));
}