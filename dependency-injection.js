const assert = require('assert')
function getAnimals(fetch, id) {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => res.json())
        .then(data => data) 
} 

/* 
getAnimals(window.fetch, 14)
    .then( texto => document.querySelector('.animal').innerHTML = texto.body ) 
{
  "userId": 2,
  "id": 15,
  "title": "eveniet quod temporibus",
  "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
}
*/

describe('getAnimals', () => {
    it('calls fetch with the correct url', () => {
        const fakeFetch = url => {
            assert(
                url === 
                    'https://jsonplaceholder.typicode.com/posts/15'
            )
        return new Promise(function(resolve) {
            
        })
        }
        getAnimals(fakeFetch, 15)
    })

    it('parses the response of fetch correctly', (done) => {
        const fakeFetch = () => {
            return Promise.resolve({
                json: () => Promise.resolve({
                    results: {
                        "userId": 2,
                        "id": 15,
                        "title": "eveniet quod temporibus",
                        "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
                    }
                })
            })
        }
        getAnimals(fakeFetch, 15)
            .then(result => {
                assert(result.results.id === 15)
                done()
            })
    })
})