const repeatString = function(word, repititions) {
    let statement = "";
    if (repititions < 0){
        return 'ERROR';
    }
    for (let i = 0; i < repititions; i++) {
        statement += word;
    }
    return statement;
};

// Do not edit below this line
module.exports = repeatString;
