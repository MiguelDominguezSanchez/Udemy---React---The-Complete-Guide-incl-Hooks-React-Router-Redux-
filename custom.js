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
