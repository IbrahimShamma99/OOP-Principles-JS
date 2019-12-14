var sayHi = new Function("console.log(\"Hi!\");");
sayHi();
// outputs "Hi!"
var sayHi2 = sayHi;
sayHi2();
// outputs "Hi!"

//sayHi1 + sayHi2 both pointing on the same Object

/*function parameters are actually stored 
as an array-like structure called arguments .
*/


function reflect(value,l , m) {
    return value;
    }
console.log(reflect("Hi!"));
console.log(reflect("Hi!", 25));
console.log(reflect.length); // outputs 3 due to length of argument

function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}

person = {
    name:"ibrahim"
}

sayNameForAll.call(person,"Hello") //Constructor Stealing 
/**
 * arg1 => Constructor
 * arg2 => parameter
 */
//NOTE JS treats parameters as an array 
var sayNameForAll1 = sayNameForAll.bind(person)
sayNameForAll1("HI")