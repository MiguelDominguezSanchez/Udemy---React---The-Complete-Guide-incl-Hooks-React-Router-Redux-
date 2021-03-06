// var myName = 'Max';
// console.log(myName)

const { version } = require('react')

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

// Array [ (3) [???], 4 ]

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
// it will auto???change indeed the
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

// //// //// 3. Understanding the Base Features & Syntax

// //// 2. The Build Workflow

// So we wanna set up a local react project
// with local I mean we don't use code pen
// but instead we will have a project on our machine
// where we can work in with our own IDE || Editor
// this of course is the way we wanna work with react
// we wanna to have it on our machine to have more features available there, it is a more convenient than using,
// than using some web editor
// and code pen which we use before
// or jsbin which we use in the optional section
// are really more playgrounds than work environments for real
// projects
// We will set up a local project
// and react is actually more than just
// importing the tool files we imported in code pen
// we need a more elaborated workflow for build projects
// and this is recommendable fo both
// single page and multi page applications
// The question of course is why do we need a more
// complex workflow and how then achieve it?

// WHY?

// Let me start with the why
// We when building a real app
// We want to actually optimize our code
// We didn't care about this in the demo
// project in the first course module in Codepen
// but for a big react application
// we wanna ship code that is as small as possible
// and as optimized as possible
// obviously that increases the performance of our app
// additionally, and that is super important
// we wanna use these 'Next Generation Javascript Features'
// I talked you about in the last optional module.
// Now we wanna use that because
// it makes our life as a developer much easier.
// And its default or entandar for react apps to use all these 'Next Generation Javascript Features'
// Because the code is leaner, easier to read, faster, less error prompt, and many other reasons.
// You should really use these Features. it is not just something nice optional,
// I strongly recommend
// using these features,
// because it is considered the best practices
// and it is what I teach you in this course,
// because  obviously I want to teach you the best practices
// So we wanna use the 'Next Generation Javascript Features'
// to have nicer time to write less error prompt code,
// And with all of that we need a workflow that support these features. Even on Codepen, we implicitly did this,
// remember the pre???processor we drop down,
// when we switch to Babel,
// that behind the scenes,
// unlock a couple of build tools
// that would parse our code
// and support jsx
// this html and javascript syntax
// for example
// So we wanna use these
// 'Next Generation Javascript Features'
// essentially we wanna be able to write ES6
// || above and still ship code in the end
// that runs on as many browsers as possible,
// and not that many browsers support these 'Next Gen Features'
// that is what we need a build workflow
// that actually compile these features.
// Finally at the end we wanna be more productive
// this includes 'Next Generation Javascript Features'
// which often allows us to write more condensed code
// but it also includes things like ES6 auto prefixing
// you may know that CSS prefixing is a thing to achieve the broadest possible browser support, for css features.
// Now manually adding these prefixes is quite annoying,
// so automatically adding it is nice.
// or considering Linkedin a tool which actually warms you if you are writing suboptimal code.
// That would be nice to have too,
// not strictly required but a nice feature.
// all these things should be part of a build workflow, if now to implemented there a copule of tools.
// that actually let them run over our code,
// to even warn us in the case likedin,
// or to compile the code, that runs on as many browsers as possible, while we as developers are writing
// very modern code that would on its own
// not run on that many browsers.
// So thats the WHY.

// A copule of reasons of Why
// writing this kind of code is desirable
// and why we need a more complex build workflow
// that actually allows us to write this code
// that actually optimized the code for us.
// And for that the how of course is relevant.

// HOW?

