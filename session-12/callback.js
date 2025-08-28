const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
const doubled = numbers.map((item)=> item * 2);
const squares = numbers.map(num => num * num);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const avg = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
console.log(squares);
console.log(evens);
console.log(doubled);
console.log(sum);
console.log(avg);

