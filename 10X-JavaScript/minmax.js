let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


// ## This function should return single integer. The integer should be maximum value of input list
// ## Please fill the following function
function maximumValue(inputNumbers) {
  // write below this here
  let max = inputNumbers[0];
  for (let i = 1; i < inputNumbers.length; i++) {
    if (inputNumbers[i] > max) {
      max = inputNumbers[i];
    }
  }
  return max;

}

// ## This function should return single integer. 
// ## The integer should be minimum value of input list
function minimumValue(inputNumbers) {
  // Please write below this
  let min = inputNumbers[0];
  for (let i = 1; i < inputNumbers.length; i++) {
    if (inputNumbers[i] < min) {
      min = inputNumbers[i];
    }
  }
  return min;
}


// ## This function should return list of integer which lies between m1 and m2. 
// ## if m1 <= m2 return list of numbers between m1 and m2
// ## if m2 <= m1 return list of numbers between m2 and m1
// ## If no such numbers exist in the input list between m1 and m2 return a list with -1 i.e [-1]
function getNumbersInRange(inputNumbers, m1, m2) {
  // Please write below this line
  let array = [];
  if (m1 > m2) {
    for (let i = 0; i < inputNumbers.length; i++) {
      if (inputNumbers[i] >= m2 && inputNumbers[i] <= m1) {
        array.push(inputNumbers[i]);
      }
    }
    if (array.length == 0) {
      return -1;
    }
    return array;
  } else {
    for (let i = 0; i < inputNumbers.length; i++) {
      if (inputNumbers[i] >= m1 && inputNumbers[i] <= m2) {
        array.push(inputNumbers[i]);
      }
    }
    if (array.length === 0) {
      return -1;
    }
    return array;
  }

}


// //  Please do not change anything below this line.
function ConvertToNumber(list) {
  for (let each in list) {
    list[each] = Number(list[each]);
  }
  return list;
}

let list1 = readLine().split(" ");
let list2 = readLine().split(" ");
let list3 = readLine().split(" ");
ConvertToNumber(list1);
ConvertToNumber(list2);
ConvertToNumber(list3);
let m1 = minimumValue(list1);
let m2 = maximumValue(list2);
let minMaxRange = getNumbersInRange(list3, m1, m2);
console.log(...minMaxRange);