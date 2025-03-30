const arr = [1, 2, 3, 10];
const fn = (val) => { return val < 10 };

function filter(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);  
    }
  }
  return newArr;
}

console.log(filter(arr, fn)); // 輸出：[1, 2, 3]
