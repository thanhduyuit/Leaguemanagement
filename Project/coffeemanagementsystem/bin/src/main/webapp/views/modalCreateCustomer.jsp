<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
	<div class="container" id="paner">
		<div class="col-sm-12">
			<form class="form-horizontal" name="register" method="post" action="" id="fromss" onsubmit="">
				<div class="form-group form-group-sm">
					<label class="control-label col-sm-3" for="nameCustomer">Họ và Tên <span class="glyphicon glyphicon-asterisk"
						style="color: red;"></span>
					</label>

					<div class="col-sm-6">
						<input class="form-control" type="text" id="nameCustomertxt"
							name="nameCustomertxt" required>
					</div>
				</div>
				<div id="checkname" style="color: red"></div>

				<div class="form-group form-group-sm">
					<label class="control-label col-sm-3" for="phoneNumber">Số Điện Thoại 
						<span class="glyphicon glyphicon-asterisk" style="color:red;"></span></label>
					<div class="col-sm-6">
						<input class="form-control" type="text" id="phoneNumbertxt"
							name="phoneNumbertxt" required>
					</div>
				</div>
				<div id="checkphone" style="color: red"></div>
				<div class="form-group form-group-sm">
					<label class="control-label col-sm-3" for="Email">Email</label>
					<div class="col-sm-6">
						<input class="form-control" type="text" id="emailtxt" name="emailtxt">
					</div>
				</div>
				<div id="checkemail" style="color: red"></div>
				<div class="form-group form-group-sm">
					<label class="control-label col-sm-3" for="birthday">Ngày sinh</label>
					<div class="col-sm-6">
						<div class='input-group date' id='birthdate'>
							<input type='date' class="form-control" id="birthday" />
						</div>
					</div>
				</div>
				<div id="checkbirthday" style="color: red"></div>
				<div class="form-group form-group-sm">
					<label class="control-label col-sm-3" for="gender">Giới tính</label>
					<div class="col-sm-6">
						<div class="col-sm-3">
							<input name="radioGroup" type="radio" id="gender" value="0">Nam
						</div>
						<div class="col-sm-3">
							<input name="radioGroup" type="radio" id="gender" value="1">Nữ
						</div>
					</div>
				</div>
				<div class="alert alert-danger hide"></div>
				<div class="alert alert-success hide"></div>
			</form>
		</div>
	</div>
</body>
</html>