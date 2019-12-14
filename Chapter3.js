const Person = new Object()

console.log("Empty Object :",Person)

Person.name = "Javel"

console.log("Add name :",Person)


/**
 * [[put]] => assigning a new attribute
 * [[set]] => change attribute's value 
 * [[Enumerable]] => ability to iterate through the attributes
 */

console.log('age' in Person) //Check a properity
delete Person.name; //Deleting a properity

Person.age = 16

// Person.propertyIsEnumerable("name")

Object.defineProperty(Person, "name", {
    enumerable: false
    });


// Object.defineProperty(Person, "name", {
//     value: "Nicholas"
//     });



var person1 = {
    name: "Nicholas"
    };

var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log("Start from here",descriptor.enumerable);
console.log(descriptor.configurable);
console.log(descriptor.writable);
console.log(descriptor.value);

console.log(Object.isExtensible(person1));
Object.preventExtensions(person1);
console.log(Object.isExtensible(person1));

//is Extensible able to modify its properities
//seal object is nonExtensible Object
//freeze object is being unable to extend
