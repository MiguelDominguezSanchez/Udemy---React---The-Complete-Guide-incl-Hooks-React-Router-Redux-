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

// const filter = (...args) => {
// 	return args.filter((el) => el === 1)
// }

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

// console.log(filter)

// it's our filter function here
// all I say is one, two, three

// console.log(filter(1, 2, 3))

// and actually we should only log one year
// as an array though

// Array[1]

// because we filter this array which is
// created with a rest operator
// with the three dots

// so thats is rest && spread against

// the usage of the three dots
// you will see mo re often in this course

// //// 8. Destructuring

// So we learnt about rest and spread,
// there is one generation feature I definitely
// want to cover
// called destructuring

// Easily extract array elements
// or object properties
// and store them in variables

// Destructuring allows you to easily
// extract array elements
// or object properties
// and store them in variables
// when you first hear about it
// it might sound
// the exact thing the spread operator does
// but actually  is a different thing
// spread takes out all elements
// all properties
// and distribute them in
// a new array || object || whatever you are using

// Destructuring allows you to pull out
// single elements or properties
// and store them in variables,
// for arrays,
// and objects.

// For arrays it looks like this:

// Array Destructuring:

// [a,b] = ['Hello', 'Max']
// console.log(a)//Hello
// console.log(b)// Max

// If we have an array with two elements
// 'Hello' && 'Max', then we can use this
// strange looking syntax on the left side
// of the equal sign
// which looks like that we are creating an array
// but we are not
// to assign the variables
// 'a' && 'b'
// to 'Hello' && 'Max' respectively.

// and for object destructuring

// Object Destructuring:

// {name} = {name:'Max', age:28}
// console.log(name)// Max
// console.log(age)//undefined

// is the same syntax with
// curly braces &&
// where in array destructuring
// the order defines
// which property we take,
// for object destructuring
// is the property name
// curly brace 'name' curly brace
// on the left side
// targets the name property of the object
// on the right side
// && pulls out the value
// which is why login age
// will yield undefined
// will not pulling this out of the object here
// so this is destructuring
// let's also have a look at this in practice.

// Back in jsbin,
// lets start with our numbers array again
// which have the number one, two, and three

// const numbers = [1,2,3]

// and now lets say
// we want to get the numbers one and two
// then we can use this
// array syntax on the left of the equal sign

// []

// and choose any variable names of our choice
// num1, and num2

// [num1, num2]

// and we assign this to equal to the numbers array

// [num1, num2] = numbers;

// if I now console.log(num1, num2)

// const numbers = [1, 2, 3]
// ;[num1, num2] = numbers
// console.log(num1, num2)

// and I run this
// you see one and two being logged

// 1 2

// because I am pulling these two out of the array
// I am not pulling 'three'
// if I want to get three by the way
// I simply add num three 'num3' here,

// const numbers = [1, 2, 3]
// ;[num1, num3] = numbers
// console.log(num1, num3)

// you don't have to rename it though,
// and you leave out the one space,

// const numbers = [1, 2, 3]
// ;[num1, , num3] = numbers
// console.log(num1, num3)

// with an empty space here in your
// declaration on the left side
// Now if you hit run you get one, and three

// 1 3

// That's array destructuring.

// Object Destructuring
// is also supported by our project
// in this course
// however is not supported by jsbin here
// So, I can show it you
// I show some text on the slide
// It is the syntax where
// you use the curly braces
// on the left and target a property
// with its property name

// {name} = {name:'Max', age:28}
// console.log(name) // Max
// console.log(age) // undefined

// in this course I wont use these
// destructuring syntax too often
// but I want you to be aware
// of the existence of them
// and there they are nice ways of
// conveniently pulling out
// certain elements from an array
// || properties from an object

// //// 9. Reference and Primitive Types Refresher

// Over the last lectures
// I introduced you to some of the most
// important next generation
// javascript features
// which we are going to see in this course
// our things definitely
// All we want to cover
// They are not next generation javascript
// but they are features you might
// have miss || forgotten,
// and they are super important
// to keep in mind

// The first features || concept of javascript
// I am talking about
// is the fact that you have
// reference and primitive types

// If I create a number like this

// const number = 1

// then this is a primitive type
// it means if I create a second number
// 'num2' and set it equal to number,

// const number = 1
// const num2 = number

// then it will actually create a real copy
// of the number
// so, num2 now of course
// now if I log this

// const number = 1
// const num2 = number
// console.log(num2)

// but it will have copy the value '1' into 'num2'

// Now numbers, strings, booleans,
// these are so called primitive types,
// whenever you reassign or restore
// a variable in  another variable,
// it will copy the value.

// Objects and arrays are
// reference types though

// let me show you what I mean
// I create my person object as a name here

// const person = {
// 	name: 'Max',
// }

// and now I create a second person,

// const person = {
// 	name: 'Max'
// }

// const secondPerson

// and assign person as a value here,

// const person = {
// 	name: 'Max',
// }

// const secondPerson = person

// if  I console.log(secondPerson)

// const person = {
// 	name: 'Max',
// }

// const secondPerson = person
// console.log(secondPerson)

// and I hit run
// it will print the second value
// as first person

// Object { name: "Max" }

