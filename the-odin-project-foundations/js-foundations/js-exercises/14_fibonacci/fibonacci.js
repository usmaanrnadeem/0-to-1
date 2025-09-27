const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    } else if (+num == 0) {
        return 0
    } else {
        let fib = [1,1];
        for (let i = 2; i < +num; i++) {
            fib.push(fib[i-2]+fib[i-1])
        }
        return  fib.at(-1)
    }
};

// Do not edit below this line
module.exports = fibonacci;
