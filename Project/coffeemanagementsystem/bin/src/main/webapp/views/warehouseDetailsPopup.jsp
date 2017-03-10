<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

	<div class="modal fade" id="myModal" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Xem chi tiết</h4>
					<hr>
					<button type="button" id="btnViewDetails" class="btn btn-success">Kế tiếp</button>
										
				</div>

				<div class="modal-body">
					<div class="form-group">
						<label for="inputdefault">Mã mặt hàng</label> <input
							disabled="disabled" class="form-control" id="idWH" type="text">
					</div>

					<div class="form-group">
						<label for="inputdefault">Tên mặt hàng</label> <input
							disabled="disabled" class="form-control" id="nameWH" type="text">
					</div>

					<div class="form-group">
						<label for="inputdefault">Loại mặt hàng</label> <input
							disabled="disabled" class="form-control" id="typeWH" type="text">
					</div>

					<div class="form-group">
						<label for="inputdefault">Giá</label> <input disabled="disabled"
							class="form-control" id="priceWH" type="text">
					</div>

					<div class="form-group">
						<label for="inputdefault">Số lượng</label> <input
							disabled="disabled" class="form-control" id="quantityWH"
							type="text">
					</div>

					<div class="form-group">
						<label for="comment">Mô tả cho mặt hàng</label>
						<textarea disabled="disabled" class="form-control" rows="5"
							id="descriptionWH"></textarea>
					</div>

					<div class="form-group">
						<label for="inputdefault">Cửa hàng đang quản lý</label> <input
							disabled="disabled" class="form-control" id="storeWH" type="text">
					</div>

				</div>


				<div class="modal-footer">
				    <b style="float: left;">Mã mặt hàng tiếp theo: <span id="indexViewDetails"></span></b>
					<button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
				</div>
						
			</div>

		</div>
	</div>
	<!-- Modal -->
	
	<script type="text/javascript" src="resources/js/warehouseViewDetails/viewDetails.js"></script>




