let talk = function() {
	console.log(this.sound)
}

let boromir = {
	speak: talk,
	sound: 'One does not simply walks into mordor'
}
let gollum = {
	jabber: boromir.speak,
	sound: 'My precioussss'
}

gollum.jabber()
// let bormirTalks = talk.bind(boromir)

// bormirTalks()