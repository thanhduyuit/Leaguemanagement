var listCustomer = {};
var posEdit;
var posDel;
updateButton();

/* Add button to item in table */
function updateButton() {
	if (listCustomer.length != 0) {
		for (var i = 0; i < listCustomer.length; i++) {
			var input = "<button onclick='viewCus(" + i + ")' class='fa fa-eye' data-toggle='modal' data-target='#view-modal'></button>"
					+ "<button onclick='editCus(" + i + ")' class='fa fa-pencil-square-o' data-toggle='modal' data-target='#edit-modal'></button>"
					+ "<button onclick='delCus(" + i + ")' class='fa fa-trash-o' data-toggle='modal' data-target='#delete-modal'></button>";

			listCustomer[i].action = input;
		}
	}
}

/*
 * Request Search Customer,
 * URL: customer/search,
 * Response: listCustomer
 */
function search() {
	$('#loadingmessage').show();
	var data = {
		"name" : $("#name").val(),
		"phoneNumber" : $("#phone").val(),
		"gender" : $("#gender").val(),
		"point" : $("#point").val()
	};
	$.ajax({
		type : "POST",
		contentType : "application/json; charset=utf-8",
		url : "customer/search",
		data : JSON.stringify(data),
		dataType : 'json',
		success : function(data) {
			listCustomer = data;
			updateButton();
			createTable();
			$('#loadingmessage').hide();
		},
		error : function(e) {
			console.log("ERROR: ", e);
		},
		done : function(e) {
			console.log("DONE");
		}
	});

}
/*
 * Request Create Customer,
 * URL: customer/add,
 * Response: {success: boolean}
 */
function checkPhone() {
	var data = {
			"phoneNumber" : $("#create-modal input[id='phoneNumbertxt']").val(),
		};
	$.ajax({
		contentType : "application/json;charset=utf-8",
		url : "customer/checkphone",
		type : "POST",
		dataType : 'json',
		data : JSON.stringify(data),
		success : function(data) {
			if (data.exist) {
				$("#checkphone").text("SDT đă tồn tại trong database");
			}
		},
		error : function(e) {
			console.log(e);
		}
	});
}
/*
 * Request Create Customer,
 * URL: customer/add,
 * Response: {success: boolean}
 */
