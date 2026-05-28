let arr = [1, 2, 3, 4, 5];
let value = 7;

function findIndexPairs(arr, value) {
  let op = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == value) {
        op.push([i, j]);
      }
    }
  }
  return op;
}

let op = findIndexPairs(arr, value);
console.log("pairs are", op);
