$(document).ready(
		function() {
			//get input
			var tableHang = $("#example");
			var name = $("#inputName");
			var nameInfo = $("#nameInfo");
			var loaiHang = $("#comboLoaiHang");
			var loaiHangInfo = $("#loaiHangInfo");
			var sl = $("#inputSl");
			var slInfo = $("#slInfo");
			var gia = $("#inputGia");
			var giaInfo = $("#giaInfo");
			var pattern = new RegExp(/[^a-zA-Z0-9\-\+\ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ ]/);

			loaiHang.blur(validateLoaiHang);
			name.blur(validateName);
			gia.blur(validateGia);
			sl.blur(validateSl);
			
			// validate field materialName
			function validateName() {
				if ($("#inputName").val() == "") {
					name.addClass("error");
					nameInfo.text("Tên hàng không hợp lệ.");
					nameInfo.addClass("error");
					return false;
				}else if(pattern.test($("#inputName").val())){
					name.addClass("error");
					nameInfo.text("Tên hàng không hợp lệ.");
					nameInfo.addClass("error");
					return false;
				} else {
					name.removeClass("error");
					nameInfo.text("");
					nameInfo.removeClass("error");
					return true;
				}
			}
			
			// validate field materialType
			function validateLoaiHang() {
				var a = $("#comboLoaiHang").val();
				if (a == "") {
					loaiHang.addClass("error");
					loaiHangInfo.text("Vui lòng chọn loại hàng");
					loaiHangInfo.addClass("error");
					return false;
				} else {
					loaiHang.removeClass("error");
					loaiHangInfo.text("");
					loaiHangInfo.removeClass("error");
					return true;
				}
			}
			
			//validate field price
			function validateGia() {
				if ($("#inputGia").val() <= 0) {
					gia.addClass("error");
					giaInfo.text("Giá không hợp lệ.");
					giaInfo.addClass("error");
					return false;
				} else if ($("#inputGia").val() == "") {
					gia.addClass("error");
					giaInfo.text("Giá không hợp lệ.");
					giaInfo.addClass("error");
					return false;
				} else {
					gia.removeClass("error");
					giaInfo.text("");
					giaInfo.removeClass("error");
					return true;
				}
			}
			
			// validate field quantity
			function validateSl() {
				if ($("#inputSl").val() <= 0) {
					sl.addClass("error");
					slInfo.text("Số lượng không hợp lệ.");
					slInfo.addClass("error");
					return false;
				} else if ($("#inputSl").val() == "") {
					sl.addClass("error");
					slInfo.text("Số lượng không hợp lệ.");
					slInfo.addClass("error");
					return false;
				} else {
					sl.removeClass("error");
					slInfo.text("");
					slInfo.removeClass("error");
					return true;
				}
			}
			
			//refresh and close popup add warehouse
			$("#btnClosePopupAddWarehouse").click(function() {
				$("#inputName").val("");
				$("#comboLoaiHang").val("");
				$("#inputGia").val("");
				$("#inputSl").val("");
				$("#inputDescription").val("");
				nameInfo.text("");
				loaiHangInfo.text("");
				giaInfo.text("");
				slInfo.text("");
			});
			
			//send data when submit popup add warehouse
			$("#themHangForm").submit(
					function(e) {
						if (validateLoaiHang() & validateName() & validateSl()
								& validateGia()) {
							e.preventDefault();
							var material = new Object();
							material.name = $("#inputName").val();
							material.materialType = $("#comboLoaiHang").val();
							material.quantity = $("#inputSl").val().split(',').join('');
							material.price = $("#inputGia").val().split(',').join('');
							material.description = $("#inputDescription").val();
							
							$.ajax({
								type : "POST",
								contentType : "application/json;charset=UTF-8",
								dataType : "json",
								data : JSON.stringify(material),
								url : "addWarehouse",
								success : function(data) {
									// notification when add warehouse success
									alert("Bạn đã thêm thành công mặt hàng ");
									// set null for some field in popup
									 $("#inputName").val("");
									 $("#comboLoaiHang").val("");
									 $("#inputGia").val("");
									 $("#inputSl").val("");
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
								$('#comboLoaiHang').append($('<option>', {
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
	var materialTypeName = $("#inputNameMaterialType1");
	var materialTypeNameInfo = $("#nameMaterialTypeInfo1");
	var materialTypeDescription = $("#inputMaterialTypeDescription1");
	
	materialTypeName.blur(validateMaterialTypeName);
	
	//validate name material type
	function validateMaterialTypeName() {
		if($("#inputNameMaterialType1").val() == ""){
			materialTypeName.addClass("error");
			materialTypeNameInfo.text("Tên không hợp lệ.");
			materialTypeNameInfo.addClass("error");
			return false;
		}else {
			materialTypeName.removeClass("error");
			materialTypeNameInfo.text("");
			materialTypeNameInfo.removeClass("error");
			return true;
		}
	}
	// hide popup add warehouse
	$("#btnShowPopupMaterialType").click(function() {
		$("#myModalNorm").modal("hide");
	});
	//if true, will send data of popup material type 
	$("#btnSaveAddMaterialType").click(function(e) {
		if(validateMaterialTypeName()){
			e.preventDefault();
			var materialTypeData = new Object();
			materialTypeData.name = $("#inputNameMaterialType1").val();
			materialTypeData.description = $("#inputMaterialTypeDescription1").val();
			$.ajax({
				type: "POST",
				contentType : "application/json;charset=UTF-8",
				dataType : "json",
				data : JSON.stringify(materialTypeData),
				url: "addDataMaterialType",
				success: function(data) {
					// set null for field
					$("#inputNameMaterialType1").val("");
					$("#inputMaterialTypeDescription1").val("");
					// hile popup add material type
					$("#addMaterialType").modal("hide");
					$('#comboLoaiHang').empty();
					// get all materialType and show in [select]
					$.ajax({
						type : "GET",
						contentType : "application/json;charset=UTF-8",
						dataType : "json",
						url : "getAllMaterialType",
						success : function(data) {
							//add value default for tag [option] in combobox [Loai hang]
							$('#comboLoaiHang').append($('<option>', {
								value : "",
								text : "Chọn loại hàng"
							}));
							// add list material type on combobox [Loại hang]
							$.each(data, function(i, item) {
								$('#comboLoaiHang').append($('<option>', {
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
	$("#btnCloseAddMaterialType1").click(function() {
			$("#myModalNorm").modal("show");
			$("#inputNameMaterialType1").val("");
			$("#inputMaterialTypeDescription1").val("");
	});
});

