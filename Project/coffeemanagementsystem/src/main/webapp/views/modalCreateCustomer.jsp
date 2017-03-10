<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>

<style>
	.error {
		color: red;
	}
</style>

</head>
<body>
	<form id="createCustomerForm">
		<table>
			<tr>
				<td><label for="nameCustomer">Họ và Tên <span
						class="glyphicon glyphicon-asterisk"
						style="color: red; font-size: 8px;"></span></label></td>
				<td>
					<input type="text" id="nameCustomertxt" class="form-control validate"
						name="nameCustomertxt" placeholder="Họ và Tên">
				</td>
			</tr>
			<tr>
				<td><label for="phoneNumber">Số Điện Thoại <span
						class="glyphicon glyphicon-asterisk"
						style="color: red; font-size: 8px;"></span>
				</label></td>
				<td>
					<input type="text" id="phoneNumbertxt" class="form-control validate" 
						name="phoneNumbertxt" placeholder="Phone Number">
				</td>
			</tr>
			<tr>
				<td><label for="Email">Email</label></td>
				<td>
					<input type="text" id="emailtxt" name="emailtxt" 
						class="form-control validate" placeholder="Email">
				</td>
			</tr>
			<tr>
				<td><label for="birthday">Ngày sinh</label></td>
				<td><input type='date' class="form-control" id="birthday" class="form-control" max="2017-01-01"/></td>
			</tr>
			<tr>
				<td><label for="gender">Giới tính</label></td>
				<td>
					<input name="radioGroup" type="radio" id="gender" value="0" checked>Nam 
					<input name="radioGroup" type="radio"id="gender" value="1">Nữ
				</td>
			</tr>
			<tr>
				<td colspan=2 align="right">
					<button type="submit" class="btn btn-primary" id="create">Tạo</button>
					<button type="button" class="btn btn-primary" id="cancel" data-dismiss="modal">Hủy</button>
				</td>
			</tr>
		</table>
	</form>

</body>
</html>