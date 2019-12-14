/**
    Constructors and Prototypes
 */
//A constructor is simply a function that is used with new to create an object.
function Person(name) {
    this.name = name;
    this.sayName = function() {
    console.log(this.name);
    };
}

/**Why using constructors ? 
 * objects created with the 
 * same constructor contain the same proper-ties and methods.
 */

 /**
  * The "this" object is
    automatically created by new when you call the 
    constructor, and it is an
    instance of the constructor’s type.
  */
const person1 = new Person 

// person1.name => name is assigned as property for person1 instance 
/**
 * person1 => instance 
 * Person => constructor
 * new => automatically creates an object with the same type
 */
console.log("is person1 an instance of person1:",person1 instanceof Person) //true 
console.log("same as before:",person1.constructor === Person); //Same as before 

const person2 = new Person("JAWS")
//You can also explicitly call return inside of a constructor.
person2.sayName()


function Person(name) {
    Object.defineProperty(this, "name", {
    get: function() {
    return name;
    },
    set: function(newName) {
    name = newName;
    },
    macgee: function(){
        name = "Macgee";
    },
    enumerable: true,
    configurable: true
    });
    this.sayName = function() {
    console.log(this.name);
    };
}

const person3 = new Person("Javel")

console.log(person3.name)
/*
When Person is called as a function without new , the value of this
inside of the constructor is equal to the global this object.
*/

// PROTOTYPING 

//Almost every function (with the exception of some built-in functions)
function hasPrototypeProperty(object, name) {
    return name in object && !object.hasOwnProperty(name);
}
//Prototypes are the recipe for the object

//You either have a Properity or a Prototype

/**
 * That prototype is shared
 * among all of the object instances
 */
var object = {};
var prototype = Object.getPrototypeOf(object);  
console.log("is obj prototupy:",Object.prototype.isPrototypeOf(object))
console.log("Results of getPrototypeOf obj:",prototype);

function Personal(name){
    this.name = name
}
/**
 * There is, however, a direct
 * link between the instance and 
 * the prototype and between the
 *  prototype and the constructor.
 */
Personal.prototype.sayName = function (){
    console.log(this.name);
}

Personal.prototype.favorite = []

var persons1 = new Personal("Nicholas");
var persons2 = new Personal("Greg");

persons1.favorite.push("Apple")
persons1.favorite.push("tea")
console.log("after instance 1 add a favorite",persons1.favorite);

persons2.favorite.push("Orange")
console.log("after instance 2 add a favorite",persons2.favorite);

persons1.sayName()

//Built in prototypes

Array.prototype.sum = function() {
    
    return this.reduce(function (previous, current) {
    
        return previous + current;
    });
};

var numbers = [ 1, 2, 3, 4, 5, 6 ];
var result = numbers.sum();
console.log(result);

