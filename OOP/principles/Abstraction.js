class Shape {
    // Abstract method to calculate area (to be overridden in subclasses)
    calculateArea() {
      throw new Error("Abstract method not implemented.");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    calculateArea() {
      return this.side * this.side;
    }
  }
  
  const circle = new Circle(5);
  const square = new Square(4);
  
  console.log(circle.calculateArea()); // Output: 78.53981633974483
  console.log(square.calculateArea()); // Output: 16
  