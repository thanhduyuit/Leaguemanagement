function showcontainerforgotpassword() {
	$(document).ready(function() {
		$("#forgotpassword").click(function() {
			$(".bgcontainerlogin").toggleClass("hien");
		});
		$(".btnexit").click(function() {
			$(".bgcontainerlogin").toggleClass("hien");
		});
	});
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function fillByMemory() {
	$(document).ready(function() {
		var id = getCookie("id");
		var pass = getCookie("pass");
		$("#username").val(id);
		$("#password").val(pass);
	});
}

function rememberMe() {
	$(document).ready(function() {
		$("#btnlogin").click(function() {
			if ($('#rememberme').prop('checked')) {
				setCookie("id", $("#username").val(), 365);
				setCookie("pass", $("#password").val(), 365);
			}
		});
	});
}

function findaccount() {
	$(document).ready(function() {
		$("#btnfindpassword").click(function() {
			var username = $("#inputforgotpassword").val();
			$.ajax({
				url : "findusername",
				type : "post",
				data : "username=" + username,
				success : function(result) {
					var accountinfo = JSON.parse(result);
					if (accountinfo.status == 'success') {
						$("#accountid").val(accountinfo.id);
						$("#myphone").text(accountinfo.numberphone);
						$("#myemail").text(accountinfo.email);
						$('#myModal').modal('show'); // show myModal
					}else{
						alert("Tên tài khoản không tồn tại!");
					}
				}
			});
		});
	});
}

function sendpassword(){
	$(document).ready(function(){
		var method;
		 if($('#phuongthucxacthucemail').is(':checked')){
			 method=$("#phuongthucxacthucemail").val();
		 }else if($('#phuongthucxacthucphone').is(':checked')){
			 method=$("#phuongthucxacthucphone").val();
		 }
		var accountid=$("#accountid").val();
		
		$.ajax({
			url : "sendpassword",
			type : "post",
			data : "accountid=" + accountid+"&method="+method,
			success : function(result) {
				if('true'==result){
					$('#myModal').modal('hide');
					
					//hien pop up thay doi mat khau
					
					
				}
			}
		});
		 
		
	});
}
