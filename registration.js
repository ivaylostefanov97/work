(function register(){
	if(typeof(Storage) !== "undefined") {

		$('#submit').click( function(){
			var usr = $('#username').val();
			var pass = $('#inputPassword').val();

			 var test = localStorage.getItem("test");
		     var obj = [];
		     if(test){
		         obj = JSON.parse(test);  
		     }
		     obj.push({"username":  usr, "password":pass});
		     localStorage.setItem("test",JSON.stringify(obj));

			window.location = "success.html";
		})

	} else {
    	alert("Local Storage it not supported")
}
}())
