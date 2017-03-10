<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<HTML>
<HEAD>
<TITLE>Update product</TITLE>

<STYLE type="text/css">
.star:after {
	content: "*";
	color: #FF0000;
}

.error {
	color: #FF0000;
}

.modal-header {
	text-transform: capitalize; 
	text-align: center; 
	background-color: #337ab7; 
	color: #fff;
}

#update-product {
	font-size: 14px;
}

#updateProductGroup {
	color: #999999;
}
</STYLE>

</HEAD>
<BODY>
	<DIV class="modal fade" id="updateProduct" role="dialog">
		<DIV class="modal-dialog">

			<!-- Modal update product-->
			<DIV class="modal-content">
				<DIV class="modal-header">
					<BUTTON type="button" class="close" data-dismiss="modal">&times;</BUTTON>
					<H4 class="modal-title">Cập nhật sản phẩm</H4>
				</DIV>

				<FORM class="form-horizontal" id="update-product">
					<DIV class="modal-body">
						<!-- Field id product  -->
						<INPUT type="hidden" id="updateIdProduct">
						<!-- Field name product -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label star">Tên sản phẩm</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="text" name="nameProduct" id="updateNameProduct"
									class="form-control validate">
							</DIV>
						</DIV>
						<!-- Combobox product group -->
						<DIV class="form-group">
							<LABEL for="inputProductGroup"
								class="col-lg-3 control-label star">Nhóm sản phẩm</LABEL>
							<DIV class="col-lg-9">
								<select class="form-control validate" name="productGroup"
									id="updateProductGroup">
								</select>
							</DIV>
						</DIV>
						<!-- Field price -->
						<DIV class="form-group">
							<LABEL for="inputPriceProduct"
								class="col-lg-3 control-label star">Giá sản phẩm</LABEL>
							<DIV class="col-lg-8">
								<INPUT type="number" class="form-control validate"
									name="priceProduct" id="updatePriceProduct">
							</DIV>
							<DIV class="col-lg-1">
								<H4 style="margin-left: -22px;">VNĐ</H4>
							</DIV>
						</DIV>
						<!-- Field description -->
						<DIV class="form-group">
							<LABEL for="inputDescriptionProduct"
								class="col-lg-3 control-label">Mô tả</LABEL>
							<DIV class="col-lg-9">
								<TEXTAREA rows="10" cols="6" name="descriptionProduct"
									id="updateDescriptionProduct" class="form-control"></TEXTAREA>
							</DIV>
						</DIV>
						<!-- Field status -->
						<DIV class="form-group">
							<LABEL for="inputStatus" class="col-lg-3 control-label">Trạng
								thái</LABEL>
							<DIV class="col-lg-9">
								<LABEL class="radio-inline"> <INPUT type="radio"
									name="status" id="updateStatusTrue" value="1" checked="checked">
									Hiển thị
								</LABEL> <LABEL class="radio-inline" style="margin-left: 40px">
									<INPUT type="radio" name="status" id="updateStatusFalse"
									value="0"> Ẩn
								</LABEL>
							</DIV>
						</DIV>
					</DIV>
					
					<DIV class="modal-footer">
						<BUTTON type="submit" id="submitUpdateProduct"
							class="btn btn-primary">Lưu</BUTTON>
						<BUTTON type="button" id="buttonCancelUpdateProduct"
							class="btn btn-primary" data-dismiss="modal">Hủy</BUTTON>
					</DIV>
				</FORM>
			</DIV>
		</DIV>
	</DIV>
</BODY>
</HTML>