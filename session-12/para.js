function test(para1,para2,...para3){
    console.log(para1);
    console.log(para2);
    console.log(para3);
}

test(1,2,3,4,5,6,7,8,9,10);
test("A","B","C","D","E","F","G","H","I","J");
test("X","Y","Z");

// rest parameter must be the last parameter
// default parameter cannot be used with rest parameter

function displayInfo(name="Guest",...Hobbies){
    console.log("Name: " + name);
    console.log("Hobbies: " + Hobbies.join(", "));
   
}

displayInfo("Abhishek","Reading","Traveling","Coding");
displayInfo("John","Gaming","Cooking");
displayInfo(); // name will be "Guest" and Hobbies will be []