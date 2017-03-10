<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Ward Form</title>
<link rel="stylesheet" type="text/css" href="resources/css/table.css">
<body>
	<div class="panel panel-info center-block"
		style="width: 72%; height: 32%; margin-top: 1%">
		<div class="panel-heading">Tìm kiếm</div>
		<div class="panel-body">
			<form class="form-horizontal" id="search" action="aa" method="POST">
				<div class="form-group">
					<label class="control-label col-sm-3">Tên mặt hàng:</label>
					<div class="col-sm-6">
						<input type="text" class="form-control" id="material"
							name="wardName">
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-3">Loại hàng:</label>
					<div class="col-sm-6">
						<select class="form-control" id="comboLoaiHang1">
						</select>
					</div>
				</div>
					<div class="form-group">
					<label class="control-label col-sm-3">Giá:</label>
					<div class="col-sm-3">
						<div class="row">
							<div class="col-sm-1">
								<span>Từ</span>
							</div>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="pricefrom"
									 onkeyup="this.value=FormatNumber(this.value);">
							</div>
							<div class="col-sm-1">
								<span></span>
							</div>
						</div>

					</div>
					<div class="col-sm-3">
						<div class="row">
							<div class="col-sm-1">
								<span>đến</span>
							</div>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="priceto"
									 onkeyup="this.value=FormatNumber(this.value);">
							</div>
							<div class="col-sm-1">
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-5 pull-right">
						<button type="submit" class="btn btn-default">Áp dụng</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	<table id="example" class="display" style="width: 90%; height: 65%;">
		<thead>
			<tr>
				<th>id</th>
				<th>Tên mặt hàng</th>
				<th>Loại hàng</th>
				<th>Giá</th>
				<th>Số lượng</th>
				<th>Thao tác</th>
			</tr>
		</thead>
	</table>
	<div class="btn-group btn-group-justified center-block"
		id="buttonAddMaterial" data-toggle="modal" data-target="#myModalNorm"
		style="width: 15%; height: 4%; margin-right: 5%; margin-top: 2%">
		<a href="#" class="btn btn-primary"><span
			class="glyphicon glyphicon-plus"></span> Thêm hàng</a>
	</div>
	<!-- Popup add Warehouse -->
	<div class="modal fade" id="myModalNorm" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header" style="text-align: center;">
					<h4 class="modal-title" id="myModalLabel">Thêm hàng</h4>
				</div>
				<div class="modal-body">
					<form action="" class="themHangForm1" id="themHangForm">
						<div class="form-group">
							<label for="exampleInputPassword1">Loại hàng</label><br> <select
								class="comboLoaiHang" id="comboLoaiHang" name="comboLoaiHang"
								style="height: 38px; border-radius: 4px; margin-bottom: 10px; font-size: 15px; background: #fff; border: 1px solid #ebebeb; width: 67%;">
								<option value="" selected>Chọn loại hàng</option>

							</select>
							<button type="button" class="btn btn-default"
								id="btnShowPopupMaterialType" data-toggle="modal"
								data-target="#addMaterialType" style="border-color: #ADADAD;">Thêm
								loại hàng mới</button>
							<br> <span class="span" id="loaiHangInfo"></span>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Tên hàng</label> <input
								type="text" class="form-control" id="inputName" name="inputName"
								placeholder="Nhập tên hàng" required><br> <span
								class="span" id="nameInfo"></span>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Số lượng</label> <input
								onkeyup="this.value=FormatNumber(this.value)" type="text"
								class="form-control" id="inputSl" name="inputSl"
								placeholder="Nhập số lượng" /><br> <span class="span"
								id="slInfo"></span>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Giá</label> <input type="text"
								class="form-control" id="inputGia"
								onkeyup="this.value=FormatNumber(this.value)" name="inputGia"
								placeholder="Nhập giá" /><br> <span class="span"
								id="giaInfo"></span>
						</div>
						<div class="form-group">
							<label for="comment">Mô tả cho mặt hàng</label>
							<textarea class="form-control" rows="5" placeholder="Mô tả cho mặt hàng ..." id="inputDescription"
								id="descriptionWH"></textarea>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default"
								id="btnClosePopupAddWarehouse" data-dismiss="modal"
								style="border-color: #ADADAD;">Hủy</button>
							<button type="submit" class="btn btn-default"
								style="border-color: #ADADAD;">Thêm</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- end popup add warehouse -->
	<!-- popup add material type  -->
	<div class="modal fade" id="addMaterialType" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header" style="text-align: center;">
					<h4 class="modal-title" id="myModalLabel">Thêm loại hàng</h4>
				</div>
				<div class="modal-body">
					<form action="AddMaterialTypeController" class="themHangForm"
						id="themHangForm" method="post">
						<div class="form-group">
							<label for="exampleInputPassword1">Tên loại hàng</label> <input
								type="text" class="form-control" id="inputNameMaterialType1"
								placeholder="Nhập tên loại hàng" required><br> <span
								class="span" id="nameMaterialTypeInfo1"></span>
						</div>
						<div class="form-group">
							<label for="comment">Mô tả</label>
							<textarea class="form-control" placeholder="Mô tả loại hàng"
								rows="5" id="inputMaterialTypeDescription1"></textarea>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default"
								data-dismiss="modal" style="border-color: #ADADAD;"
								id="btnCloseAddMaterialType1">Hủy</button>
							<button type="button" class="btn btn-default"
								id="btnSaveAddMaterialType" style="border-color: #ADADAD;">Thêm</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	</div>
	<!--  end popup add material type -->
	<!-- modal delete -->
	<div id="delete-modal" class="modal fade" tabindex="-1" role="dialog"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="deleteModal">Xóa mặt hàng</h4>
				</div>
				<div class="modal-body">
					<label style="align: center">Bạn có chắc muốn xóa khách
						hàng này khỏi danh sách không?</label>
				</div>
				<div class="modal-footer">
					<button id="agreeDelete" type="button" class="btn btn-primary"
						data-dismiss="modal">OK</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">Hủy</button>
				</div>
			</div>
		</div>
	</div>
	<!-- modal update -->
	<%@ include file="warehouseUpdatePopup.jsp"%>
	
	<!-- modal viewDetails -->
	<%@ include file="warehouseDetailsPopup.jsp"%>

	<!-- Jquery to validate and process  -->
	<script src="resources/js/WarehouseAndMaterialType.js"></script>
	<script src="resources/js/warehouse_materialtype.js"></script>
	<script src="resources/js/formatPrice.js"></script>
	<script type="text/javascript" src="resources/js/warehouse.js"></script>
</body>
</html>