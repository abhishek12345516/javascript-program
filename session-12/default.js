const greet = (name,greeting = "Hello") => console.log(`${greeting}, ${name}!`);

greet("Abhishek",'good morning');
greet("Bob", "Hi");