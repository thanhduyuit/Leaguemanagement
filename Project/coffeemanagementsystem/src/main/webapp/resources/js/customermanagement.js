/*
 * Store list customer for search
 */
var listCustomer = {};

/*
 * Request check phone Customer exist,
 * URL: customer/checkphone,
 * Response: {exist: boolean}
 */
function checkPhoneExist() {
	var id = $('#id').val();
	var isExist = false;
	var data = {
		"id": id,
		"phoneNumber": $("#create-modal input[id='phoneNumbertxt']").val()
	};
	$.ajax({
		contentType: "application/json;charset=utf-8",
		url: "customer/checkphone",
		type: "POST",
		dataType: 'json',
		data: JSON.stringify(data),
		async: false,
		success: function(data) {
			if (data.exist) {
				isExist = false;
			} else {
				isExist = true;
			}
		},
		error: function(e) {
			console.log(e);
		}
	});
	return isExist;
}

/*
 * Request Check email Customer,
 * URL: customer/checkmail,
 * Response: {success: boolean}
 */
function checkEmailExist() {
	var id = $('#id').val();
	var email = $("#create-modal input[id='emailtxt']").val();
	var isExist = false;
	var data = {
		"id": id,
		"email": $("#create-modal input[id='emailtxt']").val(),
	};
	if(email !== ''){
		$.ajax({
			contentType: "application/json;charset=utf-8",
			url: "customer/checkmail",
			type: "POST",
			dataType: 'json',
			data: JSON.stringify(data),
			async: false,
			success: function(data) {
				if (data.exist) {
					isExist = false;
				} else {
					isExist = true;
				}
			},
			error: function(e) {
				console.log(e);
			}
		});
	} else {
		isExist = true;
	}
	return isExist;
}
/*
 * Request Search Customer,
 * URL: customer/search,
 * Response: listCustomer
 */
function search() {
	$('#loadingmessage').show();
	var data = {
		"name": $("#name").val(),
		"phoneNumber": $("#phone").val(),
		"gender": $("#gender").val(),
		"point": $("#point").val()
	};
	$.ajax({
		type: "POST",
		contentType: "application/json; charset=utf-8",
		url: "customer/search",
		data: JSON.stringify(data),
		dataType: 'json',
		success: function(data) {
			listCustomer = data;
			createTable();
			$('#loadingmessage').hide();
		},
		error: function(e) {
			console.log("ERROR: ", e);
		},
		done: function(e) {
			console.log("DONE");
		}
	});
}
/*
 * Request Create Customer,
 * URL: customer/add,
 * Response: {success: boolean}
 */
function createCustomer() {
	var data = {
		"name": $("#create-modal input[id='nameCustomertxt']").val(),
		"phoneNumber": $("#create-modal input[id='phoneNumbertxt']").val(),
		"email": $("#create-modal input[id='emailtxt']").val(),
		"birthday": $("#create-modal input[id='birthday']").val(),
		"gender": $("#create-modal input[id='gender']:checked").val()
	};
	$.ajax({
		contentType: "application/json;charset=utf-8",
		url: "customer/add",
		type: "POST",
		dataType: 'json',
		data: JSON.stringify(data),
		success: function(data) {
			if (data.success) {
				$("#create-modal").modal('hide');
				$('#create-modal input').val("");
				$('#success-notification').fadeIn('slow');
				$('#success-notification').text("Tài khoản khách hàng đã được thêm thành công");
				setTimeout(function() {
					$('#success-notification').fadeOut('slow');
				}, 3000);
			} else {
				$('#error-notification').fadeIn('slow');
				$('#error-notification').text("Thêm khách hàng không thành công, vui lòng thử lại");
				setTimeout(function() {
					$('#error-notification').fadeOut('slow');
				}, 3000);
			}
		},
		error: function(e) {
			console.log(e);
		}
	});
}

/*
 * Request Update Customer,
 * URL: customer/update,
 * Response: {success: boolean}
 */
