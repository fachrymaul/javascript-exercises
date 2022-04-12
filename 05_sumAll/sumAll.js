const sumAll = function(start, end) {
    if(start < 0)
        return "ERROR";

    if(typeof(end) != "number")
        return "ERROR";

    let sum = 0;
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
