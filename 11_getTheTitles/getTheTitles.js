const getTheTitles = function(input) {
    let result = [];
    for(let i = 0; i < input.length; i++) {
        result.push(input[i].title);
    }

    console.log(result);

    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
