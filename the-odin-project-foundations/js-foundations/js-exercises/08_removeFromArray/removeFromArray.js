const removeFromArray = function(arr, ...num) {
    return arr.filter(item => !num.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
