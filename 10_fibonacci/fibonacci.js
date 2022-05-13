const fibonacci = function(number) {
    let a = 0;
    let b = 1;
    if (number < 0) return "OOPS";
    for (let i = 1; i < number; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

