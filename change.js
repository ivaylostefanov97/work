if(typeof(Storage) !== "undefined") {
		$(document).on('click', 'a.change', function () {

			var change = '<td id="hide"><input class="form-control input-sm" type="text" id="show"></td>';
			var added = $('legend').text();
		    var self = $(this).parent();
		    var that;

			if (!$(this).attr('data-toggled') || $(this).attr('data-toggled') == 'off'){
	           $(this).attr('data-toggled','on');

	        	if(added == "Types" || added == "Networks"){
	        		$(self.prev().prev()).prepend(change)
	       		}
	       		else if(added == "Models" || added == "Computers" || added == "Network-Devices"){
	       			$(self.prev().prev().prev().prev()).prepend(change)
	       		}
	       		else if(added == "Parts"){
	       			$(self.prev().prev().prev().prev().prev().prev()).prepend(change)
	       		}
		    }
		    else if ($(this).attr('data-toggled') == 'on'){
		           $(this).attr('data-toggled','off');

		        var json = JSON.parse(localStorage[added]);
		        var has = $('#show').val();

		        for (var i in JSON.parse(localStorage.getItem(added))){

		        	if (added == "Types" || added == "Networks") {
		        		that = self.prev();
		        	}
		        	else if(added == "Models" || added == "Computers" || added == "Network-Devices"){
		        		that = self.prev().prev().prev();
		        		console.log(that)
		        	}
		        	else if(added == "Parts"){
		        		that = self.prev().prev().prev().prev().prev();
		        	}

			     	if (JSON.parse(localStorage.getItem(added))[i].added == that.text()) {
			     		
			     		json[i].added = has;
			     		
			     		localStorage.setItem(added, JSON.stringify(json));

						that.html(has)
						console.log(self.prev().html())
					}
				}

		        $('#hide').remove();
		    }
		});
	} else {
    	alert("Local Storage it not supported")
