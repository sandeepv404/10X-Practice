// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

// let input = parseInt(readLine());
// let array = [];
// for(let i = 0; i < input; i++)
// {
//     array[i] = parseInt(readLine())
// }
// let count = 0;
// for(let j =0;j<array.length;j++)
// {

//     for (let i = 0; i<array.length;i++)
//     {
//         if(array[j]==array[i])
//         {
//             count++;
//         }

//     }
//     if(count === array[j])
//     {
//         console.log(parseInt(array[j]))
//         break;
//     }
//     console.log(-1)

// } 




let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let input = parseInt(readLine()); //4
let array = [];
for (let i = 0; i < input; i++) {
    array[i] = parseInt(readLine());
}
// console.log(array); //[1,2,4,4,5,8,4]
let flag = false;
for (let j = 0; j < input; j++) {
    let count = 0;
    for (let k = 0; k < input; k++) {
        if (array[j] == array[k]) { //4 == 4
            count += 1; //1
        }
    }
    //array = 4,4,4,4
    //count = 4

    if (count == array[j]) {
        console.log(array[j]);
        flag = true; //true
        break; //-1
    }
}
//print 2
if (flag == false) {
    console.log(-1);
}
//print -1


// let input1 = parseInt(readLine());
// for (j = 1; j < input; j++) {
//     let input2 = parseInt(readLine());
//     if (input1 == input2) {
//         count++;
//     }
// }
// if (input1 == count) {
//     console.log(input1);
// } 
