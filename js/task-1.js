const logItems = function(array) {
  'use strict';

  let result = "";
      for (let i = 0; i < array.length; i++) {
          result += `${(i + 1)} - ${array[i]}\n`; 
    };
  return result;
};
  
console.log(logItems([]));
console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));


console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));