function updateCustomer(customer) {
	$('#loadingmessage').show();
	$.ajax({
		type: "POST",
		contentType: "application/json; charset=utf-8",
		url: "customer/update",
		data: JSON.stringify(customer),
		dataType: 'json',
		success: function(data) {
			$('#loadingmessage').hide();
			if (data.success) {
				$('#success-notification').fadeIn('slow');
				$('#success-notification').text("Thông tin khách hàng đã được cập nhật");
				setTimeout(function() {
					$('#success-notification').fadeOut('slow');
				}, 3000);
				onHideModal();
			} else {
				$('#error-notification').fadeIn('slow');
				$('#error-notification').text("Cập nhật không thành công, vui lòng thử lại");
				setTimeout(function() {
					$('#error-notification').fadeOut('slow');
				}, 3000);
			}
		},
		error: function(e) {
			console.log("ERROR: ", e);
		},
		done: function(e) {
			console.log("DONE");
		}
	});
}

/*
 * Request Delete Customer,
 * URL: customer/delete,
 * Response: {success: boolean}
 */
function deleteCustomer(customer) {
	$('#loadingmessage').show();
	$.ajax({
		type: "POST",
		contentType: "application/json; charset=utf-8",
		url: "customer/delete",
		data: JSON.stringify(customer),
		dataType: 'json',
		success: function(data) {
			$('#loadingmessage').hide();
			if (data.success) {
				for (var i = 0; i < listCustomer.length; i++) {
					if (listCustomer[i].id == customer.id)
						listCustomer.splice(i, 1);
				}
				$('#success-notification').fadeIn('slow');
				$('#success-notification').text("Tài khoản khách hàng đã được xóa");
				setTimeout(function() {
					$('#success-notification').fadeOut('slow');
				}, 3000);
				onHideModal();
			} else {
				$('#error-notification').fadeIn('slow');
				$('#error-notification').text("Xóa khách hàng không thành công, vui lòng thử lại sau");
				setTimeout(function() {
					$('#error-notification').fadeOut('slow');
				}, 3000);
			}
		},
		error: function(e) {
			console.log("ERROR: ", e);
		},
		done: function(e) {
			console.log("DONE");
		}
	});
}

/* show modal view customer information */
function viewCus(customer) {
	$('#view-modal').on('show.bs.modal', function(e) {
		$(e.currentTarget).find('input[id="id"]').val(customer.id);
		$(e.currentTarget).find('input[id="name"]').val(customer.name);
		$(e.currentTarget).find('input[id="phone"]').val(customer.phoneNumber);
		$(e.currentTarget).find('input[id="email"]').val(customer.email);
		$(e.currentTarget).find('input[id="point"]').val(customer.point);
		$(e.currentTarget).find('input[id="birth"]').val(customer.birthday);
		if (customer.gender == 1) {
			$(e.currentTarget).find('input[value="1"]').attr("checked", true);
			$(e.currentTarget).find('input[value="0"]').attr("checked", false);
		} else {
			$(e.currentTarget).find('input[value="0"]').attr("checked", true);
			$(e.currentTarget).find('input[value="1"]').attr("checked", false);
		}
	})
}

/* Show modal edit customer information */
function editCus(customer) {
	$('#edit-modal').on('show.bs.modal', function(e) {
		$(e.currentTarget).find('input[id="id"]').val(customer.id);
		$(e.currentTarget).find('input[id="name"]').val(customer.name);
		$(e.currentTarget).find('input[id="phone"]').val(customer.phoneNumber);
		$(e.currentTarget).find('input[id="email"]').val(customer.email);
		$(e.currentTarget).find('input[id="point"]').val(customer.point);
		$(e.currentTarget).find('input[id="birth"]').val(customer.birthday);
		if (customer.gender == 1) {
			$(e.currentTarget).find('input[value="1"]').attr("checked", true);
			$(e.currentTarget).find('input[value="0"]').attr("checked", false);
		} else {
			$(e.currentTarget).find('input[value="0"]').attr("checked", true);
			$(e.currentTarget).find('input[value="1"]').attr("checked", false);
		}
		
		/* Set max day for birthday */
		var curDate = new Date();
		var today = curDate.getFullYear() + "-" + curDate.getMonth()+1 + "-" + curDate.getDate();
		$(e.currentTarget).find('input[id="birth"]').attr("max", today);
	});
}

/* On submit Save customer */
function submitSave(customer) {
	customer.name = $('#edit-modal #name').val();
	customer.phoneNumber = $('#edit-modal #phone').val();
	customer.point = $('#edit-modal #point').val();
	customer.birthday = $('#edit-modal #birth').val();
	customer.gender = $("#edit-modal input[id='gender']:checked").val();

	updateCustomer(customer);
}

/* On submit delete customer */
function submitDel(customer) {
	deleteCustomer(customer);
}

