$(document).ready(
		function() {
			//get input
			var name = $("#inputName");
			var nameError = $("#nameError");
			var materialType = $("#materialType");
			var materialTypeError = $("#materialTypeError");
			var quantity = $("#inputQuantity");
			var quantityError = $("#quantityError");
			var price = $("#inputPrice");
			var priceError = $("#priceError");
			var description = $("#inputDescription");
			var descriptionError = $("#descriptionError");

			materialType.blur(validateMaterialType);
			name.blur(validateName);
			price.blur(validatePrice);
			quantity.blur(validateQuantity);
			description.blur(validateDescription);
			
			//valid special character
			function isValid(str) {
			    var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
			    for (var i = 0; i < str.length; i++) {
			       if (iChars.indexOf(str.charAt(i)) != -1) {
			           return false;
			       }
			    }
			    return true;
			}
			// validate field materialName add warehouse
			function validateName() {
				if (name.val() == "") {
					name.addClass("error");
					nameError.text("Tên hàng không để trống.");
					nameError.addClass("error");
					return false;
				}else if(isValid(name.val())==false){
					name.addClass("error");
					nameError.text("Tên hàng không chứa ký tự đặc biệt.");
					nameError.addClass("error");
					return false;
				}else if(name.val().length > 100){
					name.addClass("error");
					nameError.text("Tên hàng không dài hơn 100 ký tự.");
					nameError.addClass("error");
					return false;
				} else {
					name.removeClass("error");
					nameError.text("");
					nameError.removeClass("error");
					return true;
				}
			}
			// validate field materialType add warehouse
			function validateMaterialType() {
				var a = materialType.val();
				if (a == "") {
					materialType.addClass("error");
					materialTypeError.text("Vui lòng chọn loại hàng");
					materialTypeError.addClass("error");
					return false;
				} else {
					materialType.removeClass("error");
					materialTypeError.text("");
					materialTypeError.removeClass("error");
					return true;
				}
			}
			//validate field price add warehouse
			function validatePrice() {
				if (price.val() <= 0) {
					price.addClass("error");
					priceError.text("Giá phải lớn hơn 0.");
					priceError.addClass("error");
					return false;
				} else if (price.val() == "") {
					price.addClass("error");
					priceError.text("Giá không để trống.");
					priceError.addClass("error");
					return false;
				} else {
					price.removeClass("error");
					priceError.text("");
					priceError.removeClass("error");
					return true;
				}
			}
			// validate field quantity add warehouse
			function validateQuantity() {
				if (quantity.val() <= 0) {
					quantity.addClass("error");
					quantityError.text("Số lượng phải lớn hơn 0.");
					quantityError.addClass("error");
					return false;
				} else if (quantity.val() == "") {
					quantity.addClass("error");
					quantityError.text("Số lượng không để trống.");
					quantityError.addClass("error");
					return false;
				} else {
					quantity.removeClass("error");
					quantityError.text("");
					quantityError.removeClass("error");
					return true;
				}
			}
			// validate field Description add warehouse
			function validateDescription() {
				if(isValid(description.val())==false){
					description.addClass("error");
					descriptionError.text("Mô tả không chứa ký tự đặc biệt.");
					descriptionError.addClass("error");
					return false;
				}else{
					description.removeClass("error");
					descriptionError.text("");
					descriptionError.removeClass("error");
					return true;
				}
			}
			//refresh and close popup add warehouse
			$("#btnClosePopupWarehouse").click(function() {
				name.val("");
				$("#materialType").val("");
				$("#inputPrice").val("");
				$("#inputQuantity").val("");
				$("#inputDescription").val("");
				nameError.text("");
				materialTypeError.text("");
				priceError.text("");
				quantityError.text("");
				descriptionError.text("");
			});
			//send data when submit popup add warehouse
			$("#themHangForm").submit(
					function(e) {
						//focus mouse when input field invalid
						if(!validateName())
							name.focus();
						else if(!validateQuantity())
							quantity.focus();
						else if(!validatePrice())
							price.focus();
						else if(!validateDescription())
							description.focus();
						//if validate true, will send data by json and save it in database
						if (validateMaterialType() & validateName() & validateQuantity()
								& validatePrice() & validateDescription()) {
							e.preventDefault();
							var material = new Object();
							material.name = $("#inputName").val();
							material.materialType = $("#materialType").val();
							material.quantity = $("#inputQuantity").val().split(',').join('');
							material.price = $("#inputPrice").val().split(',').join('');
							material.description = $("#inputDescription").val();
							$.ajax({
								type : "POST",
								contentType : "application/json;charset=UTF-8",
								dataType : "json",
								data : JSON.stringify(material),
								url : "addWarehouse",
								success : function(data) {
									// notification when add warehouse success
									alert("Bạn đã thêm thành công mặt hàng.");
									// set null for some field in popup
									 $("#inputName").val("");
									 $("#materialType").val("");
									 $("#inputPrice").val("");
									 $("#inputQuantity").val("");
									 $("#inputDescription").val("");
									 // hide popup add warehouse
									 $("#myModalNorm").modal("hide");
								}
							});
						} else {
							return false;
						}
					});
					//get all materialType and show in [select]
					$.ajax({
						type : "GET",
						contentType : "application/json;charset=UTF-8",
						dataType : "json",
						url : "getAllMaterialType",
						success : function(data) {
							//add list material type on combobox [Loại hang]
							$.each(data, function(i, item) {
								$('#materialType').append($('<option>', {
									value : item.id,
									text : item.name
								}));
							});
						}
					});
		});
