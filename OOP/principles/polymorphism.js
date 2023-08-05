// Polymorphism allows objects of different classes to be treated 
// as instances of a common superclass. 
// JavaScript achieves polymorphism through dynamic typing and duck typing, 
// where the behavior of an object is determined by its
// methods and properties rather than its class.
class Animal {
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Woof!");
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log("Meow!");
    }
  }
  
  function animalSound(animal) {
    animal.makeSound();
  }
  
  const dog = new Dog();
  const cat = new Cat();
  
  animalSound(dog); // Output: Woof!
  animalSound(cat); // Output: Meow!
  