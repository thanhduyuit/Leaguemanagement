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
						"defaultContent" : '<button class="update fa fa-pencil-square-o" data-toggle="modal" data-target="#updateEmployee"></button>'
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
				value : "rong",
				text : "Không chọn"
			}));
			$.each(data, function(i, item) {
				$('#employeeCity').append($('<option>', {
					value : item.id,
					text : item.name
				}));
			});
		}
	});
	
	//get district on combobox
	$("#employeeCity").on("change", function() {
		  if($(this).find(":selected").val()=="rong"){
			  $('#employeeDistrict').empty();
				$('#employeeDistrict').append($('<option>', {
					value : "rong",
					text : "Không chọn"
				}));
				$('#employeeWard').empty();
				$('#employeeWard').append($('<option>', {
					value : "rong",
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
							value : "rong",
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
							value : "rong",
							text : "Không chọn"
						}));
					}
				});
		  }
		});
	
	//get ward on combobox
	$("#employeeDistrict").on("change", function() {
		  if($(this).find(":selected").val()=="rong"){
			  $('#employeeWard').empty();
				$('#employeeWard').append($('<option>', {
					value : "rong",
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
							value : "rong",
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
		waitingDialog.show('Loading data');
		var search = {
			'name' : $("#employeeName").val(),
			'address' : $("#employeeAddress").val(),
			'idCard' : $("#employeeIdCard").val(),
			'phone' : $("#employeePhone").val(),
			'minSalary' : $("#salaryFrom").val(),
			'maxSalary' : $("#salaryTo").val(),
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
	for (i = 1; i <= 12; i++) {
		$('#employeeBirthMonth').append($('<option>', {
			value : i,
			text : i
		}));
	}
	$("#employeeBirthMonth").on("change", function() {
		$('#employeeBirthDay').empty();
		$('#employeeBirthDay').append($('<option>', {
			value : "rong",
			text : "Không chọn"
		}));
		  var month=$(this).find(":selected").val();
		  if(month=="rong"){
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
	}
	
	// start load homeAddEmployee page
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
					maxlength : 20
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
					maxlength : "Tên nhân viên phải nhỏ hơn 20 ký tự. Vui lòng nhập lại!"
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
				'address' : {
					required : "Vui lòng nhập địa chỉ.",
					maxlength: "địa chỉ phải nhỏ hơn 100 ký tự. Vui lòng nhập lại!"
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
		
		// get a list of the district
		$.ajax({
			url : "getListDistrict",
			dataType : "json",
			success : function(data){
				$("#districtSelect").empty();
				 $.each(data, function(){
				 	$("#districtSelect").append('<option value="'+ this.id +'">'+ this.name +'</option>');
				 });
				// get a list of the ward of the district
				 $.ajax({
				    	url : "searchWardByDistrictId",
				    	type: 'POST',
				        data: {
				        	id : $("#districtSelect").val()
				        },	            	
				        dataType : "json",
				        success : function(data){
							$("#wardSelect").empty();
							 $.each(data, function(){
							 	$("#wardSelect").append('<option value="'+ this.id +'">'+ this.name +'</option>');
							 });
						}
				 });		
			}
		});
		
		// get a list of the ward of the district when the district changed
		$("#districtSelect").change(function(){
	        $.ajax({
	        	url : "searchWardByDistrictId",
	        	type: 'POST',
	            data: {
	            	id : $('#districtSelect').val()
	            },	            	
	            dataType : "json",
	            success : function(data){
					$("#wardSelect").empty();
					 $.each(data, function(){
					 	$("#wardSelect").append('<option value="'+ this.id +'">'+ this.name +'</option>');
					 });
				}
	        });
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
			if ($("#addEmployee1").valid()) {
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
		}); 
	});// end load homeAddEmployee page
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
				reload();

			},
			error : function(err) {
				alert("Không xóa được!");
			}
		});
	}
	// get id to delete
	$("#example tbody").on(
			'click',
			'.deleteemployee',
			function() {
				var record = table.row($(this).parents('tr')).data();
				deleteEmployee(record['id']);
			});
});