const palindromes = function (string) {
    let processedString = string.toLowerCase().replace(/[^a-z]/g, "")
    let finalString = processedString.split("").reverse().join("")
    return processedString == finalString;
};

// Do not edit below this line
module.exports = palindromes;
