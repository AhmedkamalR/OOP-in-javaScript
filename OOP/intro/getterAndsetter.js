class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
  
    get width() {
      return this._width;
    }
  
    set width(value) {
      if (value > 0) {
        this._width = value;
      } else {
        console.error("Width must be a positive number.");
      }
    }
  
    get height() {
      return this._height;
    }
  
    set height(value) {
      if (value > 0) {
        this._height = value;
      } else {
        console.error("Height must be a positive number.");
      }
    }
  
    get area() {
      return this._width * this._height;
    }
  }
  
  const rectangle = new Rectangle(5, 10);
  console.log(rectangle.area); // Output: 50
  rectangle.width = 8;
  console.log(rectangle.area); // Output: 80

//   Getters and setters are special methods used to define 
//   the behavior of accessing (getting) and modifying (setting) the properties of an object.
//   They allow you to control how properties are accessed 
//   and set values with additional logic if needed  