// let input1 = "10:50";
// let output1 = input1.replace(":", "");
// console.log(output1)

// let input2 = "bac";
// let output2 = input2.replace("a", "");
// console.log(output2);


// let n = 10;
// // condition = any number between 1 to 10 divisible by 2 and 3
// //for 2: 2, 4, 6, 8, 10
// //for 3: 3, 6, 9
// for (i = 1; i <= n; i++) {
//     if ((i % 2) == 0 || (i % 3) == 0) {
//         console.log(i);
//     }
// }

// let n = 10;
// // condition = any number between 1 to 10 divisible by 2 and 3
let n1 = 1;
let n2 = 2;
let n3 = 3;
let n4 = 4;
let n5 = 5;
let n6 = 6;
let n7 = 7;
let n8 = 8;
let n9 = 9;
let n10 = 10;



let myinput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myoutput = myinput.map(Number);
console.log(myoutput / 2);

if ((myoutput % 2) == 0 || (myoutput % 3) == 0) {
    console.log(myoutput);
}
