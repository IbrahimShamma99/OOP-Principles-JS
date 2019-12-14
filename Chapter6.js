// REVIEW  Object Patterns

/**
 * JavaScript has many patterns for creating
 * objects, and there’s usually more than one
 * way to accomplish the same thing.
 */

//SECTION Module Pattern

/*NOTE Methods that access private data in 
this way are called privileged methods.
*/

//NOTE IIFE => Immdiately invoked function expression 
var yourObject = (function () {
    //ANCHOR 
    // private data variables
    return {
        // public methods and properties
    };
}());

var person = (function () {

    var age = 25; //Private
    return {
        name: "Nicholas",
        getAge: function () {
            return age;
        },
        growOlder: function () {
            return ++age;
        }
    };
}());
//NOTE This means the function is excuted and destroyed

console.log(person.name)
console.log(person.getAge())
console.log(person.growOlder())


//NOTE Revealing module
var person = (
    function () {
    var age = 25; //Private

    function getAge() {
        return age;
    }

    function growOlder() {
        ++age;
        return age
    }
    return {
        name: "Nicholas",
        getAge: getAge,
        growOlder: growOlder
    };
    u
}());
console.log(person.name)
console.log(person.getAge())
console.log(person.growOlder())



// SECTION Private members for constructors

