// var myName = 'Max';
// console.log(myName)

// myName  = 'Manu';
// console.log(myName)

// const myName = 'Max'
// console.log(myName)

// myName = 'Manu'
// console.log(myName)

// Max custom.js:8:9
// Uncaught TypeError: invalid assignment to const 'myName'

// //// 3. Arrow Functions

// function printMyName(name) {
// 	console.log(name)
// }

// printMyName('Max')

// const printMyName = (name) => {
// 	console.log(name)
// }

// printMyName('Max')

// // Omitting parenthesis one argument

// const printMyName = (name) => {
// 	console.log(name)
// }

// printMyName('Max')

// const printMyName = () => {
// 	console.log('Max')
// }

// printMyName('Max')

// const printMyName = (name, age) => {
// 	console.log(name, age)
// }

// printMyName('Max', 28)

// const multiply = (number) => {
// 	return number * 2
// }

// console.log(multiply(2))

// const multiply = (number) => number * 2;

// console.log(multiply(2))

// //// 4. Exports and Imports

// //// 5. Understanding Classes

{
	/*
  
  
  We have learnt about imports and exports.
  And another core feature of next generation javascript are classes, if you are coming from another programming language, you might already know classes. Classes are essentially blueprints or objects; in our case for javascript objects
  
  class Person {
    name = 'Max'
    call = () => {...}
  }

  A class is created with a class keyword, and a class can have both:
  properties: name = 'Max'
  &
  methods: call = () => {...}
  methods are simply functions attached to classes,
  were,
  properties are variables attached to classes,
  you can say,
  we use both in this course,
  and it will obviously always explain what we arre doing here, when we add such a property or method.

  A class is instantiated like this, with the 'new' keyword. 

  const myPerson = new Person();
  myPerson.call()
  console.log(myPerson.name)
  
  And this might of course be familiar to you, if you typed with javascript.
  You might  notice from constructor functions, and indeed classes are kind of a more convenient way of creating constructor function, so you cerate javascript objects with classes as blueprints, that's the idea. 

  Inheritance

  class Person extends Master
  
  And classes all support inheritance. Which means we have another class which we inherit from, taking all its properties and methods, and potentially adding new properties and methods. That ultimate look familiar to you, you might notice it from prototypes.

  lets have a look at prototypes in action then ...

  /.../

  */
}

{
	/*
  
  class Person {
    constructor() {
      this.name = 'Max'
    }
  
    printMyName() {
      console.log(this.name)
    }
  }
  
  const person = new Person()
  person.printMyName()
  
*/
}

{
	/*

class Person {
	//class named person
	// then you have curly braces to mark the class body,  and there we can start using properties
	constructor() {
		//  in its simple form a property is added by adding a constructor.
		// that is a default function method, that you ca add to any class, which will be executed whenever you instantiate a class.
		//  and a method is  created just with  the name of the method, parenthesis, then curly braces.
		// and in there we can now set properties, with the 'this' keyword, and we can write
		this.name = 'Max'
	}
	// we can also add a method
	printMyName() {
		// and there we can simply output
		console.log(this.name) // referring to the name property we created
	}
}
// now we can use this class to store an instance in a constant, with new Person
const person = new Person()
// and then we can execute
person.printMyName()
// if we run the code, we se 'Max'

// This is how easy you can use a class

*/
}

{
	/*
  
  Now I say a class also can inherit
  What we can do is, ...
  */
}

