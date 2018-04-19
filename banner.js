document.addEventListener('DOMContentLoaded',function(){

	var date = new Date(new Date().getTime() + 10000 * 1000);
    let cookie = document.cookie = "name=value; path=/; expires=" + date.toUTCString();

	console.log(cookie)


setInterval	( function() {


	if(document.cookie){
		console.log('yes')
	}
	else{
		console.log('no', document.cookie, "no")
	}


}, 3000);


})









// document.addEventListener('DOMContentLoaded', function(event) {
   
	
// 	var date = new Date(new Date().getTime() + 60 * 1000);
// 	document.cookie = "name=value; path=/; expires=" + date.toUTCString();

// 	alert ( document.cookie );


// 	console.log( document.cookie );

// 	if (document.cookie == "") {

// 		console.log( "пусто" );

// 	}

// 	else {

// 		console.log( document.cookie );

// 	}


// });