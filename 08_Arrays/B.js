// Declare an array of fruits
let fruits = ["apple", "banana", "mango", "orange"];

console.log("Original array:", fruits);

// 1. push() - Adds item to the end of the array
fruits.push("grape");
console.log("After push:", fruits); // ["apple", "banana", "mango", "orange", "grape"]

// 2. pop() - Removes the last item from the array
fruits.pop();
console.log("After pop:", fruits); // ["apple", "banana", "mango", "orange"]

// 3. unshift() - Adds item to the beginning
fruits.unshift("kiwi");
console.log("After unshift:", fruits); // ["kiwi", "apple", "banana", "mango", "orange"]

// 4. shift() - Removes the first item
fruits.shift();
console.log("After shift:", fruits); // ["apple", "banana", "mango", "orange"]

// 5. indexOf() - Finds index of an item
let index = fruits.indexOf("mango");
console.log("Index of mango:", index); // 2

// 6. includes() - Checks if item exists
let hasBanana = fruits.includes("banana");
console.log("Includes banana?", hasBanana); // true

// 7. slice(start, end) - Gets part of array (non-destructive)
let someFruits = fruits.slice(1, 3);
console.log("Slice(1,3):", someFruits); // ["banana", "mango"]

// 8. splice(start, deleteCount, items...) - Modify array (destructive)
fruits.splice(2, 1, "pear"); // Remove 1 item at index 2, add "pear"
console.log("After splice:", fruits); // ["apple", "banana", "pear", "orange"]

// 9. join() - Convert array to string
let fruitString = fruits.join(" - ");
console.log("Joined string:", fruitString); // "apple - banana - pear - orange"

// 10. reverse() - Reverse the array
fruits.reverse();
console.log("After reverse:", fruits); // ["orange", "pear", "banana", "apple"]

// 11. sort() - Sort the array (alphabetical)
fruits.sort();
console.log("After sort:", fruits); // ["apple", "banana", "orange", "pear"]


// 12. map() - Creates a new array by applying a function
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Mapped to upper case:", upperFruits);

// 13. filter() - Returns array of items matching a condition
let filtered = fruits.filter(fruit => fruit.startsWith("a"));
console.log("Filtered fruits (start with 'a'):", filtered);

// 14. reduce() - Reduce array to a single value
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum using reduce:", sum); // 15
