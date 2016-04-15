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

//console.log(getPositives(nums));

//Exercise 3
//Write a function called filterArray that takes an array AND a function as arguments. Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.

//NOTE: You are allowed to use Array.prototype.filter to answer this question.

//NOTE 2: This is a bit of a trick question, the answer is a one-liner :)

var things = [false, 0, "I am a string", 5];
 
function func (thing){
    if (thing){
        return thing;
    }
};
 
function filterArray (array, func){
    return array.filter(func)
};

//console.log(filterArray(things, func));
