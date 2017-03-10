$(document).ready(function(){
	$("#search").validate({
		onfocusout : false,
		rules : {
			'employeeName' : {
				required : false,
				maxlength : 20
			},
			'employeePosition' : {
				required : false,
				maxlength: 50
			},
			'employeeAddress' : {
				required : false,
				maxlength: 100
			},
			'employeeIdCard' : {
				required : false,
				minlength: 0,
				maxlength: 12
			},
			'employeePhone' : {
				required : false,
				minlength: 0,
				maxlength: 11
			},
			'salaryFrom' : {
				required : false,
				minlength: 0,
				maxlength: 12
			},
			'salaryTo' : {
				required : false,
				minlength: 0,
				maxlength: 12
			}

		},
		messages : {
			'employeeName' : {
				maxlength : "Tên nhân viên phải nhỏ hơn 20 ký tự. Vui lòng nhập lại!"
			},
			'employeePosition' : {
				maxlength: "Chức vụ phải nhỏ hơn 50 ký tự."
			},
			'employeeAddress' : {
				maxlength: "địa chỉ phải nhỏ hơn 100 ký tự."
			},
			'employeeIdCard' : {
				maxlength: "CMND nhỏ hơn hoặc bằng 12 ký tự. Vui lòng nhập lại!",
			},
			'employeePhone' : {
				required : "Vui lòng nhập số điện thoại.",
				maxlength: "SĐT nhỏ hơn hoặc bằng 11 ký tự. Vui lòng nhập lại!",
				number: "SĐT phải là số. Vui lòng nhập lại!"
			},
			'salaryFrom' : {
				maxlength: "Lương từ nhỏ hơn hoặc bằng 12 ký tự. Vui lòng nhập lại!",
			},
			'salaryTo' : {
				maxlength: "Lương từ nhỏ hơn hoặc bằng 12 ký tự. Vui lòng nhập lại!",
			}
		}
	});
});