/* On hide modal */
function onHideModal() {
	$(this).off('hide.bs.modal');
	createTable();
}
/* Set max day for birthday */
function selectDate(e){
	var curDate = new Date();
	var today = curDate.getFullYear() + "-" + curDate.getMonth()+1 + "-" + curDate.getDate();
	$(e.currentTarget).find('input[id="birthday"]').attr("max", today);
	console.log(today);
}
$(document).ready(function() {
	window.createTable = function() {
		var table = $('#table').DataTable();
		table.destroy();
		table = $('#table').DataTable({
			"searching": false,
			"searchable": false,
			"scrollX": false,
			"scrolly": false,
			"scrollCollapse": true,
			"paging": true,
			"lengthChange": false,
			"paginate": false,
			"info": false,
			"sDom": 'lfrtip',
			"aaData": listCustomer,
			"language": {
				"emptyTable": "Không tìm thấy khách hàng"
			},
			columns: [ {
				"data": "id",
				"width": "5%",
				"defaultContent": ""
			}, {
				"data": "name",
				"width": "30%",
				"defaultContent": ""
			}, {
				"data": "phoneNumber",
				"width": "20%",
				"defaultContent": ""
			}, {
				"data": "point",
				"width": "20%",
				"defaultContent": ""
			}, {
				"data": "action",
				"width": "20%",
				"orderable": false,
				"defaultContent" : "<button class='fa fa-eye viewCus' data-toggle='modal' data-target='#view-modal'></button>"
					+ "<button class='fa fa-pencil-square-o editCus' data-toggle='modal' data-target='#edit-modal'></button>"
					+ "<button class='fa fa-trash-o delCus' data-toggle='modal' data-target='#delete-modal'></button>"
			} ],
		});
	}

	/* On button Search click */
	$('#Submitsearch').click(function(e) {
		search();
	});
	
	/* Put cursor at input: nameCustomertxt */
	$('#create-modal').on('shown.bs.modal', function(e) {
		
		$('#nameCustomertxt').focus();
		selectDate(e);
	});
	
	/*
	 * On hide create customer modal
	 */
	$('#create-modal').on('hide.bs.modal', function () {
		$("#createCustomerForm").validate().resetForm();
		$(':input','#createCustomerForm')
		 .not(':button, :submit, :reset, :hidden')
		 .val('');
	});

	/*
	 * On action view and delete click
	 */
	$("#table").on("click", ".viewCus", function(){
		var data = $('#table').DataTable().row($(this).parents("tr")).data();
		viewCus(data);
	});
	$("#table").on("click", ".delCus", function(){
		var data = $('#table').DataTable().row($(this).parents("tr")).data();
		$('#btnOk').click(function(e) {
			submitDel(data);
		});
	});
	
	/*
	 * Create custom rule validation
	 */
	$.validator.addMethod("phoneExist", function(value, element) {
		return checkPhoneExist();
	}, "Số điện thoại đã tồn tại");
	$.validator.addMethod("emailExist", function(value, element) {
		return checkEmailExist();
	}, "Email đã tồn tại");
	
	/*
	 * Define validate for create customer form
	 */
	$("#createCustomerForm").validate({
		onfocusout: false,
		rules: {
			'nameCustomertxt': {
				required: true
			},
			'phoneNumbertxt': {
				required: true,
				number: true,
				phoneExist: true,
				minlength: 10,
				maxlength: 11,
			},
			'emailtxt' : {
				required: false,
				email: true,
				emailExist: true
			}
		},
		messages: {
			'nameCustomertxt': {
				required: "Vui lòng nhập tên khách hàng."
			},
			'phoneNumbertxt': {
				required: "Vui lòng nhập số điện thoại.",
				number: "Số điện thoại phải đúng định dạng vd: 0976204321",
				minlength: "Số điện thoại phải có độ dài 10-11 ký tự",
				maxlength: "Số điện thoại phải có độ dài 10-11 ký tự"
			},
			'emailtxt': {
				email: "Email phải đúng định dạng vd: abc@gmail.com"
			}
		},
		submitHandler: function() { 	// On form submit and pass all validate
			createCustomer(); 
		}
	});
	
	/*
	 * Show error message
	 */
	$(".validate").blur(function() {
		if (!$(this).valid()) {
			return false;
		}
	});

	/*
	 * On action update click
	 */
	$("#table").on("click", ".editCus", function(){
		var data = $('#table').DataTable().row($(this).parents("tr")).data();
		editCus(data);
	});
});
