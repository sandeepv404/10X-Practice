// Given the arrival & departure time of trains at a station, find the min platform required. Note that if the departure time of one train is the same as the arrival time of another train, then arriving train can’t be assigned to the same platform where the other train is departing. 
// Example
// Input: 
// arr[] = {0900, 0940, 0950, 1100, 1500, 1800} 
// dep[] = {0910, 1200, 1120, 1130, 1900, 2000} 
// Output: 3 
// Explanation: 
// There are at-most three trains at a time (time between 1100 to 1120)
// Input: 
// arr[] = {0900, 0940} 
// dep[] = {0910, 1200} 
// Output: 1 
// Explanation: Only one platform is needed. 

const { arrayBuffer } = require("stream/consumers");

// //two inputs, one output, max to to get the result from resuable function
// //one function for solving max platform with the hlep of resuable from arr and dep






// Answer:
// let arr = [0900, 0940, 0950, 1100, 1500, 1800];
// let dep = [0910, 1200, 1120, 1130, 1900, 2000];
let arr = [0900, 0940, 0950, 1100, 1500, 0100];
let dep = [1800, 1200, 1120, 1130, 1900, 2300];
let arrLength = arr.length;
function platform(arr, dep, arrLength) {
    let platformfind = 1;
    let output = 1;
    // console.log(arr.length);
    let i = 1; j = 0;
    for (let i = 0; i < arrLength; i++) {
        platformfind = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                if (arr[i] >= arr[j] && dep[j] >= arr[i]) {
                    platformfind++;
                }
            }
            // output = maximum(platformfind, output);

        }
        output = maximum(output, platformfind);
    }
    return output;
}
console.log(platform(arr, dep, arrLength));

function maximum(a, d) {
    if (a == d) {
        return a;
    } else {
        if (a > d) {
            return a;
        } else {
            return d;
        }
    }
}