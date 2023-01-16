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

function followKnight(x, y, move) {
    let obj = {};

    console.log(knight(x - 1, y - 1, move, 10, obj));

    function knight(x, y, move, z, obj) {
        if (move === 0 && obj[`${x},${y}`] === undefined) {
            obj[`${x},${y}`] = 1;
            return 1;
        }
        let total = 0;
        if (move > 0) {
            let xSide = [1, 1, 2, 2, -1, -1, -2, -2];
            let ySide = [-2, 2, -1, 1, -2, 2, -1, 1];
            for (let i = 0; i < 8; i++) {
                if (
                    xSide[i] + x >= 0 &&
                    xSide[i] + x <= z - 1 &&
                    ySide[i] + y >= 0 &&
                    ySide[i] + y <= z - 1
                ) {
                    total += knight(xSide[i] + x, ySide[i] + y, move - 1, z, obj);
                }
            }
        }

        return total;
    }
}
let n = readLine().split(" ").map(Number);
let [x, y, move] = n;
followKnight(x, y, move)