// How doo we achieve such a workflow
// we first of all need a Dependency Management Tool
// Dependencies are simply third party libraries,
// third party Javascript packages,
// react for example is a dependency,
// react-dom is a dependency,
// and also all the build tools
// We will need at the end are dependencies
// so the compiler for Next Gen Javascript,
// to Current Gen Javascript,
// thats a dependency.
// And we will use NPM here,
// YARN could be another tool that we can use here,
// butt we will use NPM,
// Nodes Package Manager,
// a tool which just allows to manage packages,
// and we just the default standard for managing
// dependencies also on front end projects
// Besides the Dependency Management Tool,
// we need a Blunder,
// because we wanna write modular code,
// and split it up over multiple files,
// so that each file has a clear task
// a clear focus
// and therefore is easier for us
// to maintain and manage,
// but then we want to make sure
// that all this code gets Bundled
// into a couple of files at the end
// when we ship it
// because browser stone
// even support split up files
// older browsers this don't do
// and it might also
// even it they did support it
// not be that optimal
// to make thousands of requests
// all these tiny focus files
// so we want to have that Bundler
// and we will use Webpack,
// which is the default standard
// for bundling these days,
// The cool thing about Webpack
// it does not just Bundle files.
// It also allow us apply
// a couple of other build steps
// before it dos this bundling,
// for example the Mention Compilation
// of 'Next Gen Javascript'
// that requires another tool Babel.
// We ned a compiler that does this
// Javascript Compilation,
// which means translation,
// from modern features,
// to work around
// that also work on older browsers
// And we will use Babel plus presets
// which can be hook into
// the webpack configuration
// so that they are part of
// this bundling and optimization process
// and finally at the end
// we wanna use a Development server
// to test our app locally in our machine
// Development server is a webserver
// but one running in our machine
// we could open an html file
// by double???clicking on it
// but this will us a file protocol
// and would not correctly emulates
// the app running as it runs in a web server
// so we need a web server
// and we can oof course run on our local machine
// the server is only accesible by us
// but thats all we need as a developer
// and there can read the cdn up run
// as it will run at the end in a real server

// We need all this things
// and it sound as a super complex to set up
// the good thing that it is not

// I will present you a tool
// that will create a project supporting
// all this things out of the box
// with zero configuration
// in the next lectures

// We will install this tool together
// and it is a tool created by the react
// team & community
// and the officially recommended
// way of creating new react apps

// Because thats the general thing of this course
// I teach you things in
// the best practices and recommended way
// so all of the set up
// is quite easy

// And as a side note
// if you still want to dive into
// how this works behind the scenes
// you want to set up this from scratch
// I also have a module for that
// towards the end of the course
// where we will build a react app
// a react project
// from scratch

// Now with that you
// know what we need and how

// Now lets dive into Dev Tool
// I mentioned
// and lets learn how we actually get started
// with a new react project supporting all these features

// //// 3 ??? 3. Using Create React App

// In the las t section
// I highlighted why set up a project
// with some additional features
// which  makes  our live as a developer easier
// now as I also mention,
// there is a tool that get such a project for us
// called create-react-app, you can simply google for it,
// to find a link to its official repository,
// as I sayed is maintained
// by basically facebook
// || a community around facebook
// so is the official recommended tool
// for certain react projects
// On their github pages, you will find installation instructions and a detailed explanation about what it does and how it works,
// feel free to read through it, and of course you are also going to learn all about that through this course
// lets start with the installation,
// we installed globally 'npm'
// and 'npm' is simply Nodes Packages Manager,
// A tool you automatically get when installing Node.js
// which makes easy to manage third party packages,
// our javascript packages at the end.
// And create-react-app is such a package.
// To use 'npm' you need to install Node.js,
// which can be download from Nodejs.org.
// Now there you should pick the latest version
// 8.5 in my case here, but if you are
// facing any issues with that, try out the 6.11 || what ever the long term support version is in your case when you are viewing this page.
// Now no worries, we are not going to write any Node.js code
// here, you dont need to know Node.js,
// we only need it to use its package manager,
// and also for this development server,
// which will be  span up for us automatically.So simply  clicks these buttons, download Node.js.
// And will spin up the installer from which you can walk.

// Once you finish the installation,
// you should be able to run the 'npm'
// command here on your machine.A
// So lets do this together in the next step.

// Now to use the create-react-app tool, you need you simply open up a terminal, command prompt on your machine,
// and then there run 'npm install', and thats what you need Node.js for, it gives you  the 'npm tool',
// npm instal create dash react dash app,
// 'npm install creat-react-app'
// and that important add dash g '-g' after,
// is to install it globally on your machine,
// so that you can this command,
// from anywhere on your machine.

// 'npm install create-react-app -g'

