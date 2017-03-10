<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<!-- Latest compiled and minified CSS -->
<spring:url value="resources/css/bootstrap.min.css" var="bootstrapCSS" />
<link href="${bootstrapCSS}" rel="stylesheet">

<spring:url value="resources/css/bootstrap-theme.min.css"
	var="bootstrapThemeCSS" />
<link href="${bootstrapThemeCSS}" rel="stylesheet">

<title>Thêm tài khoản</title>
<style>
.container form input[type="text"], .container form input[type="radio"],
	.container form input[type="date"], .container form select {
	margin-bottom: 5px;
	margin-top: 5px;
}
.error{
border-color: red;
}
.modal-body .panel-body div{
margin: 5px 0px;
}


</style>
</head>

<body>
	<div class="container">
		<!--Begin Modal -->
		<div class="modal fade" id="accountModal" role="dialog">
			<div class="modal-dialog"  >

				<!--Begin Modal content-->
				<div class="modal-content">

					<!-- Begin Modal Header-->
					<div class="modal-header"
						style="text-transform: capitalize; padding-left: 38%; background-color: #337ab7; color: #fff;">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Thêm Tài Khoản</h4>
					</div>
					<!-- End Modal Header-->
						<!-- Begin Modal Body-->
						<div class="modal-body" style="height:650px;overflow-y: scroll;">
							<div class="panel panel-default">

								<!-- First panel -->
								<div class="panel-heading">Thông tin cá nhân</div>
								<div class="panel-body">
									<div class="form-group">
										<label class="control-label col-md-4 required">Họ và
											tên:</label>
										<div class="col-md-8">
											<input id="hovaten" type="text" class="form-control">
											<span id="name_error" style="color: red;"></span>
										</div>
									</div>

									<div class="form-group">
										<label class="control-label col-md-4 required">Số Điện
											thoại:</label>
										<div class="col-md-8">
											<input id="sodienthoai" type="number" class="form-control">
											<span id="phone_error" style="color: red;"></span>
										</div>
									</div>

									<div class="form-group">
										<label class="control-label col-md-4 required">Ngày
											sinh:</label>
										<div class="col-md-8">
											<input id="ngaysinh" type="date" class="form-control">
											<span id="birthday_error" style="color: red;"></span>
										</div>
									</div>

									<div class="form-group">
										<label class="control-label col-md-4">Giới tính:</label>
										<div class="col-md-8" style="margin-top: 1%">
											<div class="col-md-6">
												<input type="radio" name="gender" value="True" checked>
												Nam <br>
											</div>
											<div class="col-md-6">
												<input type="radio" name="gender" value="False"> Nữ
												<br>
											</div>
										</div>
									</div>

									<div class="form-group">
										<label class="control-label col-md-4 required">Số
											CMND:</label>
										<div class="col-md-8">
											<input id="a" type="number" class="form-control">
											<span id="cmnd_error" style="color: red;"></span>
										</div>
									</div>
								</div>

								<!-- Second panel -->
								<div class="panel-heading">Địa Chỉ</div>
								<div class="panel-body">
									<div class="form-group">
										<label class="control-label col-md-4 required">Số nhà:</label>
										<div class="col-md-8">
											<input id="sonha" type="text" class="form-control"> <span
												id="diachi_error" style="color: red;"></span>
										</div>
									</div>

									<div class="form-group">
										<label class="control-label col-md-4 required">Tỉnh/TP:</label>
										<div class="col-md-8">
											<select id="City" class="selectpicker form-control"
												name="ListCity">
											</select>
										</div>
									</div>

									<div class="form-group">
										<label class="control-label col-md-4 required">Quận/Huyện:</label>
										<div class="col-md-8">
											<select id="District" class="selectpicker form-control"
												name="ListDistrict">
											</select>
										</div>
									</div>

									<div class="form-group">
										<label class="control-label col-md-4 required">Phường/Xã:</label>
										<div class="col-md-8">
											<select id="Ward" class="selectpicker form-control"
												name="Listward">
											</select>
										</div>
									</div>
								</div>


								<!-- Third panel -->
								<div class="panel-heading" background-color='#337AB7'>Thông
									tin tài khoản</div>
								<div class="panel-body">
									<div class="form-group">
										<label class="control-label col-md-4 required">Tên tài
											khoản:</label>
										<div class="col-md-8">
											<input id="tentaikhoan" type="text" class="form-control">
											<span id="taikhoan_error" style="color: red;"></span>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-4 required">Email:</label>
										<div class="col-md-8">
											<input id="email" type="text" class="form-control"> <span
												id="email_error" style="color: red;"></span>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-4 required">Tài
											khoản chủ:</label>
										<div class="col-md-8">
											<input id="taikhoanchu" type="text" class="form-control">
											<span id="taikhoanchu_error" style="color: red;"></span>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-4 required">Loại
											tài khoản:</label>
										<div class="col-md-8" style="margin-top: 1%">
											<div class="col-md-6">
												<input type="radio" name ="isAdmin" value="False" checked> Tài
												khoản thường <br>
											</div>
											<div class="col-md-6">
												<input type="radio" name ="isAdmin"  value="True"> Admin <br>
											</div>
										</div>
									</div>
								</div>

								<!-- Last panel -->
								<div class="panel-heading">
									Danh sách cửa hàng<a href="#storeModal"
										style="float: right; font-size: 13px; padding-left: 50px;"
										data-toggle="modal" data-target="#storeModal"
										data-dismiss="modal">Thêm cửa hàng </a>
								</div>
								<div class="panel-body">
									<table id="tablestore"class="display" style="width: 90%; height: 65%;">
										<thead>
											<tr>
												<th>Tên cửa hàng</th>
												<th>Mô tả</th>
												<th>Quản lí</th>
												<th>Xóa</th>
											</tr>
										</thead>
										<tbody id="liststore">
										</tbody>
									</table>
								</div>
							</div>
							<!-- End panel-default-->
						</div>
						<!-- End Modal Body-->

						<!-- Begin Modal Footer-->
						<div class="modal-footer">

							<button id="btnAccLuu" type="button" class="btn btn-primary"
								data-dismiss="modal" >Lưu</button>
							<button id="btnAccHuy" type="button" class="btn btn-primary"
								data-dismiss="modal">Hủy</button>
						</div>
						<!-- End Modal Footer-->
				</div>
				<!--End Modal content-->
			</div>
		</div>
		<!--End Modal -->
		<!-- Modal -->
		<div class="modal fade" id="storeModal" role="dialog">
			<div class="modal-dialog">

				<!-- Modal content-->
				<div class="modal-content">

					<div class="modal-header"
						style="text-transform: capitalize; padding-left: 38%; background-color: #337ab7; color: #fff;">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Thông tin cửa hàng</h4>
					</div>
					<form id="addstore" action="" method="post">
					
						<div class="modal-body">
							<div class="panel-heading"></div>
							<div class="panel-body">
								<div class="form-group">
									<label class="control-label col-md-4 required">Tên cửa
										hàng</label>
									<div class="col-md-8">
										<input id="storename" type="text" class="form-control">
										<span id="storename_error" style="color: red;"></span>
									</div>
								</div>

								<div class="form-group">
									<label class="control-label col-md-4 required">Mô tả</label>
									<div class="col-md-8">
										<textarea id="storedis" class="form-control" rows="6"
											cols="40"></textarea>
									</div>
								</div>

							</div>


						</div>

						<div class="modal-footer">
							<button id="btnStoreAdd" type="button" class="btn btn-primary"
								data-toggle="modal" data-dismiss="modal"
								data-target="#accountModal" >Lưu</button>
							<button id="btnStorehuy" type="button" class="btn btn-primary"
								data-toggle="modal" data-dismiss="modal"
								data-target="#accountModal">Hủy</button>

						</div>
					</form>
				</div>

			</div>
		</div>
	</div>


	<spring:url value="resources/js/jquery-1.12.4.js" var="jQuery" />
	<spring:url value="resources/js/bootstrap.min.js" var="bootstrapJS" />
	<spring:url value="resources/js/account.js" var="accountJS" />
	<script type="text/javascript" charset="utf8" src="${jQuery}"></script>
	<script type="text/javascript" src="${bootstrapJS}"></script>
	<script type="text/javascript" src="${accountJS}"></script>
</body>
</html>