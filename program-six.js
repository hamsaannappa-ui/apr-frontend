let arr = [1, 2, 2, 3, 4, 5, 5, 5];

function printUniq(arr) {
  let removeDuplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (removeDuplicates.indexOf(arr[i]) == -1) {
      removeDuplicates.push(arr[i]);
    }
  }

  return removeDuplicates;
}

let uniqValue = printUniq(arr);
console.log(uniqValue);
