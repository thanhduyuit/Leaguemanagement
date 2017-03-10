$(document).ready(function() {
	var cancelHide = false;
	
	//create variable table
	var table = $("#example").DataTable({
		"searching" : false,
		"searchable" : false,
		"scrollX" : false,
		"scrolly" : false,
		"scrollCollapse" : true,
		"paging" : true,
		"lengthChange" : false,
		"ordering" : false,
		"paginate" : false,
		"info" : false,
		"sDom" : 'lfrtip',
		"aaData" : "",
		"language" : { 
			"emptyTable" : "Không có sản phẩm nào cả",
			"paginate" : {
				"previous" : "Trước",
				"next" : "Sau"
			}
		},
		"columns" : [
				{
					"data" : "id",
					"visible" : false
				},
				{
					"data" : "productGroupId",
					"visible" : false
				},
				{
					"data" : "status",
					"visible" : false
				},
				{
					"data" : "name"
				},
				{
					"data" : "productGroupName"
				},
				{
					"data" : "price"
				},
				{
					"data" : "description"
				},
				{
					"className" : 'details-control',
					"orderable" : false,
					"data" : null,
					"defaultContent" : '<button class="showDetail fa fa-eye" data-toggle="modal" data-target="#showProduct"></button>' +
										'<button class="update fa fa-pencil-square-o" data-toggle="modal" data-target="#updateProduct"></button>' +
										'<button class="deleteproduct fa fa-trash" data-toggle="modal" data-target="#delProductModal"></button>'
				} ]
	});
	
	// use to reload page
	function reload(){
		$("#productName").val('');
		$("#productGroup").prop('selectedIndex', 0);
		$("#pricefrom").val('');
		$("#priceto").val('');
		table.clear().draw();
	}	
	
	//load data group product for combobox
	$.ajax({
		url : "productgroup/getproductgroup",
		dataType : "json",
		success : function(data) {
			$('#productGroupName').empty();
			$('#productGroupName').append($('<option>', {
				value : "",
				text : "Không chọn"
			}));
			$.each(data, function(i, item) {
				$('#productGroupName,#updateProductGroup,#showProductGroup,#productGroup').append($('<option>', {
					value : item.id,
					text : item.name
				}));
			});
		}
	});
	
	//search product
	$("#search").submit(function(e) {
		e.preventDefault();
		if (!$("#search").valid()) return false;
		if(!($("#pricefrom").val()==='')&&!($("#priceto").val()==='')){
			if(parseInt($("#pricefrom").val().replace(/\,/g, '' ))>parseInt($("#priceto").val().replace(/\,/g, '' ))){
				alert("Giá từ lớn hơn giá đến");
				return false;
			}
		}
		waitingDialog.show('Loading data');
		var search = {
			'name' : $("#productName").val(),
			'groupId' : $("#productGroupName")
					.val(),
			'priceFrom' : $("#pricefrom").val().replace(/\,/g, '' ),
			'priceTo' : $("#priceto").val().replace(/\,/g, '' )
		}
		$.ajax({
			type : "POST",
			contentType : "application/json;charset=UTF-8",
			url : "searchproducts",
			dataType : "json",
			data : JSON.stringify(search),
			success : function(data) {
				table.clear();
				table.rows.add(data);
				table.draw();
				waitingDialog.hide();
			},
			error : function(){
				waitingDialog.hide();
				alert("Lỗi kết nối");
			}
		});
		return false;
	});
	
	
	//delete product function
	function deleteproduct(id) {
		$.ajax({
			url : 'deleteProducts',
			data : {
				"id" : id,
			},
			type : "GET",
			datatype : 'json',
			contentType : "charset=UTF-8",
			success : function(resp) {
				alert("Xóa thành công!");
			},
			error : function(err) {
				alert("Không xóa được.");
			}
		});
	}
	//get id to delete
	$("#example tbody").on('click','.deleteproduct',function(){
		var record = table.row($(this).parents('tr')).data();
		var row = table.row($(this).parents('tr'));
		
		$('#idtoDelete').unbind().click( function(){
			deleteproduct(record['id']);	
			row.remove().draw();
		});
	});
	$("#productgroupform").click(function(){
		$("#mainpage").load("productgroup");
	});
	
	//get data of row when lick edit button
	$("#example").on("click", ".update", function(){
		var data = table.row($(this).parents("tr")).data();
		//put value for input in form update product
		var id = document.getElementById("updateIdProduct");
		id.value = data["id"];
		var name = document.getElementById("updateNameProduct");
		name.value = data["name"];
		var group = document.getElementById("updateProductGroup");
		group.value = data["productGroupId"];
		var price = document.getElementById("updatePriceProduct");
		price.value = data["price"];
		var description = document.getElementById("updateDescriptionProduct");
		description.value = data["description"];
		if (data['status']){
			$("#updateStatusTrue").prop("checked", true); 
		}
		else {
			$("#updateStatusFalse").prop("checked", true); 
		}
		$("#update-product").submit(function(e){
			e.preventDefault();
			//get data edit
			var status = $("#update-product input[name='status']:checked").val();
			var bol = (status == 1) ? true : false;
			var data = {
					"id" : $("#updateIdProduct").val(),
					"name" : $("#updateNameProduct").val(),
					"productGroupId" : $("#updateProductGroup").val(),
					"price" : $("#updatePriceProduct").val(),
					"status" : bol,
					"description" : $("#updateDescriptionProduct").val()
			}
			//Check form validation
			if($("#update-product").valid()) {
				$.ajax({
					url : "updateProducts",
					type : "POST",
					dataType : "json",
					contentType : "application/json",
					data : JSON.stringify(data),
					success : function(result) {
						$("#updateProduct").modal("hide");
						alert("Sửa thành công");
						reload();
					},
					error : function() {
						alert("Sửa không thành công");
					}
				});
			} return false;
		});
		
		//check validate form by validate jquery
		$("#update-product").validate({
			onfocusout : false,
			rules : {
				'nameProduct' : {
					required : true,
					maxlength : 20
				},
				'productGroup' : {
					required : true
				},
				'priceProduct' : {
					required : true,
					min : 0
				}
			},
			messages : {
				'nameProduct' : {
					required : "Vui lòng nhập tên sản phẩm.",
					maxlength : "Tên sản phẩm nhỏ hơn 50 ký tự. Vui lòng nhập lại!"
				},
				'productGroup' : {
					required : "Vui lòng chọn tên nhóm sản phẩm.",
				},
				'priceProduct' : {
					required : "Vui lòng nhập giá sản phẩm.",
					min : "Giá phải lớn hơn 0. Vui lòng nhập lại!"
				}
			}
		});
		//clear message error
		$('#buttonCancelUpdateProduct,.close').click(function(e){
			e.preventDefault();
			$("#update-product").validate().resetForm();
		});
	});
	
	//get data of row when click show button
	$("#example").on("click",".showDetail", function(){
		var data = table.row($(this).parents("tr")).data();
		var name = document.getElementById("showNameProduct");
		name.value = data["name"];
		var group = document.getElementById("showProductGroup");
		group.value = data["productGroupId"];
		var price = document.getElementById("showPriceProduct");
		price.value = data["price"];
		var description = document.getElementById("showDescriptionProduct");
		description.value = data["description"];
		if (data['status']){
			$("#showStatusTrue").prop("checked", true); 
		}
		else {
			$("#showStatusFalse").prop("checked", true); 
		}
	});
});
