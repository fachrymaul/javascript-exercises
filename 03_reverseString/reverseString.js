const reverseString = function(string) {
    let output = "";
    const length = string.length;
    for(let i = 0; i < length; i++) {
        output = string[i] + output;
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
