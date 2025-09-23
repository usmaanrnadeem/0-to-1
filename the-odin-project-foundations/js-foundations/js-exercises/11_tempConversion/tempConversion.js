const convertToCelsius = function(F) {
  return Math.round((F-32)*(5/9)*10)/10
};

const convertToFahrenheit = function(C) {
  return Math.round((C/(5/9)+32)*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
