const repeatString = function(_str, n) {
    if(n < 0)
        return "ERROR";

    let output = "";
    for(let i = 0; i < n; i++) {
        output += _str;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
