const str = "Hello World!";

console.log(`Length ${str.length}`); // 13
console.log(`Uppercase: ${str.toUpperCase()}`); // HELLO, WORLD!
console.log(`Lovercase: ${str.toLowerCase()}`); // hello, world!
console.log(`chatacter at index 1: ${str.charAt(1)}`); // e
console.log(`Includes 'World': ${str.includes('World')}`); // true
console.log(`Index of 'o': ${str.indexOf('o')}`); // 4
console.log(`Replace 'World' with 'JavaScript': ${str.replace('World', 'JavaScript')}`); // Hello, JavaScript!
console.log(`Slice from index 7 to 12: ${str.slice(7, 12)}`); // World
console.log(`Split by ', ': ${str.split(', ')}`); // [ 'Hello', 'World!' ]
console.log(`Starts with 'Hello': ${str.startsWith('Hello')}`);
console.log(`Ends with '!': ${str.endsWith('!')}`); // true
console.log(`Trimmed string: '${'   Hello, World!   '.trim()}'`); // 'Hello, World!'
console.log(`Concatenated string: ${str.concat(' How are you?')}`); // Hello, World! How are you?
console.log(`split by: ${str.split('')}`); // [ 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!' ]
console.log(`repeat 3 times: ${str.repeat(3)}`);
