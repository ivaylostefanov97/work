(function login(){
	if(typeof(Storage) !== "undefined") {

		$("#button").click( function(){
			var user = $("#the-username").val();
			var password = $("#the-password").val();
			
			function check(){
				for (var i in JSON.parse(localStorage.getItem('test'))) {
	  				
					var checkUsr = JSON.parse(localStorage.getItem('test'))[i].username;
					var checkPass = JSON.parse(localStorage.getItem('test'))[i].password;

					
						if(user == checkUsr && password == checkPass){
							return true
						}
					}
			}

				function submit(){
					if (check() == true){
						window.location = "index.html";
					} else {
						alert("Username of password is incorrect.")
					}
				}
				
				submit();

		})

	} else {
    	alert("Local Storage it not supported")
}
}())
