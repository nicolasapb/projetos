const fetch = require('node-fetch')
//const co = require('co')

/*fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(res => res.json())
	.then(post => post.title)
	.then(x => console.log('Title: ',x));*/

run(function *() {
	const uri = 'https://jsonplaceholder.typicode.com/posts/1'
	const response = yield fetch(uri)
	const post = yield response.json()
	const title = post.title
	console.log('Title:',title)
})

function run(generator) {
	const iterator = generator()
	function iterate(iteration) {
 		if (iteration.done) return iteration.value
 		const promise = iteration.value
 		return promise.then(x => iterate(iterator.next(x)))
	}
	iterate(iterator.next())
}