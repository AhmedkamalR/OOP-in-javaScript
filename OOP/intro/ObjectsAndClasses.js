// Objects and Classes
// In JavaScript, objects are instances of classes. 
// Classes serve as blueprints for creating objects with shared properties and methods. 
// ES6 introduced the class keyword for creating classes, 
// making it easier to implement OOP in JavaScript.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("ahmedkamal", 27);
  person1.greet(); // Output: Hello, my name is ahmedkamal and I am 27 years old.
  