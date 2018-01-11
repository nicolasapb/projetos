function Person(saying) {
	this.saying = saying	
}

Person.prototype.talk = function() {
	console.log('I say:', this.saying)
}

// var kek = new Person('lololol')

function spawn(constructor) {
	var obj = {}
	Object.setPrototypeOf(obj, constructor.prototype)
	var argsArray = Array.prototype.slice.apply(arguments)
	constructor.apply(obj, argsArray.slice(1))
	return obj
}

var kek = spawn(Person, 'lololol')

kek.talk()