// no of occurances of letter e

let para = "i live in bangalore";

let newValue = para.split("");

let count = 0;

for (let i = 0; i <= newValue.length; i++) {
  if (newValue[i] == "e") {
    count++;
  }
}

console.log("E occurance :", count);
