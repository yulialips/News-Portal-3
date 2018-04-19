document.addEventListener('DOMContentLoaded', function(event) {
   
var xhr = new XMLHttpRequest();
var newsContent = document.getElementById('news_content');


xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6f7c85381a5c44deb7e024cd02c60e31', false);

xhr.send();

if (xhr.status != 200) {

  alert( xhr.status + ': ' + xhr.statusText );

} else { 

	var news1 = JSON.parse (xhr.responseText);
	var articles = news1.articles;

	// console.log (news1.articles[0]);

	for (i=0; i < articles.length; i++) {
		// console.log (articles[i]);

		var title = document.createElement("H1");
		var statya = document.createElement("DIV");

		title.innerHTML = articles[i].title;

	 	statia.appendChild(title);
	   	content.appendChild(statia);
   





	}

 

}

});