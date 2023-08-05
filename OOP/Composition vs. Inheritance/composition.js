// Example: Composing a Car using different components

class Engine {
    start() {
      console.log("Engine started");
    }
  }
  
  class Wheels {
    roll() {
      console.log("Wheels rolling");
    }
  }
  
  class Car {
    constructor() {
      this.engine = new Engine();
      this.wheels = new Wheels();
    }
  
    drive() {
      this.engine.start();
      this.wheels.roll();
      console.log("Car is moving");
    }
  }
  
  const myCar = new Car();
  myCar.drive();
  