// now on windows you can simply hit enter,
// on mac and linux, you might need to add,
// 'sudo' in front of this,
// if you hit enter and have a permission error,
// to get the right Permissions,
// enow after you did hit enter, and of you are probably prompted to enter your password,
// after all 'create-react-app' should be install,
// now you can use that command to create a new project,
// and you do so by running,
// 'create-react-app', and then the name of your project,
// and of the folder in which it will be installed.
// Important before you run this command,
// navigate into the path of your system
// where you wanna create the default,
// so here you are on the desktop
// but with 'cd', of course you navigate to a different path,
// then write 'create-react-app',
// and then the name of your project,
// which could be my-app ||
// 'react-complete-guide' for example because that is
// what this course is about,
// and one important note,
// to get the exact same folder structure as I have it,
// since this changes overtime a bit,
// and that you follow along perfectly,
// to add something to this command,
// so dont hit enter yet, instead add a white space,
// and then add dash dash script dash version '--scripts-version',
// so this is all in one in  the same command,
// even though I split here into two lines,
// on my machine, but  its in one command,
// so dash dash scripts dash version,
// and then a white space then 1 dot 1 dot 5,
// Now this does not impact the version of react version,
// you are using, you are using the latest version of react,
// no worries, this simply  impacts the structure of the project,
// we will change the structure through the course,
// anyways, but to start at the same level,
// to start use this command, you simply hit enter thereafter,
// and the new project will be created for you,
// so  this will now create a new folder,
// and set everything up for you there,
// you can ignore all the warnings,
// you might getting here,
// everything will be fine no worries,
// so lets wait for this command to finish now,
// and once it is finished,
// you see a bunch of commands here,
// you can run
// you see yarn start,
// yarn build,
// because I have installed yarn,
// which is an alternative to 'npm' in my machine too,
// you will also run this commands,
// 'npm start', 'npm run build' and so on,
// First of all you have to navigate,
// into the new created folder
// so 'cd react-complete-guide',
// you named the project,
// like I did here,
// and in there you can run,
// 'npm start' to start your project,
// and what this means is, it start a developer server,
// it opens a new tab in our browser,
// or at least it should open that tab,
// in case it doesn't you  can manually open that tab,
// and visit local host colon three???thousand there.

// And this is a first project first demo,
// that well is created for you,
// which we can now edit,
// this process here the 'npm start' process,
// should be kept on running,
// dont quit it,
// you can always quit it by hitting control and 'c'
// but if you quit it,
// it will stop watching your files,
// and as long as it keep running on the end,
// it keeps watching your files,
// and what this means is,
// it means that whenever you change something in code,
// this page will automatically reload
// and reflect the latest changes
// which is awesome.
// So as soon as you are done developing
// you can quit this,
// as long as your developing keep this process running,
// Now with that process running again, you
// and the application running
// in localhost 3000,
// lets have a look at the folder that was cerated
// and all the files we find in there
// in the next lecture.

// //// 3 ??? 4. Understanding the Folder Structure

// In the last lecture we created our project with 'create-react-app',
// and as I mention make sure that 'npm start'
// this process is running whenever you are working
// I now open the folder which was created with
// 'Microsoft Visual Studio Code'
// this is the IDE I am going to use through the course
// but you can use any IDE || editor you want to use,
// For example Webstrom would be an alternative,
// || Sublime || Atom,
// || any other editor that you like
// Now Here I installed a theme and some extension,
// and you can find the exact configuration I am using
// here described in the PDF document attached in the video,
// just in case you want to use the same,
// but feel free to use your favorite setup,
// whatever the theme and setup you use,
// you will have the same amount of files and folders,
// in your project.
// so lets now walk through all the files and folders in here,
// On the root level we have a couple of configuration files
// this lock files 'packages-lock.json' here can basically be ignored,
// they are login in the version of dependencies,
// the general dependencies of the project attached,
// are finally in the package dot json 'package.json'
// There you can see that we have three dependencies in this project
// and these were all created by 'create-react-app'
// as you can see we obviously import react
// here I am using released version of 16 at the point of time, you are viewing this,
// this should be released,
// 'react-dom' is the same,
// and react scripts as I mention
// is a package offering all of this
// build workflow, this development server,
// the 'Next Generation Javascript Features' support,
// and all this thing, were using this project.
// In the 'package.json' file,
// there also a couple of scripts to find,
// you can run the scripts with 'npm run' and the script name,
// the exception is start, which can also run it with 'npm start'
// the command to execute it.
// And as you can see it uses this react script package, to then also execute some start command there,
// thats simply a command, this the package makes available.And this command happens to start this development server,
// watch all our code, compile our code, optimized code too,
// and all these things,
// once you are ready for deploying your app
// you will run npm run build,
// to optimized even more,
// not launch a developer server,
// but instead get your optimized code store in a folder,
// because right now you wont see
// you compiled code anywhere here,
// everything happens in memory,
//  but I come back to deploying
//  the application later on the course.

