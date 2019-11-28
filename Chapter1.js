//the two types

//1-primitive => Stored as simple data {boolean , number , string , null , undefined}
console.log(typeof "Javel macgee")

console.log(typeof null); //object 
/*
You could reason that null is an empty object pointer, 
making "object" a logical return value, but that’s still confusing.
*/

//2-reference => Stored as object

//JS makes primitive looks like reference types

/**
It sometimes helps to think of JavaScript
objects as nothing more than hash tables
 */

/*
While other programming languages distinguish between primitive
and reference types by storing primitives on the stack and references in the heap
*/

/*
In JS primitive stored in a variable while 
Reference are placed as a pointer in varible object
*/

/*
 When you assign an object to a variable, 
 you’re actually assigning a pointer.
 */

var object1 = new Object(); //reference
object1 = null;// dereference

var array = []
array.push(12345);
var method = "push"
array[method](12345);
console.log(array)
