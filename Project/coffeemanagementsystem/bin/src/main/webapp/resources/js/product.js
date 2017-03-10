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
	
	// reset form of products
	function resetForm() {
		$('#addProduct1').validate().resetForm();
		$("#nameProduct").val('');
		$("#productGroup").prop('selectedIndex', 0);
		$("#priceProduct").val('');
		$("#descriptionProduct").val('');
		$("#status").prop('checked', true);
	}
	
	//load data group product for combobox
	$.ajax({
		url : "productgroup/getproductgroup",
		dataType : "json",
		success : function(data) {
			$('#productGroupName').empty();
			$('#productGroupName').append($('<option>', {
				value : "rong",
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
		var status = document.getElementById("showStatus");
		status.value = data["status"];
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
		var status = document.getElementById("updateStatus");
		status.value = data["status"];
		
		$("#update-product").submit(function(e){
			e.preventDefault();
			//get data edit
			var data = {
					"id" : $("#updateIdProduct").val(),
					"name" : $("#updateNameProduct").val(),
					"productGroupId" : $("#updateProductGroup").val(),
					"price" : $("#updatePriceProduct").val(),
					"status" : $("#updateStatus").is(":checked"),
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
	

	
	
	$("#addform").load("homeAddProducts",function() {
		
		// focus on first field of table add products
		$("#buttonAddProduct").click(function() {
			$('#addProduct').on('shown.bs.modal',function() {
				$('#nameProduct').focus();
			});
		});
		
		// add products
		$("#addProduct1").submit(function(e) {
			e.preventDefault();
			var data = {
				"name" : $("#nameProduct").val(),
				"productGroupId" : $("#productGroup").val(),
				"price" : $("#priceProduct").val(),
				"status" : $("#status").is(':checked'),
				"description" : $("#descriptionProduct").val()
			};
			console.log(data);
			if ($("#addProduct1").valid()) {
				$.ajax({
					url : "addProducts",
					type : "POST",
					dataType : "json",
					contentType : "application/json",
					data : JSON.stringify(data),
					success : function(result) {
						alert("Thêm thành công");
						resetForm();
						$("#addProduct").modal('hide');
						reload();
					},
					error : function() {
						alert("Thêm không thành công");
						resetForm();
					}
				});

			}
			return false;
		});
		
		// display error when mouse blur
		$(".validate").blur(function() {
			if (!cancelHide) {
				if (!$(this).valid()) {
					return false;
				}
			}
		});
		
		//check validate form products
		$("#addProduct1").validate({
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

		$('#buttonCancelAddProduct').mousedown(function() {
					cancelHide = true;
		});
		$('#buttonCancelAddProduct').mouseup(function() {
			cancelHide = false;
			resetForm();
			$("#addProduct").modal('hide');
		});
	});

	//search product
	$("#search").submit(function(e) {
		e.preventDefault();
		waitingDialog.show('Loading data');
		var search = {
			'name' : $("#productName").val(),
			'groupId' : $("#productGroupName")
					.val(),
			'priceFrom' : $("#pricefrom").val(),
			'priceTo' : $("#priceto").val()
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
				
			},
			error : function(err) {
				alert("Khong xoa duoc");
			}
		});
	}
	//get id to delete
	$("#example tbody").on('click','.deleteproduct',function(){
		var record = table.row($(this).parents('tr')).data();
		deleteproduct(record['id']);
		reload();
	});
});





