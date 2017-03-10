<!-- 
@project coffeemanagementsystem
@file GroupProduct.js
@author TuanVT2
@date Jan 18, 2017
@version_java 1.8.0_111
 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- style css bootstrap -->
<!-- style css datatable -->
<!-- set Icon page -->
<title>Group product</title>

<style type="text/css">

</style>
</head>
<body>
	<!-- table data -->
	<div>
		<button type="button" class="btn btn-default btn-arrow-left" id="backtolistproduct">
			<span class="glyphicon glyphicon-arrow-left" ></span>
			Trở lại
		</button>
		<h1>Nhóm sản phẩm</h1>

		<table id="table_id" class="display">
			<thead>
				<tr>
					<th>ID</th>
					<th>Tên nhóm sản phẩm</th>
					<th>Miêu tả</th>
					<th>Hoạt động</th>
				</tr>
			</thead>

		</table>

		<div>

			<div>
			

				<!-- button add product group -->
				<button type="button" class="btn btn-success navbar-right"
					id="addgroup" data-toggle="modal" data-target="#addmodal"
					onclick="resetaddmodal();"  style="margin-right: 0.25%;">Thêm
					nhóm sản phẩm</button>
			</div>


		</div>
	</div>
	<!-- modal delete record -->

	<div class="modal fade" id="deletemodal" role="dialog">
		<div class="modal-dialog">


			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">Bạn muốn xóa Nhóm sản
						phẩm này ?</h4>
				</div>
				<div class="modal-body" align="center">
					<button type="button" class="btn btn-danger" data-dismiss="modal"
						id="deleteok">Có</button>
					<button type="button" class="btn btn-success" class="close"
						data-dismiss="modal">Không</button>
				</div>

			</div>

		</div>
	</div>
	<!--  edit productgroup modal -->

	<div class="modal fade" id="editmodal" role="dialog">
		<div class="modal-dialog">

			<!-- Title modal -->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">Sửa nhóm sản phẩm</h4>
				</div>

				<div class="modal-body" align="center"></div>
				<form class="form-horizontal" data-toggle="validator" role="form"
					id="addform">
					<div class="form-group">

						<!-- input edit name productgroup -->
						<label class="control-label col-sm-3" for="namegroup">Tên
							Nhóm:</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="namegroupedit"
								placeholder="Nhập tên nhóm"
								data-validation="required">
						</div>
					</div>
					<!-- input edit description productgroup -->
					<div class="form-group">
						<label class="control-label col-sm-3" for="desc">Miêu tả:</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="descriptionedit"
								placeholder="Nhập miêu tả" 
								>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10"></div>
					</div>
					<div class="form-group" align="center">
						<div class="col-sm-offset-2 col-sm-10">
							<input type="hidden" id="idedit">


							<!-- button submit edit product group -->
							<button type="submit" class="btn btn-success" id="editgroup"
								data-dismiss="modal" onclick="editgroupproduct();">Sửa</button>
							<!-- button cancel edit product group -->
							<button type="button" class="btn btn-danger" class="close"
								data-dismiss="modal">Hủy</button>
						</div>
					</div>
				</form>

			</div>

		</div>
	</div>
	<!-- model add group product -->
	<div class="modal fade" id="addmodal" role="dialog"
		data-toggle="validator">
		<div class="modal-dialog">


			<div class="modal-content">
				<!-- title  -->
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">Thêm nhóm sản phẩm</h4>
				</div>
				<div class="modal-body" align="center"></div>
				<form class="form-horizontal" data-toggle="validator" id="addproductgroupmodal">
					<!-- input name product group -->
					<div class="form-group">
						<label class="control-label col-sm-3" for="namegroup">Tên
							Nhóm:</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="namegroupadd"
								placeholder="Nhập tên nhóm" 
								data-validation="required" />
						</div>
					</div>
					<!-- input description product group -->
					<div class="form-group">
						<label class="control-label col-sm-3" for="desc">Miêu tả:</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="descriptionadd"
								placeholder="Nhập miêu tả" 
								 />
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10"></div>
					</div>
					<div class="form-group" align="center">
						<div class="col-sm-offset-2 col-sm-10">
							<!-- button submit add product group -->
							<button type="submit" class="btn btn-success" id="addgroupinmodal" 
								class="close" data-dismiss="modal"
								onclick="creategroupproduct();" disabled="disabled">Thêm</button>

							<!-- button cancel add product group -->
							<button type="button" class="btn btn-danger" class="close"
								data-dismiss="modal">Hủy</button>
						</div>

					</div>
				</form>

			</div>

		</div>
	</div>
	<!-- import validate page -->
	<script type="text/javascript"
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>
	<!-- import javascript page -->
	<script type="text/javascript" src="resources/js/GroupProduct.js"></script>
	<script>

	$.validate({
		 modules : 'toggleDisabled',
		 
		 showErrorDialogs : false
	});
	
	</script>
</body>

</html>