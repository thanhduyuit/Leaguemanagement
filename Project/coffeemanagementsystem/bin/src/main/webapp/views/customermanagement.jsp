<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML >
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Customer Management</title>

<spring:url value="resources/css/customer-style.css" var="customerStyle" />
<link href="${customerStyle}" rel="stylesheet">

</head>
<body>

	<div class="container-fluid" id="main">
		<div class="row">
			<form id="search" method="post">
				<div class="form-group col-md-10 col-md-offset-1">
					<div id="success-notification" class="label label-success notify"></div>
					<div id="error-notification" class="label label-danger notify"></div>
					<table class="table table-bordered">
						<tr>
							<td><label>Họ và tên:</label></td>
							<td><input type="text" id="name" name="fullName"
								class="form-control" /></td>
							<td><label>Số điện thoại:</label></td>
							<td><input type="text" id="phone" class="form-control" /></td>
							<td></td>
						</tr>
						<tr>
							<td><label>Giới tính:</label></td>
							<td><select class="form-control" id="gender">
									<option value=0>Nam</option>
									<option value=1>Nữ</option>
							</select></td>
							<td><label>Điểm thành viên:</label></td>
							<td><input type="text" id="point" class="form-control" /></td>
							<td><button type="button" id="Submitsearch"
									class="btn btn-primary">Search</button></td>
						</tr>
					</table>
				</div>
			</form>

			<div class="col-md-12">
				<div id="loadingmessage">
					<img src="resources/img/loader.gif" />
				</div>
				<table class="table table-striped" id="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Họ và tên</th>
							<th>Số điện thoại</th>
							<th>Điểm thành viên</th>
							<th></th>
						</tr>
					</thead>
				</table>
			</div>

			<div class="col-md-2 col-md-offset-10">
				<button type="button" class="btn btn-primary" id="createCustomer"
					data-toggle="modal" data-target="#create-modal">Thêm khách
					hàng</button>
			</div>
		</div>
	</div>

	<div id="edit-modal" class="modal fade" tabindex="-1" role="dialog"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="editModal">Cập nhật thông tin
						khách hàng</h4>
				</div>
				<div class="modal-body">
					<jsp:include page="modalUpdateCustomer.jsp" />
				</div>
			</div>
		</div>
	</div>

	<div id="delete-modal" class="modal fade" tabindex="-1" role="dialog"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="deleteModal">Xóa Khách hàng</h4>
				</div>
				<div class="modal-body">
					<label style="align: center">Bạn có chắc muốn xóa khách
						hàng này khỏi danh sách không?</label>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary" data-dismiss="modal"
						onclick="submitDel()">Đồng ý</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">Hủy</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- open: modal for creating customer account -->
	<div id="create-modal" class="modal fade" tabindex="-1" role="dialog"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="deleteModal">Tạo tài khoản khách hàng</h4>
				</div>
				<div class="modal-body">
					<jsp:include page="modalCreateCustomer.jsp" />
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary" id="create">Tạo</button>
					<button type="reset" class="btn btn-primary" id="cancel"
						data-dismiss="modal">Hủy</button>
				</div>
			</div>
		</div>
	</div><!-- end: modal for creating customer account -->
	

	<div id="view-modal" class="modal fade" tabindex="-1" role="dialog"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="deleteModal">Thông tin khách hàng</h4>
				</div>
				<div class="modal-body">
					<jsp:include page="modalDetailCustomer.jsp" />
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary" data-dismiss="modal">Hủy</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Script File  -->

	<spring:url value="resources/js/customermanagement.js" var="appJS" />
	<script type="text/javascript" src="${appJS}"></script>
</body>
</html>