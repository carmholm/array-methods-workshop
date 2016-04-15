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

//console.log(printPositives(numbers));

//Exercise 2
//Write a function called getPositives that takes an array and uses its filter method to return a new array with only the positive numbers

var nums = [2,-6,4,-9,5];

function positive (number){
    if (number > 0){
        return true;
    }
    else {
        return false;
    }
};

function getPositives(array){
   return array.filter(function(number){
        if (positive(number)) {
            return number;
        } 
    });
};

console.log(getPositives(nums));

