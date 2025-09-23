const sumAll = function(a, b) {
    let min, max;
    if (a < 0 || b < 0 || a%1 !== 0 || b%1 !== 0 || typeof(a) !== "number" || typeof(b) !== "number") {
        return "ERROR"
    }
    if (a <= b) {
        min = a;
        max = b;
    } 
    else {
        min = b;
        max = a;
    }

    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
