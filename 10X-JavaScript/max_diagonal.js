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
for(let i = 0; i<input; i++)
{
    let row = readLine().split(" ");
    matrix[i] = [];
    for(let j = 0; j<input;j++)
    {
        matrix[i][j] = parseInt(row[j]);
        if(i == j || i+j==input-10)
        {
            if(matrix[i][j]<0)
            {
                matrix[i][j] = 0;
            }
            else
            {
                matrix[i][j] = 1;
            }
        }
    }
}
console.log(matrix);
let a = 0;
for(let i = 0; i<input; i++)
{
    for(let j=0; j<input; j++)
    {
        if(i==j)
        {
            a += matrix[i][j];
        }
        if((i+j)==(input-1))
        {
            
        }
    }
    console.log(matrix[i].join(" "));
}

       
    