{
	/*

class Human {
	constructor() {
		this.gender = 'male'
	}

	printGender() {
		console.log(this.gender)
	}
}

// and now if Person 'extends' and that's a keyword again.

class Person extends Human {
	// extends Human
	// now we inherit this property:
	// 		this.gender = 'male'
	// and this method:
	//      printGender() {
	//	    console.log(this.gender)
	//      }

	constructor() {
		this.name = 'Max'
	}

	printMyName() {
		console.log(this.name)
	}
}

const person = new Person()
person.printMyName()

// and we can use both in the Person as well
// so we can also call:
person.printGender()

// however before we run it successfully, actually lets try, we get an error, the we must call the super constructor in the derived class.

// Uncaught ReferenceError: must call super constructor before using 'this' in derived class constructor

// That's important
// if you are extending another class, and you are implementing the constructor, but you don't have to, but you are, you have to add super, this special super method in the constructor.
// it's a keyword and it simply,  and it simply executes the  pairing constructor tool which  of course have to initialize th parent class, now if  you clear and run, you see 'Max' and 'male'

*/
}

//

{
	/*



class Human {
	constructor() {
		this.gender = 'male'
	}

	printGender() {
		// *1
		console.log(this.gender)
	}
}

class Person extends Human {
	constructor() {
		super() // if you are extending another class, and you are implementing the constructor, but you don't have to, but you are, you have to add super, this special super method in the constructor.
		this.name = 'Max'
		// and obviously you can now go into  your person class, and set gender there 'female', which is not 100% correct, here, but just to showcase that this works, you see we print female
		this.gender = 'female'
		// even though we still calling print.gender here *1, but is extended by Person
	}

	printMyName() {
		console.log(this.name)
	}
}

const person = new Person()
person.printMyName()
person.printGender()

// so this ar classes, and classes are usd by react to create its components, at least this is one of two ways of creating components.
// This is how you will see me using it in this course
// And is important to understand that classes ar just blueprints for javascript objects, and are very comparable to constructor functions, where inheritance is comparable to prototypes.

*/
}

// //// 7. The Spread & Rest Operator

{
	/*
	We have learnt a lot about classes, 
	and arrow functions.

	Let's now tun our heads to new operators,
	using the feature of javascript,
	and we can already use,
	the spread and the rest operator.

	Actually is only one operator, three dots,
	yes it may look strange,
	but the operator is just three dots,
	now if we call the spread || rest,
	it depends on where we use it.

	The spread operator:

	'Used to split up array elements OR object properties'
	we spread up an array || object.
	For example if we have:

	const newArray = [...oldArray, 1, 2]

	An old array, 
	and we want to add all the elements,
	from  the old array to a new array,
	and additionally to add one || two elements.
	This fist syntax should b what we use
	Three dots in front of 'oldArray'.

	'...oldArray'

	Will simply pull out the elements,
	and add them to the new array,
	which we create with the square brackets.
	And all of course stand 
	we can add mor elements to it,
	since we just use the normal syntax,
	with square brackets, to  create an array.

	The same for th object:

	const newObject = {...oldObject, newProps:5}

	We create a new object with curly braces,
	'newProp',
	but we also have '...oldObject'
	to pull out all the properties
	of their values,
	and add them as key value pairs
	to the new object.
	As a side note,
	if the 'oldObject' also have
	a new property,
	it will be overwritten
	by 'newProp:5' here,
	so our new property takes presidency,
	this is the 'Spread Operator'.

	Now the 'Rest Operator',
	is the same operator 
	but used differently.

	Here is:

	'Used to merge a list of function arguments into an array.'

	And this shows us where we use it,
	we use it in a function argument list,
	here is an example:

	function sortArgs(...args) {
		return args.sort()
	}

	'sortArgs' recibes an unlimited 
	amount of arguments,
	so one argument, two, three or whatever,
	with '...', we write one argument '...args',
	but we actually recibe more than one,
	and they all be merged together into an array,
	so then we can apply array methods
	to our arguments list,
	or do whatever we want to do,
	with conveniently store arguments.

	lets have a look to both usages in jsbin then:

	*/
}

{
	/*
	Lets start with the Spread Operator:
	
*/
}

// We create an  Array of  numbers,
// one, two, three, ...
// add as many as you want

// const numbers = [1, 2, 3]

// now I want you to create a new array
// 'newNumbers'

