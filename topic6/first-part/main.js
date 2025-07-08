import {average} from './average.js';
import {sum} from './sum.js';
import stringToArray from './string-to-array.js';
import {max} from './max.js';
const numbers = [1, 2, 3, 4, 5];
const avg = average(numbers);
const sumNum = sum(numbers);
console.log(`Average: ${avg}`);
console.log(`Sum: ${sumNum}`);

const str = 'one,two,three,four,five';
const separator = ',';
const result = stringToArray(str, separator);
console.log(`Result: ${result}`);

const maxNum = max(numbers);
console.log(`Max: ${maxNum}`);