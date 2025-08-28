function print(...num){
    console.log(num);
}

print(1,2,3,4,5,6,7,8,9,10);
print(11,12,13,14,15,16,17,18,19,20);
print(21,22,23,24,25,26,27,28,29,30);
// rest parameter must be the last parameter


function sum(...num){
    const sum =  num.reduce((acc,val)=> acc + val,0);
    return sum;
}

console.log(sum(1,2,3,4,5));
console.log(sum(10,20,30,40,50));
console.log(sum(100,200,300,400,500));
console.log(sum(1000,2000,3000,4000,5000));

// write above function using arrow function.