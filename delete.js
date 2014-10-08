
if(typeof(Storage) !== "undefined") {
		$(document).on('click', 'a.add', function () {

			var added = $('legend').text();
		    
		    var self = $(this).parent();

		    var that;

		     for (var i in JSON.parse(localStorage.getItem(added))){

		     	if (added == "Types" || added == "Networks") {
	        		that = self.prev().prev();
	        	}
	        	else if(added == "Models" || added == "Computers" || added == "Network-Devices"){
	        		that = self.prev().prev().prev().prev();
	        		console.log(that)
	        	}
	        	else if(added == "Parts"){
	        		that = self.prev().prev().prev().prev().prev().prev();
	        	}

		     	if (JSON.parse(localStorage.getItem(added))[i].added == that.text()) {
		     		
		     		var json = JSON.parse(localStorage[added]);

		     		json.splice(i,1);
					localStorage[added] = JSON.stringify(json);

					var row = $(this).parent().parent();

					row.remove();

		     	}
		     }

		});
	} else {
    	alert("Local Storage it not supported")
}

