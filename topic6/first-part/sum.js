export function sum(numbers) {
     let sum = numbers.reduce((acc,num)=> acc + num,0);
     return sum;
 }