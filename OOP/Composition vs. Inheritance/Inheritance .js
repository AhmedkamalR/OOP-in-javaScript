// Example: Inheriting properties and methods using classes

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks`);
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log(`${this.name} meows`);
    }
  }
  
  const dog = new Dog("Buddy");
  const cat = new Cat("Whiskers");
  
  dog.speak(); // Output: Buddy barks
  cat.speak(); // Output: Whiskers meows
  