//  Lets close this 'package.json' file for now,
//  The Node Modules folder holds all the dependencies
// and dependencies of our project
// that is what we have that many
// We only have 'react', 'react-dom', and 'react scripts',
// but react scripts have a lot of other dependencies, all this little build tools which compile code and so on,
// you shouldn't??t added anything in the Node Modules folder,
// it is generated automatically if you run 'npm install'
// in your project folder, and its just automatically done by
// create-react script.
// The public folder is more interesting
// it is basically the root folder
// which gets served by the web at the end,
// though in here it only holds the files we can add them
// the script files are added in the source folder,
// here we have one important file 'index.html'

// This is a normal html file
// and it is the single page we have here,
// we will never add more html pages in this project,
// if you are creating a multi???page project, you will create multiple sub???projects with create-react-app.
// you wont add more html files here.
// or you need your own workflow, if you wanna do that.
// So thats the single page, where in the end our script files
// will get injected by that build workflow.
// Which is why you wont see script import here,
// and you can add to this file, but we will write
// any html code here.
// I want too highlight this, the div with the id of root,
// this will become important,
// because this will be where we actually build our react application later, and we will of course work on react,
// but if you need to add any imports, lets say any libraries,
// css libraries, or want to add some meta data,
// you can do that here, in the html file.
// You can also add more html here, but again
// you wanna probably wanna do that in react.

// the 'manifest.json' file is there because
// 'create-react-app' gives us a progressive web app
// out of the box, a very basic one at least,
// and give us this 'manifest.json' file where
// we can define some meta data about our application
// interesting for us is this source folder, we have a couple of files there, and these are actually the files,
// we will work with, this is actually our react application
// The most important for us by now,
// the 'index.js' file, get access this root element in our dom,
// our html file, so the element with the id of root,
// which of course is this div we saw in the 'index.html' file.
// this one
// and there as you can see
// it renders our react application with the render method
// Now here in the reference,
// there is some App object || element,
// which we import from our app file the extension.js
// is left out, because is automatically added auto???workflow,
// And if we have a look at this 'app.js' file
// therefore, this is where we see our first and only
// react component we have in this starting project right now
// Here we see some 'jsx'
// ANd we will dive deeply into what we see exactly in the next  lectures.
// For now lets remove all the content in this wrapping div,
// and we simply add an h1 tag here whereas I say Hi, I'm a React App, with the closing of course also. And then lets save it, that's always important. Dont forget to save your files,
// Now since you have 'npm start' running. This will automatically trigger a recompilation, and it should automatically reload your page too, which is why you should now see Hi I'm a React App, instead of the old content. With that we can also remove this 'log.svg' file, because we no longer use it on our project, and now we get a bit of a leaner source folder,
// Now what else 'create-react-app' did for us.
// It gave us this 'App.ccs' file which basically defines styling in our 'App.js' file, though I will say that these are not scoped to this file 'App.js', these are still logo styles, and I will actually remove everything, but this first .'App{text-align: center}' class definition, and save it there after. We also get the 'index.css' file, which applies styles globally, and which should be used for some general setup, as here for the body of our application, 'body{margin:0;padding:0;font-family:sans-serif;}'.
// The 'registerServiceWorker.js' file is destined applied working for registering a service service worker which is generated automatically thats related to this web app we get out of the box, it will basically precast our script files, we dont need to configure anything there.
// And the 'App.test' file, well we will dive into testing later in the course, basically it allows us to cerate unit test for the different units, for example components, in our application.

