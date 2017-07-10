class GiphySearch {
	static form() {
		return document.getElementsByTagName('form')[0]
	}

	static resultsList() {
		return document.getElementsByTagName('ul')[0]
	}

	constructor() {
		// this.listen = this.listen.bind(this)
	}

	listen() {
		GiphySearch.form().addEventListener('submit', this.submitForm)
	}

	submitForm(event) {
		event.preventDefault();
		const searchQuery = escape(GiphySearch.form().query.value)
		
		const giphyQuery = "http://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=7c48f0399916458a8873ecfb12ccb14d&limit=10"
		fetch(giphyQuery)
		.then(function(response) {
			if(response.ok) {
				return response.json().then(function(json) {
			    for (const gif of json.data) {
			    	const listItem = document.createElement('li')
			    	listItem.innerHTML = '<video><source src="'+gif.images.fixed_width.mp4+'" type="video/mp4"></video>' 
			      GiphySearch.resultsList().appendChild(listItem)
			    }
				})
			} else {
				const responseMessage = document.createElement('p')
				responseMessage.innerText = "Network response was not ok."
				document.body.appendChild(responseMessage)
			}
			})
		.catch(function(error) {
				const errorMessage = document.createElement('p')
				errorMessage.innerText = "There has been a problem with your fetch operation: " + error.message
				document.body.appendChild(errorMessage)
		});
	}
}

const app = new GiphySearch()
app.listen()
