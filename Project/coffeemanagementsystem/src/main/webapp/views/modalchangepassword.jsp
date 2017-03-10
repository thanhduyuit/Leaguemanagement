<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<style type="text/css">
#modalChangePassword p {
	width: 100%;
}

#modalChangePassword p span:first {
	width: 50%;
}

#modalChangePassword p span input {
	width: 50%;
}
</style>
</head>
<body>

	<!-- Modal -->
	<div id="modalChangePassword" class="modal fade" role="dialog">
		<div class="modal-dialog" style="width: 40%;">
			<!-- Modal content-->
			<div class="modal-content">
				<form>
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Thay đổi mật khẩu</h4>
					</div>
					<div class="modal-body">
						<div class="form-group" style="margin-bottom: 10px">
							<label for="passwordold">Mật khẩu cũ / Mã xác thực:</label> <input
								type="password" class="form-control" id="passwordold"> 
								<a href="#" style="float: right; font-size: 13px;" onclick="sendpassword()" id="sendcodeverify">Gửi mã xác
								thực mới</a>
						</div>
						<div class="form-group" style="margin-bottom: 10px">
							<label for="newpassword">Nhập mật khẩu mới:</label> <input
								type="password" class="form-control" id="newpassword">
								<span style="color: red; font-size: 12px;" id="messnewpassword"></span>
						</div>
						<div class="form-group" style="margin-bottom: 10px">
							<label for="renewpassword">Nhập lại mật khẩu mới:</label> <input
								type="password" class="form-control" id="renewpassword">
								<span style="color: red;font-size: 12px;"id="messrenewpassword"></span>
						</div>

					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary"
							onclick="changepassword();">Thay đổi</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">Hủy
							bỏ</button>
					</div>
				</form>
			</div>

		</div>
	</div>
	<spring:url value="/resources/js/jquery-1.12.4.js" var="jQuery" />
	<spring:url value="/resources/js/script_modalchangepassword.js"
		var="scriptModalChangePassword" />
	<script type="text/javascript" charset="utf8" src="${jQuery}"></script>
	<script type="text/javascript" charset="utf8"
		src="${scriptModalChangePassword}"></script>
</body>
</html>