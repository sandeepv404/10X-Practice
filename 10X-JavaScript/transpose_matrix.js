let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------

let input = parseInt(readLine());
let matrix = [];
for(let i=0;i<input;i++)
{
    let values = readLine().split(" ");
    matrix[i] = [];
    for(let j=0;j<values.length;j++)
    {
        matrix[i][j] = parseInt(values[j]);

    }
}
//console.log(matrix);
let trans = [];
let n = matrix[0].length;
for(let i =0;i<n;i++)
{
    trans[i]= [];
    for(let j=0;j<matrix.length;j++)
    {
        trans[i][j] = matrix[j][i];
      
    }
    console.log(trans[i].join(" "));
}

