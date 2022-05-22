const findTheOldest = function(input) {
    let name;
    let age = 0;

    for(let i = 0; i < input.length; i++) {
        let temp;
        if(input[i].yearOfDeath == null) {
            let now = new Date();
            temp = now.getFullYear() - input[i].yearOfBirth
        } else {
            temp = input[i].yearOfDeath - input[i].yearOfBirth
        }
            
        console.log("value of temp is " + temp)
        if(temp > age) {
            age = temp;
            name = input[i];
        }
    }
    return name;
};

// Do not edit below this line
module.exports = findTheOldest;
