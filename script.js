var choice = prompt("Welcome to Area Calculator. \nPlease enter your choice. \n 1. Area of Circle \n 2. Area of Rectangle \n 3. Area of Triangle");

if (choice == 1) {
    // Area of Circle
    var radius = prompt("Enter the radius");
    var result = Math.PI * Number(radius) * Number(radius);
    alert("The area of the circle is " + result);
} else if (choice == 2) {
    // Area of Rectangle
    var length = prompt("Enter the length");
    var breadth = prompt("Enter the breadth");
    var result = Number(length) * Number(breadth);
    alert("The area of the rectangle is " + result);
} else if (choice == 3) {
    // Area of Triangle
    var base = prompt("Enter the base");
    var height = prompt("Enter the height");
    var result = 0.5 * Number(base) * Number(height);
    alert("The area of the triangle is " + result);
} else {
    alert("Invalid choice. Please refresh and select a valid option (1, 2, or 3).");
}