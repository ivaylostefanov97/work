(function login(){
	if(typeof(Storage) !== "undefined") {

		$("#button").click( function(){
			var user = $("#the-username").val();
			var password = $("#the-password").val();

			function setCookie(name, value, exdays){
				var date = new Date();
				date.setTime(date.getTime() + (exdays*24*60*60*1000));
				var expires = "expires=" + date.toUTCString();
				document.cookie = name + "=" + value + ";" + expires;
			}

			function storeValues(){
				setCookie("username", user, 1)
				setCookie("password", password, 1)

				return true;
			}

			function getCookie(name) {
			    var names = name + "=";
			    var ca = document.cookie.split(';');
			    for(var i=0; i<ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0)==' ') c = c.substring(1);
			        if (c.indexOf(names) != -1) return c.substring(names.length,c.length);
			    }
			    return "";
			}

			function checkCookie() {

			    var username = getCookie("username");
			    var password = getCookie("password");

			    if (username != "" && password != "") {
			    	window.location = "index.html";
			    }else{
					window.location = "login.html"					        
			    }
			}
			
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

				storeValues();
				checkCookie();

				

				} else {
					alert("Username or password is incorrect.")
				}
			}
			
			submit();

		})

	} else {
    	alert("Local Storage it not supported")
}
}())
