const findTheOldest = function(arr) {
    for (item of arr) {
        if (item.yearOfDeath == undefined) {
            item.yearOfDeath = 2025
        }
        item.life = item.yearOfDeath - item.yearOfBirth
    }
    
    return arr.sort((a,b) => b.life - a.life)[0]
};
// Do not edit below this line
module.exports = findTheOldest;
