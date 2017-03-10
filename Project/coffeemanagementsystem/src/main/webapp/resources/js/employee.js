$(document).ready(function(){
	var cancelHide = false;	 
	
	//Create variable datatable
	var table = $("#example").DataTable(
			{
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
						"data" : "name"
					},
					{
						"data" : "gender",
						"render": function(data){
							return data==true?"Nam":"Nữ";
						}
					},
					{
						"data" : "phone"
					},
					{
						"data" : "idCard"
					},
					{
						"data" : "birthday",
						"render": function (data) {
					        var date = new Date(data);
					        var month = date.getMonth() + 1;
					        var day= date.getDate();
					        return  (day>=10 ? day : "0" + day)+ "/" +  (month >= 10 ? month : "0" + month)  + "/" + date.getFullYear();
					    }
					},
					{
						"data" : "position"
					},
					{
						"className" : 'details-control',
						"orderable" : false,
						"data" : null,
						"defaultContent" : '<button class="showDetail fa fa-eye" data-toggle="modal" data-target="#showEmployee"></button>'
											+ '<button class="update fa fa-pencil-square-o" data-toggle="modal" data-target="#updateEmployee"></button>'
											+ '<button class="deleteemployee fa fa-trash" data-toggle="modal" data-target="#delEmployeeModal"></button>'
					} ]
			});
	
	
	// reload page
	function reload(){
		$("#employeeName").val(''),
		$("#employeeAddress").val(''),
		$("#employeeIdCard").val(''),
		$("#employeePhone").val(''),
		$("#salaryFrom").val(''),
		$("#salaryTo").val(),
		$("#employeePosition").val(),
		$("#employeeGender").prop('selectedIndex',0),
		$("#employeeWard").prop('selectedIndex',0),
		$("#employeeDistrict").prop('selectedIndex',0),
		$("#employeeCity").prop('selectedIndex',0),
		$("#employeeBirthDay").prop('selectedIndex',0),
		$("#employeeBirthMonth").prop('selectedIndex',0),
		$("#employeeBirthYear").prop('selectedIndex',0),
		$("#startDate").val(),
		$("#endDate").val(),
		table.clear().draw();
	}
	
	//get city on combobox
	$.ajax({
		url : "city/getListCity",
		dataType : "json",
		success : function(data) {
			$('#employeeCity').empty();
			$('#employeeCity').append($('<option>', {
				value : "",
				text : "Không chọn"
			}));
			$.each(data, function(i, item) {
				$('#employeeCity,#updateCitySelect,#citySelect,#showCitySelect').append($('<option>', {
					value : item.id,
					text : item.name
				}));
			});
		}
	});
	
	//get district on combobox
	$("#employeeCity").on("change", function() {
		  if($(this).find(":selected").val()==""){
			  $('#employeeDistrict').empty();
				$('#employeeDistrict').append($('<option>', {
					value : "",
					text : "Không chọn"
				}));
				$('#employeeWard').empty();
				$('#employeeWard').append($('<option>', {
					value : "",
					text : "Không chọn"
				}));
				
		  } else {
			  var data = {
						"id" : $("#employeeCity").find(":selected").val()
					};
			  $.ajax({
					url : "city/getListDistrictById",
					dataType : "json",
					type : "POST",
					contentType : "application/json",
					data : JSON.stringify(data),
					success : function(data) {
						$('#employeeDistrict').empty();
						$('#employeeDistrict').append($('<option>', {
							value : "",
							text : "Không chọn"
						}));
						$.each(data, function(i, item) {
							$('#employeeDistrict').append($('<option>', {
								value : item.id,
								text : item.name
							}));
						});
						$('#employeeWard').empty();
						$('#employeeWard').append($('<option>', {
							value : "",
							text : "Không chọn"
						}));
					}
				});
		  }
		});
	
	//get ward on combobox
	$("#employeeDistrict").on("change", function() {
		  if($(this).find(":selected").val()==""){
			  $('#employeeWard').empty();
				$('#employeeWard').append($('<option>', {
					value : "",
					text : "Không chọn"
				}));
		  } else {
			  var data = {
						"id" : $("#employeeDistrict").find(":selected").val()
					};
			  $.ajax({
					url : "getListWardById",
					dataType : "json",
					type : "POST",
					contentType : "application/json",
					data : JSON.stringify(data),
					success : function(data) {
						$('#employeeWard').empty();
						$('#employeeWard').append($('<option>', {
							value : "",
							text : "Không chọn"
						}));
						$.each(data, function(i, item) {
							$('#employeeWard').append($('<option>', {
								value : item.id,
								text : item.name
							}));
						});
					}
				});
		  }
		});
	
	
	// show, hide search panel
	var flagSearch= false;
	$(".panel-body").hide();
	$(".panel-info").css("height", "2%");
	$(".panel-heading").click(function(){
		if(!flagSearch){
			$(".panel-body").show();
			$(".panel-info").css("height", "50%");
			flagSearch=true;
		} else{
			$(".panel-body").hide();
			$(".panel-info").css("height", "2%");
			flagSearch=false;
		}
	    
	});
	
	// search employee
	$("#search").submit(function(e) {
		e.preventDefault();
		if (!$("#search").valid()) return false;
		if(!($("#startDate").val()==='')&&!($("#endDate").val()==='')){
			if($("#startDate").val()>$("#endDate").val()){
				alert("Ngày bắt đầu lớn hơn ngày kết thúc");
				return false;
			}
		}
		if(!($("#salaryFrom").val()==='')&&!($("#salaryTo").val()==='')){
			if(parseInt($("#salaryFrom").val().replace(/\,/g, '' ))>parseInt($("#salaryTo").val().replace(/\,/g, '' ))){
				alert("Lương bắt đầu lớn hơn lương kết thúc");
				return false;
			}
		}
		waitingDialog.show('Loading data');
		var search = {
			'name' : $("#employeeName").val(),
			'address' : $("#employeeAddress").val(),
			'idCard' : $("#employeeIdCard").val(),
			'phone' : $("#employeePhone").val(),
			'minSalary' : $("#salaryFrom").val().replace(/\,/g,""),
			'maxSalary' : $("#salaryTo").val().replace(/\,/g,""),
			'position' : $("#employeePosition").val(),
			'gender' : $("#employeeGender").find(":selected").val(),
			'ward' : $("#employeeWard").find(":selected").val(),
			'district' : $("#employeeDistrict").find(":selected").val(),
			'city' : $("#employeeCity").find(":selected").val(),
			'birthday' : $("#employeeBirthDay").find(":selected").val(),
			'birthmonth' : $("#employeeBirthMonth").find(":selected").val(),
			'birthyear' : $("#employeeBirthYear").find(":selected").val(),
			'startDate' : $("#startDate").val(),
			'endDate' : $("#endDate").val(),
		}
		$
		.ajax({
			type : "POST",
			contentType : "application/json;charset=UTF-8",
			url : "searchemployee",
			dataType : "json",
			data : JSON
					.stringify(search),
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
	
	//load combobox date, year
	for (i = 1900; i <= 2017; i++) {
		$('#employeeBirthYear').append($('<option>', {
			value : i,
			text : i
		}));
	}
	$('#employeeBirthDay').empty();
	$('#employeeBirthDay').append($('<option>', {
		value : "",
		text : "Không chọn"
	}));
	for (i = 1; i <= 31; i++) {
		$('#employeeBirthDay').append($('<option>', {
			value : i,
			text : i
		}));
	}
	for (i = 1; i <= 12; i++) {
		$('#employeeBirthMonth').append($('<option>', {
			value : i,
			text : i
		}));
	}
	
	$("#employeeBirthMonth").on("change", function() {
		$('#employeeBirthDay').empty();
		$('#employeeBirthDay').append($('<option>', {
			value : "",
			text : "Không chọn"
		}));
		  var month=$(this).find(":selected").val();
		  if(month==""){
			  for (i = 1; i <= 31; i++) {
					$('#employeeBirthDay').append($('<option>', {
						value : i,
						text : i
					}));
				}
		  }else 
		  if(month=="2"){
			  for (i = 1; i <= 29; i++) {
					$('#employeeBirthDay').append($('<option>', {
						value : i,
						text : i
					}));
				}
		  } else 
		  if(month=="1"||month=="3"||month=="5"||month=="7"||month=="8"||month=="10"||month=="12"){
				for (i = 1; i <= 31; i++) {
					$('#employeeBirthDay').append($('<option>', {
						value : i,
						text : i
					}));
				}
		  } else {
				for (i = 1; i <= 30; i++) {
					$('#employeeBirthDay').append($('<option>', {
						value : i,
						text : i
					}));
				}
		  }
		});
	
	// delete employee function
	function deleteEmployee(id) {
		$.ajax({
			url : 'deleteEmployee',
			data : {
				"id" : id,
			},
			type : "GET",
			datatype : 'json',
			contentType : "charset=UTF-8",
			success : function(resp) {
				//reload();
				alert("Xóa nhân viên thành công!");

			},
			error : function(err) {
				alert("Không xóa được!");
			}
		});
	}
	// get id to delete
	$("#example tbody").on('click','.deleteemployee',function() {
				var record = table.row($(this).parents('tr')).data();
				var row = table.row($(this).parents('tr'));
				
				$('#idemtoDelete').unbind().click(function(){
					deleteEmployee(record['id']);
					row.remove().draw();
				});
			});
	
	//update employee
	$("#example").on("click", ".update", function(e){
		var data = table.row($(this).parents("tr")).data();
		var j = {
				'id':data["id"]
		}
		$.ajax({
			url : "getEmployees",
			dataType : "json",
			type : "POST",
			contentType : "application/json",
			data : JSON.stringify(j),
			success : function(rs) {
				$('#updateIdEmployee').val(rs['id']);
				$('#updateNameEmployee').val(rs['name']);
				$('#updateBirthday').val(rs['birthday']);
				$('#updateNumberPhone').val(rs['phone']);
				$('#updateIdCard').val(rs['idCard']);
				$('#updateCitySelect').val(rs['cityId']);
				$.ajax({
					url : "city/getListDistrictById",
					dataType : "json",
					type : "POST",
					contentType : "application/json",
					data : JSON.stringify({"id":rs['cityId']}),
					success : function(data) {
						$.each(data, function(i, item) {
							$('#updateDistrictSelect').append($('<option>', {
								value : item.id,
								text : item.name
							}));
						});
						$('#updateDistrictSelect').val(rs['districtId']);
					}
				});	 

				$.ajax({
					url : "getListWardById",
					dataType : "json",
					type : "POST",
					contentType : "application/json",
					data : JSON.stringify({"id":rs['districtId']}),
					success : function(data) {
						$.each(data, function(i, item) {
							$('#updateWardSelect').append($('<option>', {
								value : item.id,
								text : item.name
							}));
						});
						$('#updateWardSelect').val(rs['wardId']);
					}
				});
				$('#updateAddress').val(rs['address']);
				$('#updateEmployeeStartDate').val(rs['startDate']);
				$('#updateEmployeeEndDate').val(rs['endDate']);
				$('#updateSalary').val(rs['salary']);
				if(rs['gender']){
					$("#updateGenderTrue").prop("checked", true); 
				}
				else {
					$("#updateGenderFalse").prop("checked", true); 
				}
				$('#updatePosition').val(rs['position']);
				$('#updateDescription').val(rs['description']);			
			}
		});
		
		

		
		//get district on combobox when change data city
		$("#updateCitySelect").on("change", function() {
			var data = {
					"id" : $("#updateCitySelect").find(":selected").val()
				};
		  $.ajax({
				url : "city/getListDistrictById",
				dataType : "json",
				type : "POST",
				contentType : "application/json",
				data : JSON.stringify(data),
				success : function(data) {
					$('#updateDistrictSelect').empty();
					$.each(data, function(i, item) {
						$('#updateDistrictSelect').append($('<option>', {
							value : item.id,
							text : item.name
						}));
					});
					$('#updateWardSelect').empty();
					$('#updateWardSelect').append($('<option>', {
						value : "",
						text : "Phường"
					}));
				}
			});
		});
		
		//get ward on combobox when on change
		$("#updateDistrictSelect").on("change", function() {
			 var data = {
						"id" : $("#updateDistrictSelect").find(":selected").val()
					};
			  $.ajax({
					url : "getListWardById",
					dataType : "json",
					type : "POST",
					contentType : "application/json",
					data : JSON.stringify(data),
					success : function(data) {
						$('#updateWardSelect').empty();
						$.each(data, function(i, item) {
							$('#updateWardSelect').append($('<option>', {
								value : item.id,
								text : item.name
							}));
						});
					}
				});
		});
		
		// validate form Employee
		$("#update-employee").validate({
			onfocusout : false,
			rules : {
				'nameEmployee' : {
					required : true,
					maxlength : 50
				},
				'birthday' : {
					required : true	
				},
				'employeeStartDate' : {
					required : true
				},
				'salary' : {
					required : true
				},
				'numberPhone' : {
					required : true,
					minlength: 9,
					maxlength: 11,
					number: true
				},
				'idCard' : {
					required : true,
					minlength: 9,
					maxlength: 12,
					number: true
				},
				'citySelect' : {
					required : true,
				},
				'districtSelect' : {
					required : true,
				},
				'wardSelect' : {
					required : true,
				},
				'address' : {
					required : true,
					maxlength: 100
				},
				'position' : {
					required : true,
					maxlength: 50
				}

			},
			messages : {
				'nameEmployee' : {
					required : "Vui lòng nhập tên nhân viên.",
					maxlength : "Tên nhân viên phải nhỏ hơn 50 ký tự. Vui lòng nhập lại!"
				},
				'birthday' : {
					required : "Vui lòng nhập ngày sinh."
					
				},
				'employeeStartDate' : {
					required : "Vui lòng nhập ngày bắt đầu."
				},
				'salary' : {
					required : "Vui lòng nhập lương."
				},
				'numberPhone' : {
					required : "Vui lòng nhập số điện thoại.",
					minlength: "SĐT lơn hơn hoặc bằng 9 ký tự. Vui lòng nhập lại!",
					maxlength: "SĐT nhỏ hơn hoặc bằng 11 ký tự. Vui lòng nhập lại!",
					number: "SĐT phải là số. Vui lòng nhập lại!"
				},
				'idCard' : {
					required : "Vui lòng nhập CMND.",
					minlength: "CMND lơn hơn hoặc bằng 9 ký tự. Vui lòng nhập lại!",
					maxlength: "CMND nhỏ hơn hoặc bằng 12 ký tự. Vui lòng nhập lại!",
					number: "CMND phải là số. Vui lòng nhập lại!"
				},
				'citySelect' : {
					required : "Chọn thành phố."
				},
				'districtSelect' : {
					required : "Chọn quận."
				},
				'wardSelect' : {
					required : "Chọn phường."
				},
				'address' : {
					required : "Vui lòng nhập địa chỉ.",
					maxlength: "địa chỉ phải nhỏ hơn 30 ký tự. Vui lòng nhập lại!"
				},
				'position' : {
					required : "Vui lòng nhập chức vụ.",
					maxlength: "Chức vụ phải nhỏ hơn 50 ký tự. Vui lòng nhập lại!"
				}
			}
		});
		
		$('#buttonCancelUpdateEmployee').mousedown(function() {
		    cancelHide = true;
		});
		
		$('#buttonCancelUpdateEmployee,.close').mouseup(function() {
		    cancelHide = false;
		    $("#update-employee").validate().resetForm();
		    $("#updateEmployee").modal('hide');
		    resetFormEmployee();
		});
		
		//submit data
		$("#update-employee").submit(function(e){
			e.preventDefault();
			var gender = $("input[name='gender']:checked").val();
			var bol = gender == 1 ? true : false;
			var data = {
					"id" : $('#updateIdEmployee').val(),
					"wardId" : $('#updateWardSelect').val(),
					"districtId" : $('#updateDistrictSeclect').val(),
					"cityId" : $('#updateCitySelect').val(),
					"name" :  $('#updateNameEmployee').val(),
					"address" : $('#updateAddress').val(),
					"idCard" : $('#updateIdCard').val(),	
					"phone"	: $('#updateNumberPhone').val(),
					"birthday" : $('#updateBirthday').val(),
					"startDate"	:$('#updateEmployeeStartDate').val(),
					"endDate" : $('#updateEmployeeEndDate').val(),
					"salary" : $('#updateSalary').val(),
					"position" : $('#updatePosition').val(),
					"gender" : bol,
					"description" : $('#updateDescription').val()
			};
			var checkEndDate = true;
			if(!($("#updateEmployeeStartDate").val()==='')&&!($("#updateEmployeeEndDate").val()==='')){
				if($("#updateEmployeeStartDate").val()>$("#updateEmployeeEndDate").val()){
					document.getElementById("updateErrorEndDate").innerHTML ="Ngày bắt đầu lớn hơn ngày kết thúc";
					checkEndDate = false;
				}
			}
			var birthdays= new Date(Date.parse($("#updateBirthday").val()));
			var today = new Date();
			var checkBirthday = true;
			if(birthdays>today){
				document.getElementById("updateErrorDate").innerHTML = "Bạn nhập không đúng. Vui lòng nhập lại."
				checkBirthday = false;
			}
			
			if ($("#update-employee").valid()) {
				
				if(checkEndDate == true && checkBirthday == true){
					$.ajax({
						url : "updateEmployees",
						type : "POST",
						dataType: "json",
						contentType : "application/json",
						data: JSON.stringify(data),
						success : function(data){
							alert("Sửa thành công");
							$("#updateEmployee").modal('hide');
							reload();
						},
						error : function(data){
							alert("Sửa không thành công");
						}				
					});	
				}
			}
		});
		
	});
	
	//show detail employee
	$("#example").on("click", ".showDetail", function(e){
		var data = table.row($(this).parents("tr")).data();
		var j = {
				'id':data["id"]
		}
		
		$('#buttonCancelShowEmployee').mousedown(function() {
		    cancelHide = true;
		});
		
		$('#buttonCancelShowEmployee,.close').mouseup(function() {
		    cancelHide = false;
		    $("#showEmployee").modal('hide');
		});
		
		$.ajax({
			url : "getEmployees",
			dataType : "json",
			type : "POST",
			contentType : "application/json",
			data : JSON.stringify(j),
			success : function(rs) {
				$('#showNameEmployee').val(rs['name']);
				$('#showBirthday').val(rs['birthday']);
				$('#showNumberPhone').val(rs['phone']);
				$('#showIdCard').val(rs['idCard']);
				$('#showCitySelect').val(rs['cityId']);
				$.ajax({
					url : "city/getListDistrictById",
					dataType : "json",
					type : "POST",
					contentType : "application/json",
					data : JSON.stringify({"id":rs['cityId']}),
					success : function(data) {
						$.each(data, function(i, item) {
							$('#showDistrictSelect').append($('<option>', {
								value : item.id,
								text : item.name
							}));
						});
						$('#showDistrictSelect').val(rs['districtId']);
					}
				});	 
				$.ajax({
					url : "getListWardById",
					dataType : "json",
					type : "POST",
					contentType : "application/json",
					data : JSON.stringify({"id":rs['districtId']}),
					success : function(data) {
						$.each(data, function(i, item) {
							$('#showWardSelect').append($('<option>', {
								value : item.id,
								text : item.name
							}));
						});
						$('#showWardSelect').val(rs['wardId']);
					}
				});
				$('#showAddress').val(rs['address']);
				$('#showEmployeeStartDate').val(rs['startDate']);
				$('#showEmployeeEndDate').val(rs['endDate']);
				$('#showSalary').val(rs['salary']);
				if(rs['status']){
					$("#showGenderTrue").prop("checked", true); 
				}
				else {
					$("#showGenderFalse").prop("checked", true); 
				}
				$('#showPosition').val(rs['position']);
				$('#showDescription').val(rs['description']);			
			}
		});
	});
});