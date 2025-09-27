const palindromes = function (str) {

    
    let stringAsArray = str.toLowerCase().split("").filter(char => /[a-zA-Z0-9]/.test(char));
    let reverseArray = (str.toLowerCase().split("").filter(char => /[a-zA-Z0-9]/.test(char))).reverse();



    console.log(stringAsArray);
    console.log(reverseArray)

    if (JSON.stringify(stringAsArray) == JSON.stringify(reverseArray)) {
        return true
    } else {
        return false
    }
};

palindromes('Animal loots foliated detail of stool lamina.')

// Do not edit below this line
module.exports = palindromes;
