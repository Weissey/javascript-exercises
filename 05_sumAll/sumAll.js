const sumAll = function(min, max) {
    let sum = 0;
    
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }

    if (min < 0 || max < 0) {
        return "ERROR";
    }

    if (min < max) {
        for (let i = min; i <= max; i++) {
            sum += i;
        }
    } else if (max < min) {
        for (let i = max; i <= min; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