// it will not actually copy the person,
// instead, person the object,
// is stored in memory, and then the constant person
// we store a pointer to that place in memory
// and then if assign person to secondPerson
// that pointer will  be copied

// We can see that this is the case
// if we change person dot name
// after having it copied

// const person = {
// 	name: 'Max',
// }

// const secondPerson = person

// person.name = 'Manu'

// console.log(secondPerson)

// with that you would expect to
// print 'Max' her still a person with name 'Max'
// because we copied person stored in secondPerson
// and there after change their name
// however if we clear and run
// you will see name 'Manu' here,

// Object { name: "Manu" }

// Even though I am printing the 'secondPerson'
// so for secondPerson the name also change
// the reason this is that
// it just copied the pointer
// and points to the exact same object
// in memory as person does
// so if we change name in person
// we also change it for secondPerson
// now that's important to keep in mind
// and it is the same for arrays,
// if you copy quotation marks array like this
// and you change an array element
// it will auto–change indeed the
// so called copied array
// this will become important in react,
// because it can lead to unexpected
// behaviors if you copy objects || arrays like this
// because you then manipulate one object
// in one place in the app
// and accidentally manipulate
// another usage of the same object
// in another place of the app.

// Therefore we will learn
// techniques to copy this
// in an immutable way
// which means copy that
// by really copying
// the object and not just the pointer
// for that we use this spread operator

// Now we can simply create a new
// person object here,

// const person = {
// 	name: 'Max',
// }

// const secondPerson = {}

// person.name = 'Manu'

// console.log(secondPerson)

// and spread the person properties

// const person = {
// 	name: 'Max',
// }

// const secondPerson = {
// 	...person,
// }

// person.name = 'Manu'

// console.log(secondPerson)

// This will pull out the properties,
// and the values of the properties from the object,
// and add them to this newly created object here,
// and we create a new one with the curly braces,
// now if I clear and run,
// we still print an object with name 'Max',

// Object { name: "Max" }

// even though we change the name to 'Manu' here,
// because now we really created a real copy,
// this is a technique that
// I will also come back later in this course,
// its just important to realize to keep in mind,
// that objects and arrays are reference types
// If you reassign them
// you are copying the pointer,
// not the value,
// therefore if you want to do this
// in a real copy way
// you will have to create a new object
// and just copy the properties
// and not the entire object,

// const secondPerson = {
// 	...person
// }

// thats something very important
// to keep in mind for this course.

// //// 10. Refreshing Array Functions

// In the last lecture we have a look
// at reference and primitive types
// something super important to keep in mind
// while working with javascript.In

// Another thing you are gonna see a lot
// in this course
// are array functions
// we have already saw a filter
// a couple of lectures ago
// sort, map, and so on.

// let me quickly show you what I mean:

// The good old numbers array,
// with one, two, and three.

// const numbers = [1,2,3]

// now lets say  that we want
// to turn this into an array
// where each number is doubled
// so we have the

// 'const doubleNumbArray'

// const numbers = [1,2,3]

// const doubleNumArray

// we can use an array function for this
// we can take the numbers array

// const doubleNumArray = numbers

// and call 'map'

// const numbers = [1, 2, 3]

// const doubleNumArray = numbers.map()

// map is a built in array method
// and there are many of this methods
// I will use quite a lot of that
// and they are not next generation javascript
// all this methods work in the same way though
// take a function as an input

// and this function which is an arrow function here
// but it can be a normal function

// const numbers = [1, 2, 3]

// const doubleNumArray = numbers.map(() => {})

// is then simply executed
// on each element in the array here
// so on each element in numbers array
// one, and, two, and three

// so therefore what we get in his arrow function
// is a number in the end

// const numbers = [1, 2, 3]

// const doubleNumArray = numbers.map((num) => {})

// but you can name this argument whatever you want
// here we can simply return something

// const numbers = [1, 2, 3]

// const doubleNunArray = numbers.map((num) => {
// 	return
// })

// and what you have to  do  in this internal function
// depends on which array function you are using
// check the docs in places
// like the mozilla developer network
// to learn more about the available array functions
// so  in the map function
// we have to return the new value
// we want to tun the old one into

// const numbers = [1, 2, 3]

// const doubleNumArray = numbers.map((num) => {
// 	return num * 2
// })

// so we could return num times two
// and since it is executed in every element here
// it will return two, four and six,
// and conveniently map all the returns
// a new array, so a real new array
// just stored in 'doubleNumArray'
// so now if I output numbers,
// thereafter doubleNumArray
// like this and now run

// const numbers = [1, 2, 3]

// const doubleNumArray = numbers.map((num) => {
// 	return num * 2
// })

// console.log(numbers)
// console.log(doubleNumArray)

// you see the old one is unchanged,
// and the new one holds double the values,

// Array(3)[(1, 2, 3)]
// Array(3)[(2, 4, 6)]

// and we will explain what this functions do
// when we use them in the course
// I just want bring them to your attention right now
// explain that we always have this function
// which gets executed on each element
// and that they are not next generation javascript
// but normal javascript actually
// be prepared to meet them
// I will explain what they do
// and when we see them
// and always feel free to dive into docs
// like the Mozilla Developer Network
// to learn more about them
