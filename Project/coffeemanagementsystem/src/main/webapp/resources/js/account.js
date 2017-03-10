function resetAccountfield() { // Reset lại các o textbox ở popup add-account
	$('#hovaten').val("");
	$('#sodienthoai').val("");
	$('#ngaysinh').val("");
	$('#a').val("");
	$('#sonha').val("");
	;
	$('#City').empty();
	$('#Ward').empty();
	$('#District').empty();
	$('#tentaikhoan').val("");
	$('#email').val("");
	$('#taikhoanchu').val("");
	$('#storename').val("");
	$('#storedis').val("");

}
function showpopupaddaccount() {
	resetAccountfield();
	$('#accountModal').modal('show');
	$.ajax({
		url : "city/getListCity",
		dataType : "json",
		success : function(data) {
			$('#City').empty();
			$('#City').append($('<option>', {
				value : "rong",
				text : "Không chọn"
			}));
			$.each(data, function(i, item) {
				$('#City').append($('<option>', {
					value : item.id,
					text : item.name
				}));
			});
		}
	});
}
function loadstore(){
	var data = {
			"accountName" : $("#taikhoanchu").val()
		};
	$.ajax({
		url : "getListStoreById",
		dataType : "json",
		type : "POST",
		contentType : "application/json",
		data : JSON.stringify(data),
		success : function(data) {
			$("#tablestore tbody").empty();
			var a = $('#liststore').html();
				
				$.each(data, function(i, item) {
					if(item.name === ""){
						alert('a');
					}
					else{
						a = a
						+ '<tr><td>'
						+ item.name
						+ '</td><td>'
						+ item.Discription
						+ '</td><td><i class="btdelete glyphicon glyphicon-trash"></i></td></tr>';
					}
					
				});
			$('#liststore').html(a);
		},
	error : function(data){
		alert("abc");
	}
	});
}

// Xử lí khi bấm button hủy ở popup-addStore
$("#btnStorehuy").click(function(e) {

});

var liststore = [];