// const newNumbers = []

// and as you saw spread
// is simply used by adding thr dots

// const newNumbers = [...]

// then the old array numbers

// const newNumbers = [...numbers]

// and then potentially,
// you don't have to do that,
// new numbers,
// like '4'

// const newNumbers = [...numbers, 4]

// with that by 'console.log(newNumbers)' here

// console.log(newNumbers)

// and I hit run
// we get:

// const numbers = [1, 2, 3]
// const newNumbers = [...numbers, 4]

// console.log(newNumbers)

// Array(4)[(1, 2, 3, 4)]

// the old array with all its elements
// and the new element,
// and actually we don't add the new element,
// if we were to do that without the dots,

// const numbers = [1, 2, 3]
// const newNumbers = [numbers, 4]

// console.log(newNumbers)

// it will be included as,
// one element inside the new element

// Array [ (3) […], 4 ]

// it really pull out the old elements

// const numbers = [1, 2, 3]
// const newNumbers = [...numbers, 4]

// console.log(newNumbers)

//  as you can clearly see

// Array(4)[(1, 2, 3, 4)]

// That's the spread operator
// and you wont see me use
// this throughout this course
// a couple of times
// on both arrays and objects
// to for example copy arrays
// or add properties to an object
// while safely copy the old object.

// Again, I will obviously,
// always mention why I am using
// the spread operator when I do
// throughout the course
// just be aware that it exist

// Let's now see the same for objects

// I create a person object here
// where I have a name,
// let's say 'Max',

// const person = {
// 	name: 'Max',
// }

// and now I will have a new person object
// which is a javascript object
// a new one

// const newPerson = {}

// where first of all
// use the spread operator on person

// const newPerson = {
// 	...person,
// }

// to copy all the property values pairs
// of the old object

// and potentially and that's all optional
// add a new property

// const person = {
// 	name: 'Max',
// }

// const newPerson = {
// 	...person,
// 	age: 28,
// }

// and now if I console.log(newPerson)

// console.log(newPerson)

// You see:

// Object { name: "Max", age: 28 }

// so its taking the old person
// distributing into the old person
// that the  spread operator

// Now the rest operator
// which is used less though
// is used in a function
// and you can of course us the
// ES6 javascript arrow function

// so there we can have a filter function
// or whatever you want to name it

// const filter = ()

// and we get a couple of args,
// and you don't have to use args
// we can also name it whatever you want
// but you have to use the three dots in front of it

// const filter = (...args)

// so then there we can simply return,
// and we could use the inline syntax in here,
// to write it all in one line
// without the return keyboard
// we can return args

// const filter = (...args) => {
// 	return args.filter()
// }

// and then lets say
// we call the dot & filter method
// which is available on arrays

// const filter = (...args) => {
// 	// *1
// 	return args.filter()
// }

// and keep in mind the dots in here *1
// are used as a rest operator and
// that merges the arguments into an array
// so you can use array methods like filter,
// filter will execute a function
// on every element in the passed in array
// so here we would get our element

// const filter = (...args) => {
// 	return args.filter(el)
// }

// and then
// we can use an inline arrow function to simply say
// return true || false
// which filter expects
// if the element is equal to one

const filter = (...args) => {
	return args.filter((el) => el === 1)
}

// now that might be a lot of syntax
// that you don't build
// three equal sings ===
// for type and value equality
// so the 'el' also has to be a number
// and this is just an arrow function

// (el) => el === 1

// we passed to the built in filter method
// so this has nothing to do with rest || spread
// with that we could call filter
// and let's console.log it to see something
// console.log(filter)

console.log(filter)

// it's our filter function here
// all I say is one, two, three

console.log(filter(1, 2, 3))

// and actually we should only log one year
// as an array though

// Array[1]

// because we filter this array which is
// created with a rest operator
// with the three dots

// so thats is rest && spread against

// the usage of the three dots
// you will see mo re often in this course
