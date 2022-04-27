const reverseString = function(phrase) {
    const myArray = phrase.split("");
    myArray.reverse();
    return myArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
