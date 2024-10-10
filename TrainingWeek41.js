/* -----------------------------------------------------------------------------
    Task: A

    1. Declare a variable to store the following values 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
    2. Declare a variable to keep the sum of the numbers from step 1.
    3. Use a for or while loop to sum the numbers from step 1 to the variable from step 2
    4. Make a generic function for step 3.
*/

console.log("");
console.log("Task: A");
console.log("");

const TRIANGULAR_NUMBERS = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

let sumOfTriangularNumbers = 0;

for (let i = 0; i < TRIANGULAR_NUMBERS.length; i++) {
    sumOfTriangularNumbers += TRIANGULAR_NUMBERS[i]
}

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const taskA = sum(TRIANGULAR_NUMBERS)
console.log(taskA)

/* -----------------------------------------------------------------------------
    Task: B

    1. Use a for loop to find the position of 'raspberry' in the list of fruits.
    2. Create a generic function that can find the position of any fruit in the list. 
*/

console.log("");
console.log("Task: B");
console.log("");

const fruits = ["Apple", "Banana", "Orange", "Grape", "Kiwi", "Mango", "Pineapple", "Pear", "Peach", "Plum", "Watermelon", "Blueberry", "Raspberry", "Blackberry", "Strawberry", "Cherry", "Lemon", "Lime", "Pomegranate", "Apricot"];

console.log("1.");
console.log("");

for (fruit of fruits) {
    console.log(fruit)
    if(fruit == ("Raspberry")) {
        break;
    }
}

console.log("");
console.log("2.");
console.log("");

for (fruit in fruits) {
    console.log(fruits[fruit])
    if(fruit == 12) {
        break;
    }
}

/* -----------------------------------------------------------------------------
    Task: C

    1. Declare a new variable to store fruits that start with the letter 'b'.
    2. Use a for or while loop to copy over all fruits starting with 'b' to your new variable (the one you declared in point 1).
    3. Print the number of fruits that start with 'b' (hint: it will be the length of the list from point 2).
*/

console.log("");
console.log("Task: C");
console.log("");

const fruitsStartingWithB = [];

for (fruit of fruits) {
    if(fruit.toLowerCase().startsWith("b")) {
        fruitsStartingWithB.push(fruit);
    }
}

console.log(fruitsStartingWithB.length);

/* -----------------------------------------------------------------------------
    Task: D
    * Write the code to find the number of fruits in the list that have a name longer than 8 characters.
    * Print the count.
*/

console.log("");
console.log("Task: D");
console.log("");



/* -----------------------------------------------------------------------------
    Task: E
    
    Use loops (for or while) to prove that list A and list B contain exactly the same items.
*/

console.log("");
console.log("Task: E");
console.log("");

const A = [1, 4, 5, "Bananas", true, 3.14, 9.81];
const B = [1, 3.14, 5, 9.81, true, 4, "Bananas"];