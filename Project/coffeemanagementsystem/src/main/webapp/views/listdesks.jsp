<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<title>Quản lý Bàn</title>
<link href="resources/css/desk.css" rel="stylesheet">
</head>
<body>
	<div class="container">
		<div class="panel panel-primary">
			<div class="panel-heading" style="text-align: left">
				<b>TÌM KIẾM NÂNG CAO</b>
			</div>
			<div class="panel-body" style="padding: 1px">
				<form method="POST" id="search" name="search">
					<div class="form-group col-md-10 col-md-offset-1"
						style="padding: 0px; margin: 1px; width: 100%;">
						<table class="table table-borderless" style="margin-bottom: 1px;">
							<tr>
								<td><label>Mã bàn:</label></td>
								<td><input type="number" id="maBan" class="form-control " /></td>
								<td><label>Tên bàn:</label></td>
								<td><input type="text" id="tenBan" class="form-control" /></td>
								<td></td>
							</tr>
							<tr>

								<td><label>Tên nhóm bàn:</label></td>
								<td><select id="tenNB">
								</select></td>
								<td><label>Số lượng ghế:</label></td>
								<td><input type="number" id="slGhe"
									class="form-control" /></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td><button class="btn btn-primary"
										style="margin-left: 125px;" id="btnsearch">Tìm kiếm</button></td>
							</tr>
						</table>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div class="col-md-10 col-md-offset-1">
		<table class="table table-striped" id="example">
			<thead>
				<tr>
					<th></th>
					<th>Tên nhóm bàn</th>
					<th>Tên bàn</th>
					<th>Số lượng ghế</th>
					<th>Mô tả</th>
					<th>Hoạt động</th>
				</tr>
			</thead>
		</table>
	</div>
	<div class="container">

		<button class="btn btn-primary" data-toggle="modal"
			data-target="#myModalHorizontal"
			style="margin-top: 10px; float: right;" id="btnThemMoi">Thêm
			mới</button>
	</div>
	<!-- Modal -->
	<div class="modal fade" id="myModalHorizontal" tabindex="-1"
		role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span> <span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">Tạo bàn</h4>
				</div>

				<!-- Modal Body -->
				<div class="modal-body">

					<form class="form-horizontal" role="form" method="post" action=""
						id="addDeskForm">

						<div class="form-group">

							<label class="col-sm-2 control-label" for="c">Nhóm bàn<span
								class="glyphicon glyphicon-asterisk"
								style="color: red; font-size: 8px;"></span></label>
							<div class="row">
								<div class="col-sm-8">
									<select class="form-control" id="grdId">

									</select>
								</div>
							</div>
						</div>
						<!-- Text input-->
						<div class="form-group">
							<label class="col-sm-2 control-label" for="textinput">Tên
								Bàn<span class="glyphicon glyphicon-asterisk"
								style="color: red; font-size: 8px;"></span>
							</label>
							<div class="row">
								<div class="col-sm-8">
									<input type="text" class="form-control validate" id="deskName"
										name="deskName" required>
								</div>
							</div>
						</div>

						<!-- Text input-->
						<div class="form-group">
							<label class="col-sm-2 control-label" for="textinput">Số
								lượng ghế<span class="glyphicon glyphicon-asterisk"
								style="color: red; font-size: 8px;"></span>
							</label>

							<div class="row">
								<div class="col-sm-8">
									<input type="number" class="form-control validate" id="qOSeat"
										name="qOSeat" required>
								</div>
								<div id="qOSeatError"></div>
							</div>
						</div>
						<br>
						<!-- Text input-->
						<div class="form-group">
							<label class="col-sm-2 control-label" for="textinput">Mô
								tả</label>

							<div class="row">
								<div class="col-sm-8">
									<textarea class="form-control" rows="5" id="descr"></textarea>
								</div>
							</div>
						</div>

						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-9">
								<div class="pull-right">
									<button type="button" class="btn btn-default"
										data-dismiss="modal">Cancel</button>
									<button id="saveDesk" type="submit" class="btn btn-primary">Save</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Poppup update table -->

	<div class="modal fade" id="poppupUpdate" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span> <span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">Cập Nhật Thông Tin
						Bàn</h4>
				</div>

				<!-- Modal Body -->
				<div class="modal-body">

					<form class="form-horizontal" role="form" method="post" action="">
						<input type="text" class="form-control" id="udId"
							style="visibility: hidden;">
						<div class="form-group">

							<label class="col-sm-2 control-label" for="c">Nhóm bàn<span
								class="glyphicon glyphicon-asterisk"
								style="color: red; font-size: 8px;"></span></label>
							<div class="row">
								<div class="col-sm-8">
									<select class="form-control" id="ugrdId">

									</select>
								</div>
							</div>
						</div>
						<!-- Text input-->
						<div class="form-group">
							<label class="col-sm-2 control-label" for="textinput">Tên
								Bàn<span class="glyphicon glyphicon-asterisk"
								style="color: red; font-size: 8px;"></span>
							</label>
							<div class="row">
								<div class="col-sm-8">
									<input type="text" class="form-control" id="udeskName">
								</div>
							</div>
						</div>

						<!-- Text input-->
						<div class="form-group">
							<label class="col-sm-2 control-label" for="textinput">Số
								lượng ghế<span class="glyphicon glyphicon-asterisk"
								style="color: red; font-size: 8px;"></span>
							</label>

							<div class="row">
								<div class="col-sm-8">
									<input type="number" class="form-control" id="uqOSeat">
								</div>
							</div>
						</div>
						<br>
						<!-- Text input-->
						<div class="form-group">
							<label class="col-sm-2 control-label" for="textinput">Mô
								tả</label>

							<div class="row">
								<div class="col-sm-8">
									<textarea class="form-control" rows="5" id="udescr"></textarea>
								</div>
							</div>
						</div>

						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-9">
								<div class="pull-right">
									<button type="button" class="btn btn-default"
										data-dismiss="modal">Cancel</button>
									<button id="saveUpdateDesk" type="submit"
										class="btn btn-primary">Save</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Form delete desk -->
	<div class="modal fade" id="delDeskModal" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">Bạn muốn xóa bàn này
						không?</h4>
				</div>
				<div class="modal-body" align="right">
					<!-- 					<input type="hidden" id="iddesktoDelete" /> -->
					<button type="button" class="btn btn-primary" id="iddesktoDelete"
						data-dismiss="modal">Có</button>
					<button type="button" class="btn btn-primary" class="close"
						data-dismiss="modal">Không</button>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="resources/js/desk.js"></script>
</body>
</html>