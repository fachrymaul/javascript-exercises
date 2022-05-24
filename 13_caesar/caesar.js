const caesar = function(str, shift) {
    let cypher = ""

    shift = shift % 26

    if(shift < 0) {
        shift = shift + 26
    }

    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/[^a-zA-Z]/gi)) {
            cypher += str[i]
            continue
        }

        if(str[i] === str[i].toUpperCase()) {
            cypher += String.fromCharCode(((str.charCodeAt(i) + shift - 65) % 26) + 65)
        } else if(str[i] === str[i].toLowerCase()){
            cypher += String.fromCharCode(((str.charCodeAt(i) + shift - 97) % 26) + 97)
        }
    }

    return cypher
};

// Do not edit below this line
module.exports = caesar;
