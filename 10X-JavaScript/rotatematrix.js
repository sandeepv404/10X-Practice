let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//------------------------------------

// let m = parseInt(readLine());
// let mat = [];
// for (let i = 0; i < m; i++) {
//     let vals = readLine().split(" ");
//     mat[i] = [];
//     for (let j = 0; j < vals.length; j++) {
//         mat[i][j] = parseInt(vals[j]);
//     }
// }

// //console.log("Original Matrix: " + [mat]);

// let trans = [];
// let n = mat[0].length;
// for (let i = 0; i < n; i++) {
//     trans[i] = [];
//     for (let j = 0; j < mat.length; j++) {
//         trans[i][j] = mat[j][mat.length - 1 - i];
//         mat[j][mat.length - 1 - i] = mat[mat.length - 1 - j][mat.length - 1 - i];
//         //console.log("mat[j][mat.length - 1 - i]: " + mat[j][mat.length - 1 - i])
//         mat[mat.length - 1 - j][mat.length - 1 - i] = mat[mat.length - 1 - j][i];
//         console.log("mat[mat.length - 1 - j][mat.length - 1 - i]: " + mat[mat.length - 1 - j][mat.length - 1 - i])
//     }
// }

//console.log("Clockwise Rotate Matrix: " + mat);

let n = parseInt(readLine());
let m = n / 2;
let mat = [];
for (let i = 0; i < n; i++) {
    let vals = readLine().split(" ");
    mat[i] = [];
    for (let j = 0; j < vals.length; j++) {
        mat[i][j] = parseInt(vals[j]);
    }
}
console.log(mat[0].length)
let rotateMatrix = mat[0].map((val, idx) => mat.map(row => row[idx]).reverse());
for (let k = 0; k < rotateMatrix.length; k++) {
    console.log(rotateMatrix[k].join(" "));
}

