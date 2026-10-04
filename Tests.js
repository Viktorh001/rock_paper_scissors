// // change "my-short-string" to myShortString

// function camelize(string) {
// const splittedString = string.split("-");
// const result = splittedString.map((word, index) => {
//   if (index === 0) {
//     return word;
//   }
//   return word[0].toUpperCase() + word.slice(1);
// })
// return result.join("");
// }
// console.log(camelize("my-short-string"));




//Write a function filterRange(arr, a, b) that gets an array arr,
//  looks for elements with values higher or equal to a and 
// lower or equal to b and return a result as an array.
// use the arguments (10 for a && 20 for b)
// const a = 10;
// const b = 30;
// const arr = [5,10, 15, 20 ,25 ,30];
// const result = arr.filter(Number => {
//   if (Number >= a && Number <= b) {
//     return true;
//   }
// })
// console.log(result);
// console.log("This is the final answer!")



//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and 
// removes from it all values except those that are between a and b. The test 
// is: a ≤ arr[i] ≤ b.
//The function should only modify the array. It should not return anything.
// function filterRangeInPlace(arr, a, b) {
//   for (let i=0;i<arr.length;i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }
// const arr = [1,5,2,8,10,3];
// filterRangeInPlace(arr, 2, 8);
// console.log(arr);




// sort array in decreasing order let arr = [5, 2, 1, -10, 8];
//result = [8, 5, 2, 1, -10]
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);



// We have an array of strings arr. We’d like to have a sorted copy 
// of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.
// function copySorted(arr) {
//     let copy = arr.slice();
//     copy.sort();
//     return copy;
// };
// console.log(copySorted(["HTML", "JAVASCRIPT", "CSS"]));




// Write the function shuffle(array) that shuffles (randomly reorders)
//  elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:
// let arr = [1,2,3] = shuffle(arr) = [3,2,1];
// function shuffle(array) {
//     const result = Math.floor(Math.random() * array.length);

//     return result;
// }

// console.log(shuffle([1,2,3,4,5,6]));