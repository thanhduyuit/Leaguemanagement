$(document).ready(function(){
	var cancelHide = false;
	
	// reset form of products
	function resetForm() {
		$('#addProduct1').validate().resetForm();
		$("#nameProduct").val('');
		$("#productGroup").prop('selectedIndex', 0);
		$("#priceProduct").val('');
		$("#descriptionProduct").val('');
		$("#status").prop('checked', true);
	}
	
	$("#addform").load("homeAddProducts",function() {	
		
		// focus on first field of table add products
		$(".addform").click(function() {
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
					maxlength : 50
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
	}); // end load
});	
