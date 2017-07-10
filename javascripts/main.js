var resultsList = document.getElementsByTagName('ul')[0];
var form = document.getElementsByTagName('form')[0];


form.addEventListener('submit', function(event){
	event.preventDefault();
	var searchQuery = escape(form.query.value);
	var giphyQuery = "http://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=7c48f0399916458a8873ecfb12ccb14d&limit=10";

	fetch(giphyQuery)
		.then(function(response) {
			if(response.ok) {
				return response.json().then(function(json) {
				    for(i = 0; i < json.data.length; i++) {
				      	var listItem = document.createElement('li');
				      	listItem.innerHTML = '<video><source src="'+json.data[i].images.fixed_width.mp4+'" type="video/mp4"></video>'; 
				      	resultsList.appendChild(listItem);
				    };
				});
			} else {
				var responseMessage = document.createElement('p');
				responseMessage.innerText = "Network response was not ok.";
				document.body.appendChild(responseMessage);
			}
			})
		.catch(function(error) {
				var errorMessage = document.createElement('p');
				errorMessage.innerText = "There has been a problem with your fetch operation: " + error.message;
				document.body.appendChild(errorMessage);
		});
});
