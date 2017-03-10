<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
<head>

<title>Promotion</title>






<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link
	href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css"
	rel="stylesheet" type="text/css">


<!-- Custom CSS -->



<!-- Bootstrap CSS -->
<spring:url value="resources/css/bootstrap.min.css" var="bootstrapCSS" />
<spring:url value="resources/css/bootstrap-theme.min.css" var="bootstrapThemeCSS" />


<spring:url value="resources/css/customer-style.css" var="customerStyle" />
<spring:url value="resources/css/font-awesome.min.css" var="fontAwesome" />
<spring:url value="resources/css/View.css" var="PromotionView" />
<link href="${bootstrapCSS}" rel="stylesheet">
<link href="${bootstrapThemeCSS}" rel="stylesheet">
<link href="${customerStyle}" rel="stylesheet">
<link href="${fontAwesome}" rel="stylesheet">
<link href="${PromotionView}" rel="stylesheet">

<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link
	href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css"
	rel="stylesheet" type="text/css">

 <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
 <link href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css" rel="stylesheet" type="text/css">
<!-- Custom CSS -->


</head>

<body>

	<div id="content-view">
		<div id="advance-search">
			<div align="center" id="title-search">
				<label>Tìm kiếm nâng cao</label>
			</div>
			<form class="form-horizontal" style="margin-right: 10px;"
				id="frmSearch" method="POST" action="promotionSearch">
				<div class="form-group">
					<label class="control-label col-sm-2" for="email">Tên CTKM:</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="promotionName"
							placeholder="Nhập tên chương trình khuyến mãi">
					</div>

				</div>
				<div class="form-group">
					<label class="control-label col-sm-2" for="pwd">Ngày Bắt
						Đầu:</label>
					<div class="col-sm-4">
						<input type="date" class="form-control" id="startDate"
							name="startDate">
					</div>
					<label class="control-label col-sm-2" for="pwd">Ngày Kết
						Thúc:</label>
					<div class="col-sm-4">
						<input type="date" class="form-control" id="endDate"
							name="endDate">
					</div>
				</div>

				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						<button type="submit" class="btn btn-info pull-right">Tìm
							kiếm</button>
					</div>
				</div>
			</form>
		</div>
		<div id="table-warp">
			<table id="table_id" class="cell-border">
				<thead>
					<tr>

						<th>Tên khuyến mãi</th>
						<th>Ngày bắt đầu</th>
						<th>Ngày kết thúc</th>
						<th></th>
						<th></th>
						<th>Tùy chọn</th>

					</tr>

				</thead>

			</table>

		</div>
		<div align="right" id="action-content">
			<button type="button" class="btn btn-info btn-lg "
				data-toggle="modal" data-target="#myModal">Tạo mới</button>

		</div>
	</div>

	<!-- Modal Tạo khuyến mãi -->
	<div class="modal fade" id="myModal" role="dialog"
		data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg">

			<div class="modal-content">
				<div style="background-color: #31b0d5" class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" style="text-align: center; color: white">Thêm
						chương trình khuyến mãi</h4>
				</div>

				<div class="modal-body">
					<div>
						<!--Form điền thông tin khuyến mãi cần tạo -->

						<div>
							<form id="addpromotion">
								<table class="search-form">

									<tr>
										<td>Tên khuyến mãi</td>
										<td><input style="width: 80%"
											class="form-control validate" name="name"
											placeholder="Nhập tên chương trình khuyến mãi"
											id="contractName" type="text" /></td>
									</tr>

									<tr>
										<td>Ngày bắt đầu</td>
										<td><input type="date" id="datepicker2" name="start"
											class="form-control validate" style="width: 30%" /></td>
									</tr>
									<tr>
										<td>Ngày kết thúc</td>
										<td><input type="date" id="datepicker3" name="end"
											class="form-control validate" style="width: 30%" /></td>
									</tr>

									<tr>
										<td></td>
										<td align="right"><button type="button" id="linkadd"
												data-toggle="modal" data-target="#add-modal">Thêm
												chi tiết</button></td>
									</tr>
								</table>
							</form>
						</div>

						<!-- Danh sách chi tiết khuyến mãi -->
						<div>
							<table id="table_product" class="cell-border">
								<thead>
									<tr>
										<th>Tên sản phẩm</th>
										<th>Giảm giá</th>
										<th></th>
										<th>Tùy chọn</th>
									</tr>
								</thead>
							</table>
						</div>
					</div>


				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-info cancelpromotion"
						data-dismiss="modal">Hủy bỏ</button>
					<button type="button" id="button_add" class="btn btn-info">Tạo
						mới</button>
				</div>


			</div>
		</div>
	</div>

	<!-- Edit modal-->
	<div id="edit-modal" class="modal fade" tabindex="-1" role="dialog"
		aria-hidden="true" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="editModal">Cập nhật thông tin
						khuyến mãi</h4>
				</div>
				<div class="modal-body">
					<div>
						<table>

							<tr>
								<td><label>Tên khuyến mãi</label></td>
								<td><input type="text" id="promotionName" name="name"
									class="form-control" /></td>
							</tr>


							<tr>
								<td><label>Ngày bắt đầu</label></td>
								<td>
									<div class="form-group">

										<input type='text' class="form-control" id="datepicker4" />

									</div>
								</td>
							</tr>
							<tr>
								<td><label>Ngày kết thúc</label></td>
								<td>
									<div class="form-group">

										<input type='text' class="form-control" id="datepicker5" />

									</div>
								</td>
							</tr>

							<tr>
								<td colspan=2 align="right">
									<button type="button" class="btn btn-primary"
										onclick="submitSave()" data-dismiss="modal">Cập nhật</button>
									<button type="button" class="btn btn-primary"
										data-dismiss="modal">Hủy</button>
								</td>
							</tr>
						</table>

					</div>

					<div></div>
				</div>
			</div>
		</div>
	</div>
	<!-- Add detail modal -->
	<div id="add-modal" class="modal fade" tabindex="-1" role="dialog"
		aria-hidden="true" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="add-modal">Thêm chi tiết khuyến
						mãi</h4>
				</div>
				<div class="modal-body">
					<div>
					<form id="promotionadddetails">
						<table>
							
							<tr>
								<td><label>Tên sản phẩm</label></td>
								<td><select class="selectpicker form-control"
									id="productName" name="productName">
										<option value="00">-Chọn sản phẩm-</option>
								</select></td>
							</tr>


							<tr>
								<td><label>Giảm giá (%)</label></td>
								<td>
									<div class="form-group">

										<input type='text' placeholder="Nhập % khuyến mãi" name="discount"
											class="form-control" id="discount" />

									</div>
								</td>
							</tr>

							<tr>
								<td colspan=2 align="right">
									<button type="button" class="btn btn-primary" id="add-detail">Thêm</button>
									<button type="button" class="btn btn-primary cancel"
										data-dismiss="modal">Hủy</button>
								</td>
							</tr>
						
						</table>
					</form>
					</div>

				</div>
			</div>
		</div>
	</div>
	<!-- Delete modal-->
	<div id="delete-modal" class="modal fade" tabindex="-1" role="dialog"
		aria-hidden="true" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title">Xóa khuyến mãi</h4>
				</div>
				<div class="modal-body">
					<label style="align: center">Bạn có chắc muốn xóa khuyến
						mãi này khỏi danh sách không?</label>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary delpro" data-dismiss="modal"
						>Xóa</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">Hủy</button>
				</div>
			</div>
		</div>
	</div>

	<!-- View promotion detail information -->
	<div class="modal fade" id="view-detail" role="dialog"
		data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg">

			<div class="modal-content">
				<div style="background-color: #31b0d5" class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" style="text-align: center; color: white">Xem thông tin
						chương trình khuyến mãi</h4>
				</div>

				<div class="modal-body">
					<div>
						<!--Form điền thông tin khuyến mãi cần tạo -->
						<div class="form-horizontal" style="margin-right: 10px;"
							id="frmSearch" >
							<div class="form-group">
								<label class="control-label col-sm-2" for="email">Tên
									CTKM:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="view-name"
										readonly="readonly">
								</div>

							</div>
							<div class="form-group">
								<label class="control-label col-sm-2" for="pwd">Ngày Bắt
									Đầu:</label>
								<div class="col-sm-4">
									<input type="text" class="form-control" id="view-startDate"
										name="startDate" readonly="readonly">
								</div>
								<label class="control-label col-sm-2" for="pwd">Ngày Kết
									Thúc:</label>
								<div class="col-sm-4">
									<input type="text" class="form-control" id="view-endDate"
										name="endDate" readonly="readonly">
								</div>
							</div>
						</div>
						<!-- Danh sách chi tiết khuyến mãi -->
						<div>
							<table id="table_pro_detail" class="cell-border">
								<thead>
									<tr>
										<th></th>
										<th>Tên sản phẩm</th>
										<th>Giảm giá</th>
										<th></th>
										<th>Tùy chọn</th>
									</tr>
								</thead>
							</table>
						</div>
					</div>


				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-info"
						data-dismiss="modal">Đóng</button>
				</div>


			</div>
		</div>
	</div>
	<!-- Edit information promotion detail -->
	<div class="modal fade" id="edit-detail" role="dialog"
		data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg">

			<div class="modal-content">
				<div style="background-color: #31b0d5" class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" style="text-align: center; color: white">Sửa thông tin
						chương trình khuyến mãi</h4>
				</div>

				<div class="modal-body">
					<div>
						<!--Form điền thông tin khuyến mãi cần tạo -->
						<div class="form-horizontal" style="margin-right: 10px;">
							<div class="form-group">
								<label class="control-label col-sm-2" for="email">Tên
									CTKM:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="edit-name"
										>
								</div>

							</div>
							<div class="form-group">
								<label class="control-label col-sm-2" for="pwd">Ngày Bắt
									Đầu:</label>
								<div class="col-sm-4">
									<input type="date" class="form-control" id="edit-startDate"
										name="startDate" >
								</div>
								<label class="control-label col-sm-2" for="pwd">Ngày Kết
									Thúc:</label>
								<div class="col-sm-4">
									<input type="date" class="form-control" id="edit-endDate"
										name="endDate" >
								</div>
							</div>
						</div>
						<!-- Danh sách chi tiết khuyến mãi -->
						<div>
							<table id="table_edit_detail" class="cell-border">
								<thead>
									<tr>
										<th></th>
										<th>Tên sản phẩm</th>
										<th>Giảm giá</th>
										<th></th>
										<th>Tùy chọn</th>
									</tr>
								</thead>
							</table>
						</div>
					</div>


				</div>
				<div class="modal-footer">
				<button type="button" class="btn btn-info">Cập nhật</button>
					<button type="button" class="btn btn-info"
						data-dismiss="modal">Đóng</button>
				</div>


			</div>
		</div>
	</div>

	<!-- Edit detail modal -->
	<div id="modal-edit-detail" class="modal fade" tabindex="-1" role="dialog"
		aria-hidden="true" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="add-modal">Sửa chi tiết khuyến
						mãi</h4>
				</div>
				<div class="modal-body">
					<div>
						<table>

							<tr>
								<td><label>Tên sản phẩm</label></td>
								<td><select class="selectpicker form-control"
									id="edit-productName" name="productName">
										<option value="00">-Chọn sản phẩm-</option>
								</select></td>
							</tr>


							<tr>
								<td><label>Giảm giá (%)</label></td>
								<td>
									<div class="form-group">

										<input type='text' placeholder="Nhập % khuyến mãi"
											class="form-control" id="edit-discount" />

									</div>
								</td>
							</tr>

							<tr>
								<td colspan=2 align="right">
									<button type="button" class="btn btn-primary" id="add-detail">Thêm</button>
									<button type="button" class="btn btn-primary cancel"
										data-dismiss="modal">Hủy</button>
								</td>
							</tr>
						</table>

					</div>

				</div>
			</div>
		</div>
	</div>


	<spring:url value="/resources/js/jquery-1.12.4.js" var="jQuery" />
	<spring:url value="resources/js/bootstrap.min.js" var="bootstrapJS" />
	<spring:url value="resources/js/jquery.dataTables.min.js"
		var="dataTableJS" />
	<spring:url value="resources/js/dataTables.bootstrap.min.js"
		var="dataTableBootstrapJS" />
	<spring:url value="resources/js/customermanagement.js" var="appJS" />
|
	
	


	<!-- Delete detail modal-->
	<div id="delete-detail" class="modal fade" tabindex="-1" role="dialog"
		aria-hidden="true" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="deleteModal">Xóa khuyến mãi</h4>
				</div>
				<div class="modal-body">
					<label style="align: center">Bạn có chắc muốn xóa khuyến
						mãi này khỏi danh sách không?</label>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary deletedetail" data-dismiss="modal">Xóa</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal">Hủy</button>
				</div>
			</div>
		</div>
	</div>


	<spring:url value="resources/js/promotion.js" var="pro" />

	
	<script type="text/javascript" src="${pro}"></script>
	<script
		src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.js"></script>




</body>

</html>
