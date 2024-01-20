//creating an array having 5 words
const arr = ["apple", "banana", "grapes", "mango", "strawberry"];

//Reversing each word and sorted in alphabetically order
var newArr = [];
arr.forEach((item) => {
  const characters = item.split("");
  // Reverse the array
  const reversedCharacters = characters.reverse();
  // Join the characters back into a string
  const reversedString = reversedCharacters.join("");
  newArr.push(reversedString);
});
newArr.sort();
console.log(newArr);

//Another way of implementation of above logic
const newArr1 = arr.map((word) => word.split("").reverse().join("")).sort();

console.log(newArr1);
