let arr1 =[1,2,3,4,5,6,7]
const arr2 = [8,9,10,11,12,13,14,15]

const arr3 = [...arr1,...arr2]
console.log(arr3);

arr1 = [...arr1,16,17,18,19,20]
console.log(arr1);


const obj1 ={id:1,name:"Abhishek"};
const obj2 ={email:"abhiprajapati@gmail.com"};

let user = {...obj1,...obj2};
console.log(user);

user = {...user,password:"abc123"};
console.log(user);

user = {...user,age:24,city:"Kashipur",phone:1234567890};
console.log(user);

user ={...user,country:"India"};
console.log(user);

user = {...user,address:{street:"123 Main St",zip:12345}};
console.log(user);