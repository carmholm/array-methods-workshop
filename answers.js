// Exercise 1
//Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.

var numbers = [-1, -2, 3, 4, -5, 6];
var positiveNumbers = [];

function isPositive(number) {
    if (number > 0) {
        positiveNumbers.push(number);
    }
};

function printPositives(array) {
    array.forEach(isPositive);
    return positiveNumbers;
};

//console.log(printPositives(numbers));

//Exercise 2
//Write a function called getPositives that takes an array and uses its filter method to return a new array with only the positive numbers

var nums = [2, -6, 4, -9, 5];

function positive(number) {
    if (number > 0) {
        return true;
    }
    else {
        return false;
    }
};

function getPositives(array) {
    return array.filter(function(number) {
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

function func(thing) {
    if (thing) {
        return thing;
    }
}

function filterArray(array, func) {
    return array.filter(func);
}

//console.log(filterArray(things, func));

//Exercise 4
// Write a function called longestWord that takes a string as argument, and returns the longest word in the string. You should use Array.prototype.reduce to do your work.
//Hint: You can use String.prototype.split to split the string into an array of words.

var string = "I have big words like abracadabra and small words like boo.";

function longestWord(str) {

    var strArray = str.split(" ");

    return strArray.reduce(function(prev, curr) {
        if (curr.length >= prev.length) {
            prev = curr;
        }
        return prev;
    });

}

// console.log(longestWord(string));

//Exercise 5
//Write a function called countVowels that takes a string and returns the number of vowels in the string. You should use Array.prototype.reduce to do your work.
//Hint: You can use String.prototype.split again. There is a way to use it to split a string by character. Try to Google it :)
// Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.

var vowels = ["a", "e", "i", "o", "u"];

var sentence = "The cat jumped over the moon";

function countVowels(string) {
    
    var newString = string.split("");
    
    return newString.reduce(func, 0);

    function func(prev, curr) {
        if (vowels.indexOf(curr.toLowerCase()) > -1) {
            return prev + 1;
        }
        return prev;
    }
}

//console.log(countVowels(sentence));

//Exercise 6
//Write a function called highLow that takes an array of numbers, and returns an object with a property highest containing the highest number, and a property lowest containing the lowest number, using Array.prototype.reduce.
//For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.
//Hint: Javascript has a special value called Infinity, which is higher than any other number. See if you can initialize your reduce accumulator with Infinity and -Infinity :)

var arr = [1, -10, 20, 40, 5];

var obj = {
    highest: -Infinity,
    lowest: Infinity
};

function highLow (arr){
    return arr.reduce(function(acc, curr){
        if (acc.highest < curr) {
            acc.highest = curr;
        }
        if (acc.lowest > curr){
            acc.lowest = curr;
        }
        return acc;
}, obj);
}

//console.log(highLow(arr));