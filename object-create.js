const cat = {
	maskeSound: function() {
		console.log(this.sound)
	}
}

const jay = Object.create(cat)
jay.sound = 'aaeHOOOO'

const tom = Object.create(cat)
tom.sound = 'kekekek'
jay.maskeSound()
tom.maskeSound()

const lol = {
	sound: 'lololol'
}
Object.setPrototypeOf(lol, cat) 

console.log('?', cat.isPrototypeOf(tom))
console.log('?', cat.isPrototypeOf(lol))

// const cat = {
// 	maskeSound: function() {
// 		console.log(this.sound)
// 	}
// }

// function objectCreate(proto) {
// 	const obj = {}
// 	Object.setPrototypeOf(obj, proto)
// 	return obj
// }

// const jay = objectCreate(cat)
// jay.sound = 'aaeHOOOO'

// const tom = objectCreate(cat)
// tom.sound = 'kekekek'
// jay.maskeSound()
// tom.maskeSound()
 
// console.log('?', cat.isPrototypeOf(tom)) 