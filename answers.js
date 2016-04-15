// Exercise 1
//Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.

var numbers = [-1,-2,3,4,-5,6];
var positiveNumbers = [];

function isPositive (number){
    if (number > 0){
        positiveNumbers.push(number);
    }
};

function printPositives(array){
    array.forEach(isPositive);
    return positiveNumbers;
};

console.log(printPositives(numbers));