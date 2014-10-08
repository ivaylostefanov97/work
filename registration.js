(function register(){
	if(typeof(Storage) !== "undefined") {
		$('#submit').click( function(){
			var usr = $('#username').val();
			var pass = $('#inputPassword').val();

			function checkIfUsrExsists(){
		    	for (var i in JSON.parse(localStorage.getItem("test"))) {
					var get_usr = JSON.parse(localStorage.getItem("test"))[i].username;

			    	if (usr == get_usr) {
			    		alert("Username already exists!")
			    		return false;
			    	}
		    	}
		    	return true;
		    }
		    

			if (checkIfUsrExsists() == true ) {
				var test = localStorage.getItem("test");
			    var obj = [];
			    if(test){
			         obj = JSON.parse(test);  
			    }
			    obj.push({"username":  usr, "password": pass});
			    localStorage.setItem("test",JSON.stringify(obj));

				window.location = "login.html";
			}
		})

	} else {
    	alert("Local Storage it not supported")
}
}())
