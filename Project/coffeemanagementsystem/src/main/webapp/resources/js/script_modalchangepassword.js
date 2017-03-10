function validatepassword(password) {
	var patt = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/g;

	return patt.test(password);
}

function testpassword() {
	var mess = "Mật khẩu có độ dài >= 6 ký tự, có ít nhất có 1 ký tự viết hoa, 1 ký tự viết thường, 1 chữ số, và 1 ký tự đặc biệt";

	var newpassword = $('#newpassword').val();
	var renewpassword = $('#renewpassword').val();

	var boolnewpassword = validatepassword(newpassword);
	var boolrenewpassword = validatepassword(renewpassword);
	if (boolnewpassword && boolrenewpassword) {
		if (boolnewpassword == boolrenewpassword) {
			return true;
		}
	} else {
		$('#newpassword').val("");
		$('#newpassword').css('border', 'solid 1px red');
		$("#messnewpassword").text(mess);
		$('#renewpassword').val("");
		$('#renewpassword').css('border', 'solid 1px red');
		$("#messrenewpassword").text(mess);
	}
	
	return false;
}

function changepassword(){
	
	var validatepassword=testpassword();
	var passwordold=$("#passwordold").val();
	if((passwordold.length>=6)&&(passwordold.length<=30)&&validatepassword===true){
		$.ajax({
			url : 'changepassword',
			type : "POST",
			data:{
				accountID:$('#accountid').val(),
				passwordOld:passwordold,
				newPassword:$('#newpassword').val()
			},
			success : function(data) {
				if (data == true) {
					window.location.replace(window.location.pathname);
				}	
			},
			error : function(err) {
				alert('Không thể thay đổi mật khẩu.');
			}
		});	
	}else if((passwordold.length<6)||(passwordold.length>30)){
		
	}
}