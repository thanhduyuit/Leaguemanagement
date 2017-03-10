<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
</head>
<body>
	<table>
		<tr>
			<td><label>ID</label></td>
			<td><input type="text" id="id" class="form-control" disabled /></td>
		</tr>
		<tr>
			<td><label>Họ và tên</label></td>
			<td><input type="text" id="name" class="form-control" disabled /></td>
		</tr>
		<tr>
			<td><label>Số điện thoại</label></td>
			<td><input type="text" id="phone" class="form-control" disabled /></td>
		</tr>
		<tr>
			<td><label>Email</label></td>
			<td><input type="text" id="email" class="form-control" disabled /></td>
		</tr>
		<tr>
			<td><label>Ngày sinh</label></td>
			<td>
				<div class="form-group">
					<div class='input-group date' id='datepicker'>
						<input type='date' class="form-control" id="birth" disabled />
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td><label>Giới tính</label></td>
			<td><input type="radio" id="gender" value="0" disabled>Nam
				<input type="radio" id="gender" value="1" disabled>Nữ</td>
		</tr>
		<tr>
			<td><label>Điểm thành viên</label></td>
			<td><input type="text" id="point" class="form-control" disabled /></td>
		</tr>
	</table>
</body>
</html>