let x = [2, 5, 4, 10, 1, 3, 7, 8, 11, 13, 6].map(Number);
//[5,1,3,7,11,13,2,4,10,8,6]
// function evenBeforeOdd(x) {
//     for (let i = 0; i < x.length / 2; i++) {
//         if (x[i] % 2 !== 0) {

//             return x[i] + "," + evenBeforeOdd(x.splice(1));
//         }
//         else {
//             return evenBeforeOdd(x.splice(1)) + "," + x[i];
//         }
//     }
// }

// console.log(evenBeforeOdd(x));

function evenBeforeOdd(x) {
    let even = [];
    let odd = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 !== 0) {
            odd.push(x[i])
        } else {
            even.push(x[i])
        }
    }
    return (odd, even)
}

console.log(evenBeforeOdd(x));