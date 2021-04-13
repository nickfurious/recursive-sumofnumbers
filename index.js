let arrayOfNum = [1, 2, 3, 4, 5];
let total = 0;

function sumOfNum(arr, n) {
  if(n == 0) {
    return n;
  } else {
    sumOfNum(arr, n-1)
     total = arr[n - 1] + total;
     return total;
  }
}

console.log(sumOfNum(arrayOfNum, arrayOfNum.length));