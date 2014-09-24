if(typeof(Storage) !== "undefined") {
		$(document).on('click', 'a.add', function () {
		    
		    var self = $(this).parent();

		    $(this)[0].setAttribute("id", "the-id")

		     var that = self.prev().prev().text();

		     for (var i in JSON.parse(localStorage.getItem('test'))){
		     	if (JSON.parse(localStorage.getItem('test'))[i].test == that) {
		     		
		     		var json = JSON.parse(localStorage["test"]);

		     		json.splice(i,1);
					localStorage["test"] = JSON.stringify(json);

					var row = $(this).parent().parent();

					row.remove();

		     	}
		     }

		});
	} else {
    	alert("Local Storage it not supported")
}

