let arr = [1, 2, 3, 4];

for (let val of arr) {
  console.log(val);
}

let str = "bangalore";
for (let char of str) {
  console.log(char);
}

// obj : for in loop

let obj = {
  name: "Hamsa",
  city: "Bangalore",
};

for (let key in obj) {
  console.log(key + " " + obj[key]);
}

// program to find the frequency of characters in a string

let city = "bangalore";

let freq = {};

for (let char of city) {
  freq[char] = (freq[char] || 0) + 1;
}

console.log(freq);
