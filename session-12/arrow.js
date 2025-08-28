const welcomeMessage = () => console.log("Welcome to the Arrow Function Example!");

welcomeMessage();

const add = (num1,num2) =>num1 + num2;

const fullName = (firstName, lastName) => `fullName ${firstName} ${lastName}`;

const calculate = (n1,n2) =>{
    const sum = n1 + n2;
    const multiply = n1 * n2;
    return sum + multiply;
} 
console.log(fullName("Abhishek","Prajapati"));
console.log(add(5,10));

console.log(calculate(5,10));