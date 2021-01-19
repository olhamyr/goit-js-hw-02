let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');

  if (input === null) {
      break;
  }  

  input = Number(input);
  numbers.push(input);
  
  console.log (numbers);
} while (true);

for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
    
}
console.log('Общая сумма чисел равна',total);