// Check validate for all input
$(document)
		.ready(
				function() {

					// CÁC BIẾN LƯU GIÁ TRỊ CHO PHÉP

					var name_pattern = new RegExp(
							/[^a-zA-Z0-9\-\+\ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ ]/);
					var tentaikhoan_pattern = new RegExp(/[^a-zA-Z0-9\.]/);
					var diachi_pattern = new RegExp(
							/[^a-zA-Z0-9\/\-\+\ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ ]/);
					var email_pattern = new RegExp(
							/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

					// HỌ VÀ TÊN
					var name = $("#hovaten");
					var name_error = $("#name_error");
					name.blur(validateName);

					// Hàm kiểm tra họ tên
					function validateName() {
						if (name.val() == "") {
							name.addClass("error");
							name_error.text("Không để trống.");
							name_error.addClass("error");
							return false;
						}
						if (name_pattern.test(name.val())) {
							name.addClass("error");
							name_error.text("Không chứa kí tự đặt biệ.");
							name_error.addClass("error");
							return false;
						}
						if ((name.val().length > 50) || (name.val().length < 8)) {
							name.addClass("error");
							name_error.text("Tên phải từ 8-50 kí tự.");
							name_error.addClass("error");
							return false;
						}

						else {
							name.removeClass("error");
							name_error.text("");
							name_error.removeClass("error");
							return true;
						}
					}

					// SỐ ĐIỆN THOẠI
					var phone = $("#sodienthoai");
					var phone_error = $("#phone_error");
					phone.blur(validatephonenumber);

					// Hàm kiểm tra số điện thoại
					function validatephonenumber() {
						if (phone.val() == "") { // Nếu số điện thoại rỗng
							phone.addClass("error");
							phone_error.text("Không để trống");
							phone_error.addClass("error");
							return false;
						}
						if (phone.val().charAt(0) != "0") { // Nếu số điện thoại
															// không bắt đầu
															// bằng số 0
							phone.addClass("error");
							phone_error
									.text("Số điện thoại phải bắt đầu bằng số 0.");
							phone_error.addClass("error");
							return false;
						}
						if ((phone.val().length < 10) // Nếu số điện thoại ít
														// hơn 10 số
								|| (phone.val().length > 20)) { // hoặc lớn hơn
																// 20 số
							phone.addClass("error");
							phone_error
									.text("Số điện thoại phải có 10 hoặc 20 số.");
							phone_error.addClass("error");
							return false;
						}

						else {
							phone.removeClass("error");
							phone_error.text("");
							phone_error.removeClass("error");
							return true;

						}
					}

					// SỐ CHỨNG MINH NHÂN DÂN
					var cmnd = $("#a");
					var cmnd_error = $("#cmnd_error");
					cmnd.blur(validatecmnd);

					// Hàm kiểm tra số chứng minh nhân dân
					function validatecmnd() {
						if (cmnd.val() == "") { // nếu số cmnd rỗng
							cmnd.addClass("error");
							cmnd_error.text("Không để trống");
							cmnd_error.addClass("error");
							return false;
						}
						if ((cmnd.val().length < 10) // nếu số cmnd có ít hơn
														// 10 số
								|| (cmnd.val().length > 12)) { // hoặc nhiều
																// hơn 12 số
							cmnd.addClass("error");
							cmnd_error
									.text("Số chứng minh nhân dân phải có 10 đến 12 số.");
							cmnd_error.addClass("error");
							return false;
						}

						else {
							cmnd.removeClass("error");
							cmnd_error.text("");
							cmnd_error.removeClass("error");
							return true;

						}

					}

					// SỐ NHÀ
					var sonha = $("#sonha");
					var diachi_error = $("#diachi_error");
					sonha.blur(validatesonha);

					// Hàm kiểm tra số nhà
					function validatesonha() {
						if (diachi_pattern.test(sonha.val())) { // nếu số nhà
																// chứa kí tự
																// đặc biệt
							sonha.addClass("error");
							diachi_error.text("Không thể chứ kí tự đặc biệt.");
							diachi_error.addClass("error");
							return false;
						} else {
							sonha.removeClass("error");
							diachi_error.text("");
							diachi_error.removeClass("error");
							return true;

						}

					}

					// TÊN TÀI KHOẢN
					var tentaikhoan = $("#tentaikhoan");
					var taikhoan_error = $("#taikhoan_error")
					tentaikhoan.blur(validatetentaikhoan);

					// Hàm kiểm tra tên tài khoản
					function validatetentaikhoan() {
						if (tentaikhoan.val() == "") { // Nếu tên tài khoản
														// rỗng
							tentaikhoan.addClass("error");
							taikhoan_error
									.text("Tên tài khoản không được để trống.");
							taikhoan_error.addClass("error");
							return false;
						}
						if (tentaikhoan_pattern.test(tentaikhoan.val())) { // Nếu tên tài khoản chứa kí tự đặc biệt
							tentaikhoan.addClass("error");
							taikhoan_error
									.text("Tên tài khoản không được có dấu hoặc chứa kí tự đặc biệt.");
							taikhoan_error.addClass("error");
							return false;
						}
						if ((tentaikhoan.val().length < 8) // Nếu tên tài khoản
															// ít hơn 8 kí tự
								|| (tentaikhoan.val().length > 20)) { // hoặc
																		// nhiều
																		// hơn
																		// 20 kí
																		// tự
							tentaikhoan.addClass("error");
							taikhoan_error.text("Tên phải từ 8-20 kí tự.");
							taikhoan_error.addClass("error");
							return false;
						} else {
							tentaikhoan.removeClass("error");
							taikhoan_error.text("");
							taikhoan_error.removeClass("error");
							return true;

						}

					}

					// EMAIL
					var email = $("#email");
					var email_error = $("#email_error");
					email.blur(validateemail);

					// Hàm kiểm tra email
					function validateemail() {
					// Nếu email rỗng
						if (email.val() == "") { 
							email.addClass("error");
							email_error.text("Email không thể rỗng");
							email_error.addClass("error");
							return false;
						}
					// Nếu khác định dạng email
						if (!email_pattern.test(email.val())) {
							email.addClass("error");
							email_error.text("Sai định dạng email");
							email_error.addClass("error");
							return false;
						} else {
							email.removeClass("error");
							email_error.text("");
							email_error.removeClass("error");
							return true;
						}
					}

					// TÊN TÀI KHOẢN CHỦ
					var taikhoanchu = $("#taikhoanchu");
					var taikhoanchu_error = $("#taikhoanchu_error");
					taikhoanchu.blur(validatetaikhoanchu);

					// Hàm kiểm tra tài khoản chủ
					function validatetaikhoanchu() { 
						if (taikhoanchu.val() != "") { //Nếu tên tài khoản chủ không rỗng
							//Nếu tên tài khoản chủ chứa kí tự đặc biệt
							if (tentaikhoan_pattern.test(taikhoanchu.val())) {
								tentaikhoan.addClass("error");
								taikhoanchu_error
										.text("Tên tài khoản chủ không được có dấu hoặc chứa kí tự đặc biệt.");
								taikhoanchu_error.addClass("error");
								return false;
							}
					//Nếu tên tài khoản chủ ít hơn 8 ksi tự hoặc dài hơn 20 kí tự.
							if ((taikhoanchu.val().length < 5) 
									|| (tentaikhoan.val().length > 20)) { 
								taikhoanchu.addClass("error");
								taikhoanchu_error
										.text("Tên phải từ 8-20 kí tự.");
								taikhoanchu_error.addClass("error");
								return false;
							} else {
								taikhoanchu.removeClass("error");
								taikhoanchu_error.text("");
								taikhoanchu_error.removeClass("error");
								loadstore();
								return true;

							}
						} else {
							taikhoanchu.removeClass("error");
							taikhoanchu_error.text("");
							taikhoanchu_error.removeClass("error");
							loadstore();
							return true;
						}

					}

					// TÊN CỬA HÀNG
					var storename = $("#storename");
					var storename_error = $("#storename_error");
					storename.blur(validatestorename);

					// Kiểm tra tên cửa hàng
					function validatestorename() {
						if (storename.val() == "") {
							storename.addClass("error");
							storename_error
									.text("Tên cửa hàng không được để trống.");
							storename_error.addClass("error");
							return false;
						} else {
							storename.removeClass("error");
							storename_error.text("");
							storename_error.removeClass("error");
							return true;
						}
					}

					// NGÀY SINH
					var birthday = $("#ngaysinh");
					var birthday_error = $("#birthday_error");
					birthday.blur(validatebirthday);

					// Hàm kiểm tra ngày sinh
					function validatebirthday() {
					// Tạo 1 biến ngày lưu giá trị ngày hiện tại
						var today = new Date();
					// Định dạng lại kiểu ngày tháng để so sánh
						var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
						var date_input = new Date(birthday.val().replace(
								pattern, '$3-$2-$1'));
						
					// Nếu năm nhập vào lớn hơn năm hiện tại
						if (today.getFullYear() < date_input.getFullYear()) 
						{
							birthday.addClass("error");
							birthday_error
									.text("Năm sinh phải nhỏ hơn ngày hiện tại ("
											+ today.getDate()
											+ "/"
											+ today.getMonth()
											+ 1
											+ "/"
											+ today.getFullYear() + ").");
							birthday_error.addClass("error");
							return false;
						} else if ((today.getFullYear() == date_input
								.getFullYear())
								&& (today.getMonth() + 1 < date_input
										.getMonth() + 1)) {
							// Nếu năm nhập vào bằng năm hiện tại và tháng nhập
							// vào lớn hơn tháng hiện tại
							birthday.addClass("error");
							birthday_error
									.text("Tháng sinh phải nhỏ hơn ngày hiện tại ("
											+ today.getDate()
											+ "/"
											+ today.getMonth()
											+ 1
											+ "/"
											+ today.getFullYear() + ").");
							birthday_error.addClass("error");
							return false;
						} else if ((today.getFullYear() == date_input
								.getFullYear())
								&& (today.getMonth() + 1 == date_input
										.getMonth() + 1)
								&& (today.getDate() + 1 < date_input.getDate() + 1)) {
							// Nếu năm,tháng nhập vào bằng năm,tháng hiện tại và
							// ngày nhập vào lớn hơn ngày hiện tại
							birthday.addClass("error");
							birthday_error
									.text("Ngày sinh phải nhỏ hơn ngày hiện tại ("
											+ today.getDate()
											+ "/"
											+ today.getMonth()
											+ 1
											+ "/"
											+ today.getFullYear() + ").");
							birthday_error.addClass("error");
							return false;

						} else {
							birthday.removeClass("error");
							birthday_error.text("");
							birthday_error.removeClass("error");
							return true;
						}

					}
		// Hàm xử lí khi bấm button Hủy ở popup add account
					$("#btnAccHuy").click(function() { 
					//Gọi hàm resetAccountfield để xóa dự liệu ở các field.
						resetAccountfield();
					//Xóa bỏ các viền đỏ ở các field có dữ liệu sai và các thông báo khi hủy popup
						$("#hovaten").removeClass("error");
						$("#sodienthoai").removeClass("error");
						$("#ngaysinh").removeClass("error");
						$("#a").removeClass("error");
						$("#sonha").removeClass("error");
						$("#tentaikhoan").removeClass("error");
						$("#taikhoanchu").removeClass("error");
						$("#storename").removeClass("error");
						$("#email").removeClass("error");
					//Xóa message các thông báo lỗi 
						name_error.text("");
						phone_error.text("");
						birthday_error.text("");
						storename_error.text("");
						taikhoanchu_error.text("");
						email_error.text("");
						taikhoan_error.text("");
						cmnd_error.text("");
						diachi_error.text("");
					//Clear cacs store trong table 
						$("#tablestore tbody").empty();

					});
		// Xử lí khi bấm button lưu ở popup-addAccount

					$("#btnAccLuu")
							.click(
									function() {
										if (validateName()
												&& validatebirthday()
												&& validatetaikhoanchu()
												&& validatephonenumber()
												&& validatecmnd()
												&& validatesonha()
												&& validatetentaikhoan()
												&& validateemail()) {
											var data = {
												"idCard" : $("#a").val(),
												"name" : $("#hovaten").val(),
												"birthday" : $("#ngaysinh")
														.val(),
												"gender" : $(
														"input[name='gender']:checked")
														.val(),
												"phone" : $("#sodienthoai")
														.val(),
												"email" : $("#email").val(),
												"address" : $("#sonha").val(),
												"accountName" : $(
														"#tentaikhoan").val(),
												"isAdmin" : $(
														"input[name='isAdmin']:checked")
														.val(),
												"wardID" : $("#Ward").find(
														":selected").val(),
												"storeList" : liststore
											};

											$
													.ajax({
														type : "POST",
														contentType : "application/json; charset=UTF-8",
														url : "addAccounts",
														data : JSON
																.stringify(data),
														dataType : "json",
														success : function(
																result) {
															alert("Thêm account thành công");
															resetAccountfield();
														},
														error : function() {
															alert("Error");
														}
													})

										} else {
											alert(liststore[1].name);
											return false;
										}
									});

		// Xử lí khi bấm button lưu ở popup-addStore
					$("#btnStoreAdd")
							.click(
									function(e) {
										if (validatestorename()) {
											var storename = document
													.getElementById("storename").value;
											var storedis = document
													.getElementById("storedis").value;
											// Tạo một đối tượng store
											var storeobj = {
												name : storename,
												Discription : storedis
											};
											// Lưu đối tượng store vào list
											liststore.push(storeobj);
											var a = $('#liststore').html();
											var b = a
													+ '<tr><td>'
													+ storename
													+ '</td><td>'
													+ storedis
													+ '</td><td><input type="checkbox"/></td>'
													+ '<td><i class="btdelete glyphicon glyphicon-trash"></i></td></tr>';
											$('#liststore').html(b);

											$(".btdelete").bind(
													"click",
													function() {
														$(this).parent()
																.parent()
																.remove();
													});

											// Reset lại các o textbox ở popup
											// add-store
											$('#storename').val("");
											$('#storedis').val("");
										} else
											return false;

									});
					
		// Hàm load quận khi người dùng chọn thành phố xong
					$("#City").on("change", function() {
						if ($(this).find(":selected").val() == "rong") {
							$('#District').empty();
							$('#District').append($('<option>', {
								value : "rong",
								text : "Không chọn"
							}));
							$('#Ward').empty();
							$('#Ward').append($('<option>', {
								value : "rong",
								text : "Không chọn"
							}));

						} else {
							var data = {
								"id" : $("#City").find(":selected").val()
							};
							$.ajax({
								url : "city/getListDistrictById",
								dataType : "json",
								type : "POST",
								contentType : "application/json",
								data : JSON.stringify(data),
								success : function(data) {
									$('#District').empty();
									$('#District').append($('<option>', {
										value : "",
										text : "Không chọn"
									}));
									$.each(data, function(i, item) {
										$('#District').append($('<option>', {
											value : item.id,
											text : item.name
										}));
									});
									$('#Ward').empty();
									$('#Ward').append($('<option>', {
										value : "",
										text : "Không chọn"
									}));
								}
							});
						}
					});

		// Hàm load phường khi người dùng chọn quận xong
					$("#District").on("change", function() {
						if ($(this).find(":selected").val() == "rong") {
							$('#Ward').empty();
							$('#Ward').append($('<option>', {
								value : "",
								text : "Không chọn"
							}));
						} else {
							var data = {
								"id" : $("#District").find(":selected").val()
							};
							$.ajax({
								url : "getListWardById",
								dataType : "json",
								type : "POST",
								contentType : "application/json",
								data : JSON.stringify(data),
								success : function(data) {
									$('#Ward').empty();
									$('#Ward').append($('<option>', {
										value : "",
										text : "Không chọn"
									}));
									$.each(data, function(i, item) {
										$('#Ward').append($('<option>', {
											value : item.id,
											text : item.name
										}));
									});
								}
							});
						}
					});
				

				});



