$(document).ready(function(){
	var cancelHide = false;
	
	// reset form employees
	function resetFormEmployee(){
		$("#wardSeclect").prop('selectedIndex',0);
		$("#districtSelect").prop('selectedIndex',0);
		$("#nameEmployee").val('');
		$("#address").val('');
		$("#idCard").val('');
		$("#numberPhone").val('');
		$("#birthday").val('');
		$("#employeeStartDate").val('');
		$("#employeeEndDate").val('');
		$("#salary").val('');
		$("#position").val('');
		$("#gender").prop('checked', true);
		$("#description").val('');
		$("#errorDate").hide();
		$("#errorEndDate").hide();
		$("#addEmployee1").validate().resetForm();
	}
	
	// start load popup homeAddEmployee 
	$("#addformEmployee").load("homeAddEmployees", function(){
		$('#buttonCancelAddEmployee').mousedown(function() {
		    cancelHide = true;
		});
		$('#buttonCancelAddEmployee').mouseup(function() {
		    cancelHide = false;
		    resetFormEmployee();
		    $("#addEmployee").modal('hide');
		});
		// focus on first field of table add employee
		$(".addformEmployee").click(function() {
			 $('#addEmployee').on('shown.bs.modal', function () {
			     $('#nameEmployee').focus();
			 });
		});		
		
			
		// validate form Employee
		$("#addEmployee1").validate({
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
		
		// display error when mouse blur
		$(".validate").blur(function(){
			if (!cancelHide) {
				if(!$(this).valid()){
		             return false;
		         }
		    }         
	     });	
		
		//get city on combobox
		$.ajax({
			url : "city/getListCity",
			dataType : "json",
			success : function(data) {
				$('#citySelect').empty();
				$('#citySelect').append($('<option>', {
					value : "",
					text : "thành phố"
				}));
				$.each(data, function(i, item) {
					$('#citySelect').append($('<option>', {
						value : item.id,
						text : item.name
					}));
				});
			}
		});
		
		// get a list of the district of the city when the city changed
		$("#citySelect").on("change", function() {
			  if($("#citySelect").find(":selected").val()==""){
				  $('#districtSelect').empty();
					
					$('#districtSelect').append($('<option>', {
						value : "",
						text : "Quận"
					}));
					
					$('#wardSelect').empty();
					
					$('#wardSelect').append($('<option>', {
						value : "",
						text : "Phường"
					}));
					
			  } else {
				  var data = {
							"id" : $("#citySelect").find(":selected").val()
						};
				  $.ajax({
						url : "city/getListDistrictById",
						dataType : "json",
						type : "POST",
						contentType : "application/json",
						data : JSON.stringify(data),
						success : function(data) {
							
							$.each(data, function(i, item) {
								$('#districtSelect').append($('<option>', {
									value : item.id,
									text : item.name
								}));
							});
												
						}
					});
			  }
			});
		
		// get a list of the ward of the district when the district changed
		$("#districtSelect").on("change", function() {
			  if($("#districtSelect").find(":selected").val()==""){
				  $('#wardSelect').empty();
					
					$('#wardSelect').append($('<option>', {
						value : "",
						text : "Phường"
					}));
			  } else {
				  var data = {
							"id" : $("#districtSelect").find(":selected").val()
						};
				  $.ajax({
						url : "getListWardById",
						dataType : "json",
						type : "POST",
						contentType : "application/json",
						data : JSON.stringify(data),
						success : function(data) {
							
							$.each(data, function(i, item) {
								$('#wardSelect').append($('<option>', {
									value : item.id,
									text : item.name
								}));
							});
						}
					});
			  }
			});
		
		// add employees
		$("#addEmployee1").submit(function(e){
			e.preventDefault();
			
			var data = {
					"wardId" : $('#wardSeclect').val(),
					"name" :  $('#nameEmployee').val(),
					"address" : $('#address').val(),
					"idCard" : $('#idCard').val(),	
					"phone"	: $('#numberPhone').val(),
					"birthday" : $('#birthday').val(),
					"startDate"	:$('#employeeStartDate').val(),
					"endDate" : $('#employeeEndDate').val(),
					"salary" : $('#salary').val(),
					"position" : $('#position').val(),
					"gender" : $('#gender').is(':checked'),
					"description" : $('#description').val()
			};
			var checkEndDate = true;
			if(!($("#employeeStartDate").val()==='')&&!($("#employeeEndDate").val()==='')){
				if($("#employeeStartDate").val()>$("#employeeEndDate").val()){
					document.getElementById("errorEndDate").innerHTML ="Ngày bắt đầu lớn hơn ngày kết thúc";
					checkEndDate = false;
				}
			}
			var birthdays= new Date(Date.parse($("#birthday").val()));
			var today = new Date();
			var checkBirthday = true;
			if(birthdays>today){
				document.getElementById("errorDate").innerHTML = "Bạn nhập không đúng. Vui lòng nhập lại."
				checkBirthday = false;
			}
			
			if ($("#addEmployee1").valid()) {
				
				if(checkEndDate == true && checkBirthday == true){
					$.ajax({
						url : "addEmployees",
						type : "POST",
						dataType: "json",
						contentType : "application/json",
						data: JSON.stringify(data),
						success : function(data){
							alert("Thêm thành công");
							resetFormEmployee();
							$("#addEmployee").modal('hide');
							reload();
						},
						error : function(data){
							alert("Thêm không thành công");
							resetFormEmployee();
						}				
					});	
				}
			}
		}); 
	});// end load homeAddEmployee page
	
	
});