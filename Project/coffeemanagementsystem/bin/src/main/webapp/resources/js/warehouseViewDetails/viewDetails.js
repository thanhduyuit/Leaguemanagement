
// Gán dữ liệu vào cho Modal View Details
function setData(data) {
	$("#idWH").val(data['id']);
	$("#nameWH").val(data['name']);
	$("#typeWH").val(data['materialType']);
	$("#priceWH").val(data['price']);
	$("#quantityWH").val(data['quantity']);
	$("#descriptionWH").val(data['description']);
	$("#storeWH").val(data['store']);
}

function getData(id, controller)
{
	
	var elementID = id;
	var elementController = controller;
	
	$.ajax({
		
		type : "POST",
		contentType : "application/json;charset=UTF-8",
		dataType : "json",
		data : JSON.stringify({
			"id" : elementID
		}),
		
		url : elementController,
		success : function(data){
			setData(data);
		},

		error : function() {
			alert("Not!");
		}

	});
}

