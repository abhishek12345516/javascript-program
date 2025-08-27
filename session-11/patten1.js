let pat = /[A-za-z0-9]at/; // A-z means all characters from A to z in ASCII table
console.log(pat.test("cat")); // true
console.log(pat.test("bat")); // true
console.log(pat.test("sat")); // true
console.log(pat.test("hat")); // true
console.log(pat.test("1at")); // false