// This is the general setup, and  for the majority of the course we will work in 'App.js' || other new component created.
// Speaking of that lets analyze this file to  understand the  syntax there
// lets get rid of that logo import because we removed the logo file, now that I see it.

// Lets dive into 'jsx' what exactly is and how we add components to our application

// //// 3 ??? 5. Understanding Component Basics

// In the last lecture walk you through the folder structure
// that was created by 'create-react-app',
// and we added our an h1 to our 'App.js' file.

// Let's now dive deep into
// what we see here,

// we see a react component,
// As I explained React is all about creating components
// basically custom html elements,
// you could say
// which there you can use,
// to construct your application.
// This App component actually get used in the 'index.js' file,
// where we render it into the place of this root element,
// And you could render a normal html element here to,
// Test for example,
// this will work, this is now no react component,
// if I save this I see this h1 tag,
// but of course then we haven't a real react application,
// we are rendering a normal html element,
// but we are not rendering our own react component,
// now you could of course, use multiple react-dom renders,
// and render all the html code you wanna use in your app.
// Thats no really how you create react apps though,
// typically, you render one root component,
// the app component, but you can name it whatever you want
// One root component in our case it is the app component,
// name App, and in there you would nest the  other components the application might need, and of course these components,
// can then all be nested into each other,
// but all the way up to the top,
// you only have one root component,
// you could reach out to multiple notes
// in html file, and mount different root component,
// for different react apps,
// all in the same project,
// that would be possible, but it is not what we are doing here,
// in the end you can of course simply replicate,
// what you have learnt in this course,
// for multiple applications,
// in one of the same html file.

// But lets stick to the general || typical usage of react
// we have this app component,
// which is defined in the 'app.js' file,
// here we see one way,
// one of two ways of defining a react component,
// we create a javascript class,
// with the 'class' keyword,
// and then we use the 'extends' keyword,
// to inherit from this component object || class
// to be precise, which is imported up here,
// from the react library.
// Actually we import two things 'react',
// which is the responsible || require for
// rendering anything,
// anything to the dom, we always need to import
// that file where we define a component,
// and of course the component file itself,
// I will soon show a different way of creating components.
// Now this class is one method,
// the 'render' method,
// it needs to have that, because react have to call this method to render something to the screen,
// there is one important caveat every component has to do,
// it has to return || render html code, and then  canwhich  can be render to the dom to the screen,
// you can do other things as well,
// reach out the internet,
// do some calculations, listen to events,
// whatever you need in your application,
// we will see all of that in the course,
// but you always also need to render html to the dom,
// this is so important to keep in mind,
// we then export this class at default export of this file,
// this is a ES6 Feature and simply means,
// if you import this whole file, you simply import this class,because is a default export,
// we do use this in the 'index.js' file
// where we import app from the app file,
// again omitting this extension,
// because its added by our build workflow
// automatically for javascript files.
// This App name here,
// by the way is chosen arbitrarily,
// but typically you use the name of the component
// you also use in the file,
// and it also will use as the file name,
// One side???note, you might also see, this components with dot jsx
// 'App.jsx' file extension instead of 'js'.
// the reason   for this is  this code over???here.
// I refer to it as html which is returned,
// but at the end this is not html,
// it looks like it,
// but it is 'jsx',
// so it is javascript looking a bit different,
// and this can be confusing at first when you are learning react,
// this might be one of the most confusing things actually,
// important to know is,
// this is just some syntactical sugar,
// which was basically invented by the react team,
// write it in a javascript files
// because of the built workflow using here,
// it will automatically transpile to valid javascript at the end,
// its not connected to the file extension you are using,
// dot '.js' and dot '.jsx' files,
// and the convention nowadays is pretty much
// always do jsx files, which is  what we are doing here to,
// and simply is code or syntax that we can use to write html,
// quotation marks while at the end not writing them,
// sounds confusing
// let me show what this is actually compiled to in the  next lecture
