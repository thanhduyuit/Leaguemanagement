<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
	<div class="modal fade" id="myModalUpdate" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header" style="background-color: #588DBF;">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span> <span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title" style="color: white;" id="myModalLabel">Cập
						nhật nhập kho</h4>
				</div>
				<!-- form update -->
				<div class="modal-body">
					<form id="updateWarehouse" action="updateWarehouseServlet"
						method="post">
						<input type="text" class="form-control" id="update_inputID"
							name="update_inputID" style="visibility: hidden;">
						<div class="form-group">
							<label for="exampleInputPassword1">Loại hàng</label> <select
								class="form-control" id="loaiHangUpdate">
							</select> <br> <span class="span" id="loaiHangInfo"></span>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Tên hàng</label> <input
								type="text" class="form-control" id="update_inputName"
								placeholder="Nhập tên hàng" name="update_inputName"><br>
							<span class="span" id="update_nameErr"></span>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Số lượng</label> <input
								type="number" class="form-control" id="update_inputSl"
								placeholder="Nhập số lượng" name="update_inputSl" /><br> <span
								class="span" id="update_slErr"></span>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Giá</label> <input
								type="number" class="form-control" id="update_inputGia"
								placeholder="Nhập giá" name="update_inputGia" /><br> <span
								class="span" id="update_giaErr"></span>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default"
								data-dismiss="modal">Hủy</button>
							<button id="submit_update" type="submit" class="btn btn-primary">Cập nhật</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>