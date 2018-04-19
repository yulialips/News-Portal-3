document.addEventListener('DOMContentLoaded',function(){

	var date = new Date(new Date().getTime() + 10 * 1000);
    let cookie = document.cookie = "name=value; path=/; expires=" + date.toUTCString();

	console.log(cookie)

	if(cookie.length > 0){
		alert('yes')
	}
	else{
		alert('no')
	}

})


setInterval	( function() {

	if (document.cookie == "") {
		alert ("баннер не показывать");
	}
	else {
		alert ("показывать рекламу");
	}



}, 3000);











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