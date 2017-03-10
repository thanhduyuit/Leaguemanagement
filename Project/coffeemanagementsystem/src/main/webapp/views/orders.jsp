<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Ward Form</title>
<link rel="stylesheet" href="resources/css/order-style.css">
</head>
<body>
	
	<!-- start search -->
	<div class="panel panel-info center-block"
		style="width: 72%; height: 32%; margin-top: 1%">
		<div class="panel-heading">Tìm kiếm</div>
		<div class="panel-body">
			<form class="form-horizontal" id="search" action="aa" method="POST">
				<div class="form-group col-md-6">
					<label class="control-label col-sm-3">Họ và tên:</label>
					<div class="col-sm-7">
						<input type="text" class="form-control" id="userName"
							name="wardName">
					</div>
				</div>

				<div class="form-group col-md-6">
					<label class="control-label col-sm-5">Số điện thoại:</label>
					<div class="col-sm-7">
						<input type="number" class="form-control" id="phoneNumber"
							name="phoneNumber">
					</div>
				</div>

				<div class="form-group col-md-6">
					<label class="control-label col-sm-3" for="sel1">Tên bàn:</label> <select
						class="form-control col-sm-5" id="sel1">
					</select>
				</div>

				<div class="form-group col-md-6">
					<label class="control-label col-sm-5">Tổng tiền:</label>
					<div class="col-sm-7">
						<input type="text" class="form-control" id="totalBill"
							name="totalBill" onkeyup="this.value=FormatNumber(this.value);">
					</div>
				</div>

				<div class="form-group">
					<div class="col-sm-3 pull-right">
						<button type="submit" class="btn btn-default">Áp dụng</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	<!-- End search -->

	<!-- start view order -->
	<table id="example" class="display" style="width: 100%; height: 65%;">
		<thead>
			<tr>
				<th>Mã HĐ</th>
				<th>Tên khách hàng</th>
				<th>Tên bàn</th>
				<th>Số lượng SP</th>
				<th>Tổng tiền</th>
				<th>Thao tác</th>
			</tr>
		</thead>
	</table>
	<!-- start export excel -->
	<div id="divExportExcel"></div>
	<!-- end export excel -->
	
	<!-- end view order -->
	<!-- start view detail order -->
	<div class="modal fade" id="myModalView" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header" style="text-align: center;">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span> <span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">Xem chi tiết</h4>
				</div>
				<div class="modal-body">
					<div class="table-responsive">
						<table class="header-Detail" style="width: 100%">
							<thead>
								<tr>
									<th>Tài Khoản:</th>
									<th></th>
									<th class="value" id="nameCustomer"></th>
								</tr>
								<tr>
									<th>Tổng Tiền:</th>
									<th></th>
									<th class="value" id="totalBill"></th>
								</tr>
								<tr>
									<th>Tổng Sản Phẩm</th>
									<th></th>
									<th class="value" id="quantity"></th>
								</tr>
								<tr>
									<th>Điểm tích lũy</th>
									<th></th>
									<th class="value" id="point"></th>
								</tr>
							</thead>
							<tbody class="body-detail detail-Product-content"
								id="detailProduct">
							</tbody>
						</table>
<!-- 						<div class="outText">
							<button class="btn btn-default">
								<img id="image" src="resources/img/outText.jpg">
							</button>
						</div>
 -->
					</div>
				</div>
			</div>

		</div>
	</div>
	<!-- end view detail order -->

	<!-- start delete order -->
	<div id="myModal" class="modal fade" tabindex="-1" role="dialog"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="deleteModal">Xóa hóa đơn</h4>
				</div>
				<div class="modal-body">
					<label style="align: center">Bạn có chắc muốn xóa ?</label>
				</div>
				<div class="modal-footer">
					<button id="agreeDelete" type="button" class="btn btn-primary"
						data-dismiss="modal">OK</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">Hủy</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- end delete order -->
</body>
<script type="text/javascript" src="resources/js/orders.js"></script>
</html>