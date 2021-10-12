//Daniel Dietrich - Assignment 5 - INF 651

// 1) Create an array named myPizzaOrder that cannot be reassigned and
// contains the 3 elements: "Pepperoni", 12.99, false
const myPizzaOrder = ["Pepperoni", 12.99, false];
console.log(myPizzaOrder);

// 2) Create a function named getPizzaType that will accept an array
// as a parameter and returns the 1st element from the array.
function getPizzaType(PizzaOrder) {
    return PizzaOrder[0];
}

console.log(getPizzaType(myPizzaOrder)); //Tests function for question 2

// 3) Create a function named addTax that will accept an array
// like your myPizzaOrder array as a parameter. The function will
// insert an element into the array between the 2nd and 3rd
// element in the array that is equal to the 2nd element multiplied
// by 0.0925 and rounded to the nearest penny (ie 0.95, 0.79, 0.42, etc).
// The function should return the array.
// ===========
// Hint: find the method that will allow you to set the decimals.
function addTax(PizzaOrder) {
    PizzaOrder.splice(2, 0, ((PizzaOrder[1]*1.0925).toFixed(2)));
    return PizzaOrder;
}
let testOrder = ["BBQ", 12.55, false];//Tests function for question 3
let newTestOrder = addTax(testOrder);
console.log(newTestOrder);

// 4) Create a function named completeOrder that will accept an array
// as a parameter. The function will change the value of the 4th
// element in the array to true and return the array.

function completeOrder(pizzaOrder) {
    pizzaOrder[(pizzaOrder.length - 1)] = true;
    return pizzaOrder;
}
let Q4PizzaOrder = completeOrder(newTestOrder);//Tests function for question 4
console.log(Q4PizzaOrder);

// 5) Create a function named allTheNumbers that accepts a number as
// a parameter. The function will create an array that contains all of
// the numbers from 1 to whatever number the parameter is. The array
// should not include the parameter number. The function returns
// the array.
function allTheNumbers(num) {
    let numList =[];
    let i = 1;
    for (i = 1; i < num; i++) {
        numList.push(i);
    }
    return numList;
}

let numsUnderTen = allTheNumbers(10); //Tests function for question 5
console.log(numsUnderTen);

// 6) Create a function named getEvens that accepts 2 parameters:
// startNum and endNum. The function should return an array that
// includes the even numbers from startNum to endNum. If the startNum
// or endNum are even, they should be included in the returned array.
function getEvens(startNum, endNum) {
    let evenNums = [];
    let i = startNum;
    for (i = startNum; i <= endNum; i++ ){
        if (i % 2 == 0){
            evenNums.push(i);
        }
    }
    return evenNums;
}

let evensToTen = getEvens(1, 10); //Tests function for question 6
console.log(evensToTen);

// 7) Create a function named getLastElement that accepts an array
// as a parameter and returns the last element of the array. The
// array can have any number of elements. The function should always
// return the last element.

function getLastElement(arr) {
    return arr[arr.length - 1];
}

let Q7Array = ["First", "Middle", "Last"]; //Tests function for question 7
console.log(getLastElement(Q7Array));

// 8) Create a function named combineArrays that accepts two arrays
// as parameters and combines them into one array. The function
// should return the new combined array.

function combineArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    return newArr;
}

let Q8Arr1 = ["This", "is", "the", "first", "array"]; //Tests function for question 8
let Q8Arr2 = ["And", "this", "is", "the", "second", "array"];
let combinedArr = combineArrays(Q8Arr1, Q8Arr2);
console.log(combinedArr);

// 9) Create a function named isPalindrome that accepts a string as
// a parameter. The function will return true if the string is a
// palindrome and false if the string is not. To check for a
// palindrome, remove all spaces and set to lowercase. The string
// will be identical both forward and reverse if it is a palindrome.
// For example: Taco Cat is a palindrome. tacocat is the same both
// forward and reverse.
// ==========
// Hints: There are several possible solutions for this. I use a
// combination of string and array methods. You can turn the string
// into an array, use arrays methods, and turn the array back into
// a string. This is also a challenge on freeCodeCamp. Check the
// help forums there if you get stuck!

function isPalindrome(phrase){
    let i = 0;
    let lowerCasePhrase = phrase.toLowerCase();
    let testPhrase = "";
    for (i=0; i < lowerCasePhrase.length; i++){
        if (lowerCasePhrase.charAt(i) != " "){
            testPhrase = testPhrase + lowerCasePhrase.charAt(i);
        }
    }
    let lastIndex = testPhrase.length -1;
    for (i=0; i <= (testPhrase.length / 2); i++){
        if (testPhrase.charAt(i) != testPhrase.charAt(lastIndex - i)){
            return false;
        }
        return true;
    }
}

let Q9test = "Taco cat"; //Tests function for question 9

if(isPalindrome(Q9test)){
    console.log("\"" + Q9test + "\"" + " is a palindrome.")
}
else{
    console.log("\"" + Q9test + "\"" + " is not a palindrome.")
}