//Validate popup add material type
$(document).ready(function() {
	//get input
	var materialTypeName = $("#nameMaterialTypes");
	var materialTypeNameInfo = $("#nameMaterTypeError");
	var materialTypeDescription = $("#materialTypeDescription");
	var materialTypeDescriptionInfo = $("#materialTypeDescriptionError");
	//valid special character
	function isValid1(str) {
	    var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
	    for (var i = 0; i < str.length; i++) {
	       if (iChars.indexOf(str.charAt(i)) != -1) {
	           return false;
	       }
	    }
	    return true;
	}
	materialTypeName.blur(validateMaterialTypeNameExists);
	materialTypeDescription.blur(validateDescriptionMaterialType);
	// validate material type exists of popup add material type
	var result = false;
	function validateMaterialTypeNameExists() {		
		$.ajax({
			type : "GET",
			contentType : "application/json;charset=UTF-8",
			dataType : "json",
			url : "getAllMaterialType",
			success : function (data) {
				$.each(data, function(i, item) {
					if(item.name == materialTypeName.val()){
						materialTypeName.addClass("error");
						materialTypeNameInfo.text("Tên loại hàng đã tồn tại.");
						materialTypeNameInfo.addClass("error");
						result = false;
						return false;
					}else {
						materialTypeName.removeClass("error");
						materialTypeNameInfo.text("");
						materialTypeNameInfo.removeClass("error");
						result = true;
						return true;
					}
				});
			}
		});
	}
	//validate name material type of popup add material type
	function validateMaterialTypeName() {
		if(materialTypeName.val() == ""){
			materialTypeName.addClass("error");
			materialTypeNameInfo.text("Tên loại hàng không để trống.");
			materialTypeNameInfo.addClass("error");
			return false;
		}else if(isValid1(materialTypeName.val())==false){
			materialTypeName.addClass("error");
			materialTypeNameInfo.text("Tên loại hàng không chứa ký tự đặc biệt.");
			materialTypeNameInfo.addClass("error");
			return false;
		}else if(materialTypeName.val().length >100 ){
			materialTypeName.addClass("error");
			materialTypeNameInfo.text("Tên loại hàng không dài hơn 100 ký tự.");
			materialTypeNameInfo.addClass("error");
			return false;
		}else {
			materialTypeName.removeClass("error");
			materialTypeNameInfo.text("");
			materialTypeNameInfo.removeClass("error");
			return true;
		}
	}
	// validate description of popup add material type
	function validateDescriptionMaterialType() {
		if(isValid1(materialTypeDescription.val())==false){
			materialTypeDescription.addClass("error");
			materialTypeDescriptionInfo.text("Tên loại hàng không chứa ký tự đặc biệt.");
			materialTypeDescriptionInfo.addClass("error");
			return false;
		}else{
			materialTypeDescription.removeClass("error");
			materialTypeDescriptionInfo.text("");
			materialTypeDescriptionInfo.removeClass("error");
			return true;
		}
	}
	// hide popup add warehouse
	$("#btnDialogMaterType").click(function() {
		$("#myModalNorm").modal("hide");
	});
	//if true, will send data of popup material type 
	$("#btnSaveMaterType").click(function(e) {
		//focus mouse when input field invalid
		if(!validateMaterialTypeName()){
			materialTypeName.focus();
		}else if(!validateDescriptionMaterialType()){
			materialTypeDescription.focus();
		}else if(!result){
			materialTypeName.focus();
		}
		
		if(validateMaterialTypeName() & result & validateDescriptionMaterialType()){
			e.preventDefault();
			var materialTypeData = new Object();
			materialTypeData.name = $("#nameMaterialTypes").val();
			materialTypeData.description = $("#materialTypeDescription").val();
			$.ajax({
				type: "POST",
				contentType : "application/json;charset=UTF-8",
				dataType : "json",
				data : JSON.stringify(materialTypeData),
				url: "addDataMaterialType",
				success: function(data) {
					// set null for field
					materialTypeName.val("");
					materialTypeDescription.val("");
					// hile popup add material type
					$("#addMaterialType").modal("hide");
					$('#materialType').empty();
					// get all materialType and show in [select]
					$.ajax({
						type : "GET",
						contentType : "application/json;charset=UTF-8",
						dataType : "json",
						url : "getAllMaterialType",
						success : function(data) {
							//add value default for tag [option] in combobox [Loai hang]
							$('#materialType').append($('<option>', {
								value : "",
								text : "Chọn loại hàng"
							}));
							// add list material type on combobox [Loại hang]
							$.each(data, function(i, item) {
								$('#materialType').append($('<option>', {
									value : item.id,
									text : item.name
								}));
							});
						}
					});
					//update search materialType
					$('#comboLoaiHang1').empty();
					$.ajax({
						type : "GET",
						contentType : "application/json;charset=UTF-8",
						dataType : "json",
						url : "getAllMaterialType",
						success : function(data) {
							$('#comboLoaiHang1').append($('<option>', {
								value : "",
								text : "Chọn loại hàng"
							}));
							$.each(data, function(i, item) {
								$('#comboLoaiHang1').append($('<option>', {
									value : item.id,
									text : item.name
								}));
							});
						}
					});
					// show popup add material
					$("#myModalNorm").modal("show");
				}
			});
			return true;
		}else{
			return false;
		}
	});
	// refresh and close popup add material type
	$("#btnCloseMaterType1").click(function() {
			$("#myModalNorm").modal("show");
			materialTypeNameInfo.text("");
			$("#nameMaterialTypes").val("");
			$("#materialTypeDescription").val("");
			materialTypeDescriptionInfo.text("");
	});
});

