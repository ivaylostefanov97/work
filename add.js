if(typeof(Storage) !== "undefined") {
    (function(){
		$('#add').click(function(){
			var input = $('#inputDefault').val();

			var test = localStorage.getItem("test");
		     var obj = [];
		     if(test){
		         obj = JSON.parse(test);  
		     }
		     obj.push({"test":  input});
		     localStorage.setItem("test",JSON.stringify(obj));

		    for (var i in JSON.parse(localStorage.getItem('test'))) {
				var get = JSON.parse(localStorage.getItem('test'))[i].test;
			}

			function table(){
        		$('#wrapper').prepend("<tr><td>" + get +  "</td><td><a href='#' class='btn btn-primary btn-xs' >change</a></td><td><a href='#' class='btn btn-primary btn-xs add'>delete</a></td></tr>" )
			}

			table();
		})

	}())
} else {
    alert("Local Storage it not supported")
	}

	
	
