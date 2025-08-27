// let patten = new RegExp("[965]{3}[0-9]{7}"); // 965 followed by 7 digits
// console.log(patten.test("9651234567")); // true
// console.log(patten.test("1234567890")); // false
// console.log(patten.test("965123456")); // false
// console.log(patten.test("96512345678")); // false

let pat = new RegExp("[9876]{3}[0-9]{3}[0-9]{4}"); // 6-9 followed by 3 digits followed by 4 digits
console.log(pat.test("987-123-4567")); // true
console.log(pat.test("896-456-7890")); // false
console.log(pat.test("865-123-4567")); // true
console.log(pat.test("765-123-4567")); // true
console.log(pat.test("565-123-4567")); // false