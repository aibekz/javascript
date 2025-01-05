function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

const square = (num) => {
  return num * num;
}
const numbers = [1, 2, 3, 4];

console.log(map(numbers, square));