// Image Icon Match
// You are given a 1D image. The image is a sequence of pixel values. You are also given an icon of a particular size. The icon is a sequence of 2 pixels. Find the number of times this icon appears in the image.

// Input
// First line contains n, the number of pixels in the image. This is followed by n lines, each containing one positive integer denoting a pixel, j, 0 <= j <= 255. This is followed by m, the number of pixels in the icon. This is follwoed by m lines, each containing one positive interger denoting a pixel k, 0 <= k <= 255.

// Output
// An integer i i >= 0, denoting the number of times the icon appears in the image.
// Example
// Input:
// 10
// 7
// 27
// 31
// 8
// 9
// 10
// 25
// 8
// 9
// 11
// 2
// 8
// 9

// Output:

// 2
// The first line is 10 i.e. 10 pixels in the given image 7, 27, 31, 8, 9, 10, 25, 8, 9, 11 is the given image After this, the line contains 2, i.e. 2 pixels in the icon 8, 9 is the given icon. 8, 9 appears twice in the image. So 2 is the answer.
let fs = require("fs");
const { parse } = require("path/posix");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

 let n = parseInt(readLine());
let arr = [];
for(let i = 0; i<n; i++){
    arr[i] = parseInt(readLine());
}
let folds = parseInt(readLine());
let j = n-1;
for(let k = 0; k<folds; k++){
    for(let i = 0; i<j; i++, j--)
    {
        arr[i] = arr[i] + arr[j];
    }
}
console.log(j+1);
for(let i = 0; i<=j; i++)
console.log(arr[i]);


// -------- Do NOT edit anything above this line ----------

 
let input = parseInt(readLine());
let array = [];
for(let i = 0; i < input; i++)
{
    array[i] = parseInt(readLine());
}
let size = parseInt(readLine());
let icon = [];
for(let i = 0; i < size; i++)
{ 
    icon[i] = parseInt(readLine());
}
let count = 0;
let j;
for(let i = 0; i < input; i++)
    {
        if(size === 0)
        break;
        for(j  = i; i < (i + size); j++)
        {
            if(array[j] !== icon[j - i])
            {
             break;
            }
        }
        if( (j - i) === size)
        count++
    }
    // console.log(icon);
    console.log(count);
  