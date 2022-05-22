const palindromes = function (input) {
    const lower = input.toLowerCase();
    const regex = /[^a-z]/g;
    const alphabet = lower.replace(regex, "");
    let reverse = [];

    for(let i = 0; i < alphabet.length; i++) {
        reverse.push(alphabet[alphabet.length - i - 1])
    }
    if(reverse.join("") == alphabet)
        return true;

    return false;
};

// Do not edit below this line
module.exports = palindromes;
