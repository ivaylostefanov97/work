 var obj = [];
			    var type = $("#type").val();
			    var type1 = $("#type-1").val();
			    var theType = "type";

			    if(add){
			        obj = JSON.parse(add);  
			    }

			    function checkIfExsists(){
			    	for (var i in JSON.parse(localStorage.getItem(added))) {
						var get = JSON.parse(localStorage.getItem(added))[i].added;

				    	if (input == get) {
				    		alert("Element exists!")
				    		return false;
				    	}
				    	else if(input == ""){
				    		alert("Input is empty!")
				    		return false;
				    	}
			    	}
			    	return true;
			    }

			    if (added == "Types"){

			    	if(checkIfExsists() == true){

				    	obj.push({added: input});
						localStorage.setItem(added,JSON.stringify(obj));

				    	for (var i in JSON.parse(localStorage.getItem(added))) {
							var get = JSON.parse(localStorage.getItem(added))[i].added;
							var pk = i;
						}
						$('#wrapper').prepend("<tr><td>" + pk + "<td><td>" + get +  inner );
					}
				}
				else if (added == "Models"){

					if(checkIfExsists() == true){

						for (var i in JSON.parse(localStorage.getItem("Types"))) {
							var get_item = JSON.parse(localStorage.getItem("Types"))[i].added;

							if (type == get_item) {
								obj.push({added: input, Type: get_item});
								localStorage.setItem(added,JSON.stringify(obj));
						

								for (var i in JSON.parse(localStorage.getItem(added))) {
									var get = JSON.parse(localStorage.getItem(added))[i].added;
									var pk = i;
								}
								$('#wrapper').prepend("<tr><td>" + pk + "<td><td>" + get + "<td><td>" + get_item + inner )
							}
						}
					}
				}
				else if (added == "Networks")	{

					if(checkIfExsists() == true){

						obj.push({added: input});
						localStorage.setItem(added,JSON.stringify(obj));

				    	for (var i in JSON.parse(localStorage.getItem(added))) {
							var get = JSON.parse(localStorage.getItem(added))[i].added;
							var pk = i;
						}
						$('#wrapper').prepend("<tr><td>" + pk + "<td><td>" + get +  inner );
					}
				}
				else if (added == "Network-Devices"){

					if(checkIfExsists() == true){

						for (var i in JSON.parse(localStorage.getItem("Networks"))) {
							var get_item = JSON.parse(localStorage.getItem("Networks"))[i].added;

							if (type == get_item) {
								obj.push({added: input, Type: get_item});
								localStorage.setItem(added,JSON.stringify(obj));
						

								for (var i in JSON.parse(localStorage.getItem(added))) {
									var get = JSON.parse(localStorage.getItem(added))[i].added;
									var pk = i;
								}
							}
				   		}
				   		$('#wrapper').prepend("<tr><td>" + pk + "<td><td>" + get + "<td><td>" + get_item + inner )
			   		}
			   	}

			   	else if (added == "Computers"){

			   		if(checkIfExsists() == true){

				   		for (var i in JSON.parse(localStorage.getItem("Networks"))) {
							var get_item = JSON.parse(localStorage.getItem("Networks"))[i].added;

							if (type == get_item) {
								obj.push({added: input, Type: get_item});
								localStorage.setItem(added,JSON.stringify(obj));
						

								for (var i in JSON.parse(localStorage.getItem(added))) {
									var get = JSON.parse(localStorage.getItem(added))[i].added;
									var pk = i;
									arr.push(pk)
								}
							}
				   		}
				   		$('#wrapper').prepend("<tr><td>" + pk + "<td><td>" + get + "<td><td>" + get_item + inner )
			   		}
			   	}

				else if (added == "Parts"){

					if(checkIfExsists() == true){

						$.each(JSON.parse(localStorage.getItem("Models")), function(i, v){

									for (var i in JSON.parse(localStorage.getItem("Computers"))) {

										var get_item_1 = JSON.parse(localStorage.getItem("Computers"))[i].added;

										for (var i in JSON.parse(localStorage.getItem("Network-Devices"))) {

										var get_item_2 = JSON.parse(localStorage.getItem("Network-Devices"))[i].added;

									if (type == v.added && type1 == get_item_1 || type1 == get_item_2) {

										obj.push({added: input, Type: type, Device: type1});
										localStorage.setItem(added,JSON.stringify(obj));

										for (var s in JSON.parse(localStorage.getItem(added))) {
											var get = JSON.parse(localStorage.getItem(added))[s].added;
											var pk = s;
										}

							   			$('#wrapper').prepend("<tr><td>" + pk + "<td><td>" + get + "<td><td>" + type + "<td><td>" + type1 + inner )
									}
								}
							}
						})
					}
				}
			})
		}())
	} else {
	    alert("Local Storage it not supported")
		}
})
