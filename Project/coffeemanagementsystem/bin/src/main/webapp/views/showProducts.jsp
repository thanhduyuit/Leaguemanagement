<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
</head>
<body>
	<!-- <button type="button" id="buttonAddProduct" class="btn  btn-lg btn-primary" data-toggle="modal" data-target="#addProduct">Thêm sản phẩm</button>
	 --><div class="modal fade" id="showProduct" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="text-transform: capitalize; padding-left: 38%; background-color: #337ab7; color: #fff;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Thông tin sản phẩm</h4>
				</div>
				<form class="form-horizontal" style="font-size: 14px;"
						method="post" action="" id="show-product">
					<div class="modal-body">
						<div class="form-group">
							<label for="inputNameProduct1"
								class="col-lg-3 control-label star">Tên sản phẩm</label>
							<div class="col-lg-9">
								<input type="text" name="nameProduct" id="showNameProduct"
									class="form-control nameProduct validate" disabled="disabled">
							</div>
						</div>

						<div class="form-group">
							<label for="inputProductGroup"
								class="col-lg-3 control-label star">Nhóm sản phẩm</label>
							<div class="col-lg-9">
								<select class="form-control validate" name="productGroup" id="showProductGroup" style="color: #999999;" disabled="disabled">
								</select>
							</div>
						</div>
						<div class="form-group">
							<label for="inputPriceProduct"
								class="col-lg-3 control-label star">Giá sản phẩm</label>
							<div class="col-lg-8">
								<input type="number" class="form-control validate"
									name="priceProduct" id="showPriceProduct" disabled="disabled">
							</div>
							<div class="col-lg-1">
								<h4 style="margin-left: -22px;">VNĐ</h4>
							</div>
						</div>
						
						<div class="form-group">
							<label for="inputDescriptionProduct"
								class="col-lg-3 control-label">Mô tả</label>
							<div class="col-lg-9">
								<textarea rows="10" cols="6" name="descriptionProduct" id="showDescriptionProduct"
									class="form-control" disabled="disabled"></textarea>
							</div>
						</div>
						
						<div class="form-group">
							<label for="inputStatus" class="col-lg-3 control-label">Trạng
								thái</label>
							<div class="col-lg-9">
								<label class="radio-inline"> <input type="radio"
									name="status" id="showStatus" value="1" checked disabled="disabled">
									Hiển thị
								</label> <label class="radio-inline" style="margin-left: 40px">
									<input type="radio" name="status" id="showStatus" value="0" disabled="disabled">
									Ẩn
								</label>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" id="buttonCancelShowProduct" class="btn btn-primary" data-dismiss="modal">Cancel</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<script type="text/javascript">		
	</script>
</body>
</html>