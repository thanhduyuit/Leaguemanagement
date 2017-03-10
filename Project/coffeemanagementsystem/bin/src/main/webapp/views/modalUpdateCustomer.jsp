<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
</head>
<body>
	<form action="" method="post" id="updateCustomerForm">
		<table>
			<tr>
				<td><label>ID</label></td>
				<td><input type="text" id="id" class="form-control" disabled /></td>
			</tr>
			<tr>
				<td><label>Họ và tên</label></td>
				<td><input type="text" id="name" name="name"
					class="form-control" /></td>
			</tr>
			<tr>
				<td><label>Số điện thoại</label></td>
				<td><input type="tel" name="phone" id="phone"
					class="form-control" /></td>
			</tr>
			<tr>
				<td><label>Email</label></td>
				<td><input type="email" name="email" id="email"
					class="form-control" /></td>
			</tr>
			<tr>
				<td><label>Ngày sinh</label></td>
				<td>
					<div class="form-group">
						<div class='input-group date' id='datepicker'>
							<input type='date' class="form-control" id="birth" />
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td><label>Giới tính</label></td>
				<td><input type="radio" id="gender" value="0">Nam <input
					type="radio" id="gender" value="1">Nữ</td>
			</tr>
			<tr>
				<td><label>Điểm thành viên</label></td>
				<td><input type="text" id="point" class="form-control" disabled /></td>
			</tr>
			<tr>
				<td colspan=2 align="right">
					<button id="btnSave" type="button" class="btn btn-primary"
						onclick="submitSave()" data-dismiss="modal">Save</button>
					<button id="btnCancel" type="button" class="btn btn-primary"
						data-dismiss="modal">Hủy</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>