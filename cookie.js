if(typeof(Storage) !== "undefined") {

	function setCookie(name, value, exdays){
				var date = new Date();
				date.setTime(date.getTime() + (exdays*24*60*60*1000));
				var expires = "expires=" + date.toUTCString();
				document.cookie = name + "=" + value + ";" + expires;
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

	function check(){
		for (var i in JSON.parse(localStorage.getItem('test'))) {
				
			var checkUsr = JSON.parse(localStorage.getItem('test'))[i].username;
			var checkPass = JSON.parse(localStorage.getItem('test'))[i].password;

			if(getCookie("username") == checkUsr && getCookie("password") == checkPass){
				return true
			}
		}
	}

	function checkCookie() {
		
	    var username = getCookie("username");
	    var password = getCookie("password");

	    if (check() == true) {

	    	return true;
	    }else{
	    		alert("You are not logged in!")

				window.location = "login.html"					        
	    }
	}

	 function clearListCookies(){
    var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++){   
            var spcook =  cookies[i].split("=");
            document.cookie = spcook[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;";                                
        }
    }

	checkCookie();

	$("#logOut").click(function (){
		clearListCookies();
		document.location = "";
	})

} else {
    alert("Local Storage it not supported")
	}

	
	
