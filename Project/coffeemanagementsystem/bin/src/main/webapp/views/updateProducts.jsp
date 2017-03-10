<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
	
<style type="text/css">
	footer .star:after{
		content: "*";
		color: red;
	}
	
	.error{
		color: red;
	}
</style>

</head>
<body>
	<!-- <button type="button" id="buttonAddProduct" class="btn  btn-lg btn-primary" data-toggle="modal" data-target="#addProduct">Thêm sản phẩm</button>
	 --><div class="modal fade" id="updateProduct" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="text-transform: capitalize; padding-left: 38%; background-color: #337ab7; color: #fff;">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Cập nhật sản phẩm</h4>
				</div>
				<form class="form-horizontal" style="font-size: 14px;"
						method="post" action="" id="update-product">
					<div class="modal-body">
						<input type="hidden" id="updateIdProduct">
						<div class="form-group">
							<label for="inputNameProduct1"
								class="col-lg-3 control-label star">Tên sản phẩm</label>
							<div class="col-lg-9">
								<input type="text" name="nameProduct" id="updateNameProduct"
									class="form-control nameProduct validate">
							</div>
						</div>

						<div class="form-group">
							<label for="inputProductGroup"
								class="col-lg-3 control-label star">Nhóm sản phẩm</label>
							<div class="col-lg-9">
								<select class="form-control validate" name="productGroup" id="updateProductGroup" style="color: #999999;">
								</select>
							</div>
						</div>
						<div class="form-group">
							<label for="inputPriceProduct"
								class="col-lg-3 control-label star">Giá sản phẩm</label>
							<div class="col-lg-8">
								<input type="number" class="form-control validate"
									name="priceProduct" id="updatePriceProduct">
							</div>
							<div class="col-lg-1">
								<h4 style="margin-left: -22px;">VNĐ</h4>
							</div>
						</div>
						
						<div class="form-group">
							<label for="inputDescriptionProduct"
								class="col-lg-3 control-label">Mô tả</label>
							<div class="col-lg-9">
								<textarea rows="10" cols="6" name="descriptionProduct" id="updateDescriptionProduct"
									class="form-control"></textarea>
							</div>
						</div>
						
						<div class="form-group">
							<label for="inputStatus" class="col-lg-3 control-label">Trạng
								thái</label>
							<div class="col-lg-9">
								<label class="radio-inline"> <input type="radio"
									name="status" id="updateStatus" value="1" checked>
									Hiển thị
								</label> <label class="radio-inline" style="margin-left: 40px">
									<input type="radio" name="status" id="updateStatus" value="0">
									Ẩn
								</label>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="submit" id="submitUpdateProduct"	class="btn btn-primary">Save</button>
						<button type="button" id="buttonCancelUpdateProduct" class="btn btn-primary" data-dismiss="modal">Cancel</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<script type="text/javascript">		
	</script>
</body>
</html>