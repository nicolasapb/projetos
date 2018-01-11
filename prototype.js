function talk() {
	console.log(this)
	console.log(this.sound)
}
let animal = {
	talk
}
let cat = {
	sound: 'kek'
}

Object.setPrototypeOf(cat, animal)
cat.talk()