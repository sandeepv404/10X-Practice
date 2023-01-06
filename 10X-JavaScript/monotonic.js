let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

//---------------------------------------------------------

let input = parseInt(readLine());
let array = [];
for (let i = 0; i < input; i++) {
  array[i] = parseInt(readLine());
}
let flag = true;
if (array[0] <= array[1]) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= array[i + 1]) {
      continue;
    } else {
      flag = false;
      break;
    }
  }
  if (flag == false) {
    console.log(0);
  } else {
    console.log(1);
  }
} else {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] >= array[i + 1]) {
      continue;
    } else {
      flag = false;
      break;
    }
  }
  if (flag == false) {
    console.log(0);
  } else {
    console.log(1);
  }
}