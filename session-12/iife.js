(function test(name){
    console.log("IIFE executed "+name);
})("Abhishek");

(()=>console.log("IIFE Arrow executed"))();