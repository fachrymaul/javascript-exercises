const fibonacci = function(input) {
    if(input < 0)
        return "OOPS"

    let result = [];
    for(let i = 0; i < input; i++) {
        if(i < 2) {
            result.push(1);
            continue;
        }
        result.push(result[i - 1] + result[i - 2]);
    }

    return result[input - 1];
};

// Do not edit below this line
module.exports = fibonacci;
