//creating object of rectangle
const rectangle = {
  length: 20,
  breadth: 30,
  area() {
    return this.length * this.breadth;
  },
  perimeter() {
    return 2 * (this.length + this.breadth);
  },
};
//creating object of circle
const circle = {
  radius: 4,
  area() {
    return this.radius * this.radius * Math.PI;
  },
  circumference() {
    return 2 * Math.PI * this.radius;
  },
};

//display dimensions of circle
console.log(
  `Length of circle : ${rectangle.length} Breadth of circle : ${rectangle.breadth}`
);

//display area and perimeter of rectangle
console.log(
  `Area of rectangle : ${rectangle.area()}, perimeter of rectangle: ${rectangle.perimeter()}`
);
//display dimensions of circle
console.log(`Radius of circle : ${circle.radius}`);
//dispay area and circumference of circle
console.log(
  `Area of circle : ${circle.area()}, Circumference of circle : ${circle.circumference()}`
);
