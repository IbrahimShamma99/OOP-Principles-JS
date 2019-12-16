// REVIEW  Object Patterns

/**
 * JavaScript has many patterns for creating
 * objects, and there’s usually more than one
 * way to accomplish the same thing.
 */

//SECTION Module Pattern

/*
 * NOTE Methods that access private data in 
 * this way are called privileged methods.
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
        name: "Nicholas", //Public
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
    }());
console.log(person.name)
console.log(person.getAge())
console.log(person.growOlder())

/**
 * NOTE The module pattern is great for 
 * defining individual objects that have 
 * private properties
 * but not custom types that also 
 * require their own private properties?
 */

// SECTION Private members for constructors

function Person(name) {

    var age = 25; //Private
    this.name = name; //Public
    this.getAge = function () {
        return age;
    };
    this.growOlder = function () {
        age++;
    };
}

const init = (name) => {
    const persons = new Person(name)
    console.log("persons age is ", persons.getAge())
    persons.growOlder()
    console.log("persons age now is ", persons.getAge())
    persons.age = 125 //Private
    console.log("Modified persons age is ", persons.getAge())
    console.log("persons name is ", persons.name)
    console.log("\n")
}


init("Moh")
init("james")

var Person = (function () {
    // everyone shares the same age
    // NOTE age var is outside the constructor 
    var age = 25;

    function InnerPerson(name) {
        this.name = name;
    }
    InnerPerson.prototype.getAge = function () {
        return age;
    };
    InnerPerson.prototype.growOlder = function () {
        age++;
    };
    return InnerPerson;
}());


const Hybridinit = (name) => {
    const persons = new Person(name)
    console.log("persons age is ", persons.getAge())
    persons.growOlder()
    console.log("persons age now is ", persons.getAge())
    persons.age = 125 //Private
    console.log("Modified persons age is ", persons.getAge())
    console.log("persons name is ", persons.name)
    console.log("\n")
}

Hybridinit("Moh")
Hybridinit("james")

//SECTION MIXINS

//You can tell what mixins are just by looking at this code
function mixin(receiver, supplier) {
    for (var property in supplier) {
        if (supplier.hasOwnProperty(property)) {
            receiver[property] = supplier[property]
        }
    }
    return receiver;
}
/**
 * NOTE Keep in mind that 
 * this is a shallow copy, so if 
 * a property contains an object, then
 * both the supplier and the receiver will 
 * be pointing to the same object.
 * This pattern is used frequently for adding 
 * new behaviors to JavaScript
 * objects that already exist on other objects.
 */

function EventTarget() {}

EventTarget.prototype = {
    constructor: EventTarget,
    addListener: function (type, listener) {
        // create an array if it doesn't exist
        if (!this.hasOwnProperty("_listeners")) {
            this._listeners = [];
        }
        if (typeof this._listeners[type] == "undefined") {
            this._listeners[type] = [];
        }
        this._listeners[type].push(listener);
    },
    fire: function (event) {
        if (!event.target) {
            event.target = this;
        }
        if (!event.type) { // falsy
            throw new Error("Event object missing 'type' property.");
        }
        if (this._listeners && this._listeners[event.type] instanceof Array) {
            var listeners = this._listeners[event.type];
            for (var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this, event);
            }
        }
    },
    removeListener: function (type, listener) {
        if (this._listeners && this._listeners[type] instanceof Array) {
            var listeners = this._listeners[type];
            for (var i = 0, len = listeners.length; i < len; i++) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    }
};


var target = new EventTarget();
target.addListener("message", function (event) {
    console.log("Message is " + event.data);
})
target.fire({
    type: "message",
    data: "Hello world!"
});


function Person(name) {
    this.name = name;
}

Person.prototype = Object.create(EventTarget.prototype); //pseudoclassical inheritance
Person.prototype.constructor = Person;
Person.prototype.sayName = function () {
    console.log(this.name);
    this.fire({
        type: "namesaid",
        name: name
    });
};
var person = new Person("Nicholas");
console.log(person instanceof Person);
// true
console.log(person instanceof EventTarget); // true


//ANCHOR  Mixins use 

function Person(name) {
    this.name = name;
}

mixin(Person.prototype, new EventTarget()); 
//NOTE Mix Person properties with EventTarget's ones
mixin(Person.prototype, {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
        this.fire({
            type: "namesaid",
            name: name
        });
    }
});
var person = new Person("Nicholas");
console.log(person instanceof Person); //ture
console.log(person instanceof EventTarget); // false