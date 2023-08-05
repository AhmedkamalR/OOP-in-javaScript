// Inheritance allows one class (subclass or derived class) 
// to inherit properties and methods from another class (superclass or base class). 
// JavaScript supports prototype-based inheritance, 
// where objects inherit from other objects.

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    makeSound() {
      console.log("Woof!");
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    makeSound() {
      console.log("Meow!");
    }
  }
  
  const dog = new Dog("Buddy");
  const cat = new Cat("Whiskers");
  
  dog.makeSound(); // Output: Woof!
  cat.makeSound(); // Output: Meow!
  