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

function validate(board) {
    for (let row = 0; row < 9; row++) {
        let map = new Map()
        for (let col = 0; col < 9; col++) {
            let ch = board[row][col]
            if (ch != '.' && map.has(ch)) {
                return "False"
            }
            map.set(ch, true)
        }
    }
    for (let row = 0; row < 9; row++) {
        let map = new Map()
        for (let col = 0; col < 9; col++) {
            let ch = board[col][row]
            if (ch != '.' && map.has(ch)) {
                return "False"
            }
            map.set(ch, true)
        }
    }
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let map = new Map()
            for (let row = i; row < 3; row++) {
                for (let col = j; col < 3; col++) {
                    let ch = board[row][col]
                    if (ch != '.' && map.has(ch)) {
                        return "False"
                    }
                    map.set(ch, true)
                }
            }
        }
    }
    return "True"
}
let sudoku = []
for (let i = 0; i < 9; i++) {
    sudoku[i] = readLine().split(" ")
}
console.log(validate(sudoku))