function createCustomer() {
	if (!validPhone() ) {
		$("#checkphone").text("SDT phải đúng định dạng vd: 0976204321");
		return;
	}
	if ($("#nameCustomertxt").length === 0) {
		$("#checkname").text("Bạn phải nhập tên tài khoản");
		return;
	}
	var data = {
		"name" : $("#create-modal input[id='nameCustomertxt']").val(),
		"phoneNumber" : $("#create-modal input[id='phoneNumbertxt']").val(),
		"email" : $("#create-modal input[id='emailtxt']").val(),
		"birthday" : $("#create-modal input[id='birthday']").val(),
		"gender" : $("#create-modal input[id='gender']:checked").val()
	};
	$.ajax({
		contentType : "application/json;charset=utf-8",
		url : "customer/add",
		type : "POST",
		dataType : 'json',
		data : JSON.stringify(data),
		success : function(data) {
			if (data.success) {
				$("#create-modal").modal('hide');
				$('#create-modal input').val("");
				$('#success-notification').fadeIn('slow');
				$('#success-notification').text("Tài khoản khách hàng đã được thêm thành công");
				setTimeout(function() {
					$('#success-notification').fadeOut('slow');
				}, 3000);
			} else {
				messageDatabase();
			}
		},
		error : function(e) {
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
	delete customer["action"];
	$.ajax({
		type : "POST",
		contentType : "application/json; charset=utf-8",
		url : "customer/update",
		data : JSON.stringify(customer),
		dataType : 'json',
		success : function(data) {
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
		error : function(e) {
			console.log("ERROR: ", e);
		},
		done : function(e) {
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
	delete customer["action"];
	$.ajax({
		type : "POST",
		contentType : "application/json; charset=utf-8",
		url : "customer/delete",
		data : JSON.stringify(customer),
		dataType : 'json',
		success : function(data) {
			$('#loadingmessage').show();
			if (data.success) {
				listCustomer.splice(posDel, 1);
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
		error : function(e) {
			console.log("ERROR: ", e);
		},
		done : function(e) {
			console.log("DONE");
		}
	});
}

/* show modal view customer information */
function viewCus(pos) {
	$('#view-modal').on(
			'show.bs.modal',
			function(e) {
				$(e.currentTarget).find('input[id="id"]').val(listCustomer[pos].id);
				$(e.currentTarget).find('input[id="name"]').val(listCustomer[pos].name);
				$(e.currentTarget).find('input[id="phone"]').val(listCustomer[pos].phoneNumber);
				$(e.currentTarget).find('input[id="email"]').val(listCustomer[pos].email);
				$(e.currentTarget).find('input[id="point"]').val(listCustomer[pos].point);
				$(e.currentTarget).find('input[id="birth"]').val(listCustomer[pos].birthday);
				if (listCustomer[pos].gender == 1) {
					$(e.currentTarget).find('input[value="1"]').attr("checked", true);
					$(e.currentTarget).find('input[value="0"]').attr("checked", false);
				} else {
					$(e.currentTarget).find('input[value="0"]').attr("checked", true);
					$(e.currentTarget).find('input[value="1"]').attr("checked", false);
				}
			})
}

/* Show modal edit customer information */
function editCus(pos) {
	posEdit = pos;
	$('#edit-modal').on('show.bs.modal', function(e) {
		$(e.currentTarget).find('input[id="id"]').val(listCustomer[pos].id);
		$(e.currentTarget).find('input[id="name"]').val(listCustomer[pos].name);
		$(e.currentTarget).find('input[id="phone"]').val(listCustomer[pos].phoneNumber);
		$(e.currentTarget).find('input[id="email"]').val(listCustomer[pos].email);
		$(e.currentTarget).find('input[id="point"]').val(listCustomer[pos].point);
		$(e.currentTarget).find('input[id="birth"]').val(listCustomer[pos].birthday);
		if (listCustomer[pos].gender == 1) {
			$(e.currentTarget).find('input[value="1"]').attr("checked", true);
			$(e.currentTarget).find('input[value="0"]').attr("checked", false);
		} else {
			$(e.currentTarget).find('input[value="0"]').attr("checked", true);
			$(e.currentTarget).find('input[value="1"]').attr("checked", false);
		}

		$("input[type='radio']").click(function() {
			if ($(this).val() == 1) {
				$(e.currentTarget).find('input[value="0"]').attr("checked", false);
			} else {
				$(e.currentTarget).find('input[value="1"]').attr("checked", false);
			}
		});
	});
}

/* Show modal delete */
function delCus(pos) {
	posDel = pos;
}

/* On submit Save customer */
function submitSave() {
	listCustomer[posEdit].name = $('#edit-modal #name').val();
	listCustomer[posEdit].phoneNumber = $('#edit-modal #phone').val();
	listCustomer[posEdit].point = $('#edit-modal #point').val();
	listCustomer[posEdit].birthday = $('#edit-modal #birth').val();
	listCustomer[posEdit].gender = $("#edit-modal input[id='gender']:checked").val();

	updateCustomer(listCustomer[posEdit]);

}

/* On submit delete customer */
function submitDel() {
	deleteCustomer(listCustomer[posDel]);
}

/* On hide modal */
function onHideModal() {
	$(this).off('hide.bs.modal');
	updateButton();
	createTable();
}

/* clear all message on create-modal */
function clearMessage() {
	$('#create-modal input').val("");
	$("#checkname").text("");
	$("#checkphone").text("");
	$("#checkemail").text("");
}

$(document).ready(function() {
	window.createTable = function() {
		var table = $('#table').DataTable();
		table.destroy();
		table = $('#table').DataTable({
			"searching" : false,
			"searchable" : false,
			"scrollX" : false,
			"scrolly" : false,
			"scrollCollapse" : true,
			"paging" : true,
			"lengthChange" : false,
			"paginate" : false,
			"info" : false,
			"sDom" : 'lfrtip',
			"aaData" : listCustomer,
			"language" : {
				"emptyTable" : "No Customer Found"
			},
			columns : [ {
				"data" : "id",
				"width" : "5%",
				"defaultContent" : ""
			}, {
				"data" : "name",
				"width" : "30%",
				"defaultContent" : ""
			}, {
				"data" : "phoneNumber",
				"width" : "20%",
				"defaultContent" : ""
			}, {
				"data" : "point",
				"width" : "20%",
				"defaultContent" : ""
			}, {
				"data" : "action",
				"width" : "20%",
				"orderable" : false,
				"defaultContent" : ""
			} ],
		});
	}

	/* Update data in dataTable */
	window.destroyTable = function() {
		var table = $('#table').DataTable();
		table.destroy();
	};

	/* On button Search click */
	$('#Submitsearch').click(function(e) {
		search();
	});

	/* On "Tao" Button click */
	$('#create').click(function(e) {
		createCustomer();
		clearMessage();
	});
	
	/* On "Huy" button click */
	$('#cancel').click(function(e) {
		clearMessage();
	});
	
	/* Put cursor at input: nameCustomertxt */
	$('#create-modal').on('shown.bs.modal', function() {
		$('#nameCustomertxt').focus();
	})

});

/* check name when user input value of customer's name */
$('#nameCustomertxt').blur(function() {
	var name = $("#nameCustomertxt").val();
	$("#checkname").text("");
	if (name == "") {
		$("#checkname").text("bạn phải nhập tên tài khoản");
	}
});

/* check phone number when user input value of phone */
$('#phoneNumbertxt').blur(function() {
	var phone = $("#phoneNumbertxt").val();
	$("#checkphone").text("");
	if (phone == "") {
		$("#checkphone").text("bạn phải nhập vào SDT");
	} else {
		validPhone();
	}
});
/* match format phone number */
function validPhone() {
	var reg_phone = /^[0-9]{10,11}$/g;
	var phone = $("#phoneNumbertxt").val();
	$("#checkphone").text("");
	var b = reg_phone.test(phone);
	console.log("validate phone");
	if (b === false) {
		console.log("format false");
		$("#checkphone").text("SDT phải đúng định dạng vd: 0976204321");
		return false;
	} else {
		checkPhone();
	}
	//return true;
}
/* check email when user input value of email */
$('#emailtxt').blur(function() {
	$("#checkemail").text("");
	validEmail();
});
/* match format email */
function validEmail() {
	var regEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
	var email = $("#emailtxt").val();
	var b = regEmail.test(email);
	console.log("validate email");
	/* email allow null */
	if (email == "") {
		$("#checkemail").text("");
		return true;
	} else {
		if (b === false) {
			console.log("format false");
			$("#checkemail").text("Email phải đúng định dạng vd: lanphuong@gmail.com");
			return false;
		}
	}
	$("#checkemail").text("");
	return true;
}
/* show message when duplicate phone number in database */
function messageDatabase() {
	$("#checkphone").text("SDT đã tồn tại trong hệ thống, bạn vui lòng kiểm tra lại SDT");
}
