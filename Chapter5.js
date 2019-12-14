//Inheritance

/**
 * This is the prototype chain: An object inherits from 
 * its prototype, while that prototype in turn inherits 
 * from its prototype, and so on.
 */

var book = {
    title: "The Principles of Object-Oriented JavaScript"
};

var prototype = Object.getPrototypeOf(book);
console.log("Variable prototype ", prototype)
console.log("Variable prototype is it a prototype?", prototype === Object.prototype);

//inheritance is called prototype chaining

var book = {
    title: "The Principles of Object-Oriented JavaScript",
    toString: function () {
        return "[Book " + this.title + "]"
    }
};
var message = "Book = " + book;
// "Book = [Book The Principles of Object-Oriented JavaScript]"

console.log("message=", message)

//Modifying on built in prototypes is dangerous
Object.prototype.add = function (value) {
    return this + value
}
console.log(book.add(" ").add(5));
console.log("title".add(" end")); // "[object Object]5"

/**
 * All you have to do is
 * specify what object should 
 * be the new object’
 */


var book1 = {
    title: "The Principles of Object-Oriented JavaScript"
};
// is the same as
var book2 = Object.create(Object.prototype, {
    title: {
        configurable: true,
        enumerable: true,
        value: "The Principles of Object-Oriented JavaScript",
        writable: true
    }
});


console.log(book1)


var nakedObject = Object.create(Object.prototype);
console.log("toString" in nakedObject);//is being inherited from Object.prototype
console.log("valueOf" in nakedObject);

function YourConstructor() {
    // initialization
}

YourConstructor.prototype = Object.create(Object.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: YourConstructor,
        writable: true
    }
});

//Constructor
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}
//Prototype 1
Rectangle.prototype.getArea = function () {
    return this.length * this.width;
};
//Prototype 1
Rectangle.prototype.toString = function () {
    return "[Rectangle " + this.length + "x" + this.width + "]";
};

// inherits from Rectangle
function Square(size) {
    this.length = size;
    this.width = size;
}
Square.prototype = new Rectangle(); // NOTE : Rectange is being inherited
Square.prototype.constructor = Square;
Square.prototype.toString = function () {
    return "[Square " + this.length + "x" + this.width + "]";
};
console.log("you can find below what matters")
var rect = new Rectangle(5, 10);
var square = new Square(6);
console.log(rect.getArea());   // 50
console.log(square.getArea()); // 36

console.log(rect.toString());   // "[Rectangle 5x10]"
console.log(square.toString()); // "[Square 6x6]"

console.log(rect instanceof Rectangle); //true
console.log(rect instanceof Object); // true

console.log(square instanceof Square); //true
console.log(square instanceof Rectangle);//true
console.log(square instanceof Object);

/**
 * Let's describe what we have seen from the code above
 * we created Rectange constructor which inherits built in prototypes
 * we also created Rectange special prototypes (Tostring being overwritten & getArea)
 * then we created Square Constructor that inherits from Rectangle Prototype 
 * NOTE : Rectangle Prototype inherits built in protypes in JS
 */

/**
 * Always make sure that you overwrite 
 * the prototype before
 * adding properties to it,
 * or you will lose the added methods 
 * when the overwrite happens.
 */


// NOTE JavaScript supports inheritance through prototype chaining.