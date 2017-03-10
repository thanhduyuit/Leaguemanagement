<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<HTML>
<HEAD>
<TITLE>Show detail product</TITLE>
</HEAD>
<BODY>
	<DIV class="modal fade" id="showProduct" role="dialog">
		<DIV class="modal-dialog">
			<!-- Modal showdetail content-->
			<DIV class="modal-content">
				<DIV class="modal-header">
					<BUTTON type="button" class="close" data-dismiss="modal">&times;</BUTTON>
					<H4 class="modal-title">Thông tin sản phẩm</H4>
				</DIV>
				<FORM class="form-horizontal" id="show-product">
					<DIV class="modal-body">
						<!-- Field name product -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label">Tên sản phẩm</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="text" name="nameProduct" id="showNameProduct"
									class="form-control" disabled="disabled">
							</DIV>
						</DIV>
						<!-- Combobox product group -->
						<DIV class="form-group">
							<LABEL for="inputProductGroup"
								class="col-lg-3 control-label">Nhóm sản phẩm</LABEL>
							<DIV class="col-lg-9">
								<select class="form-control" name="productGroup"
									id="showProductGroup" disabled="disabled">
								</select>
							</DIV>
						</DIV>
						<!-- Field price -->
						<DIV class="form-group">
							<LABEL for="inputPriceProduct"
								class="col-lg-3 control-label">Giá sản phẩm</LABEL>
							<DIV class="col-lg-8">
								<INPUT type="number" class="form-control"
									name="priceProduct" id="showPriceProduct" disabled="disabled">
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
									id="showDescriptionProduct" class="form-control" disabled="disabled"></TEXTAREA>
							</DIV>
						</DIV>
						<!-- Field status -->
						<DIV class="form-group">
							<LABEL for="inputStatus" class="col-lg-3 control-label">Trạng
								thái</LABEL>
							<DIV class="col-lg-9">
								<LABEL class="radio-inline"> <INPUT type="radio"
									name="status" id="updateStatusTrue" value="1" checked="checked" disabled="disabled">
									Hiển thị
								</LABEL> <LABEL class="radio-inline" style="margin-left: 40px">
									<INPUT type="radio" name="status" id="showStatusFalse"
									value="0" disabled="disabled"> Ẩn
								</LABEL>
							</DIV>
						</DIV>
					</DIV>
					<DIV class="modal-footer">
						<BUTTON type="button" id="buttonCancelShowProduct"
							class="btn btn-primary" data-dismiss="modal">Hủy</BUTTON>
					</DIV>
				</FORM>
			</DIV>
		</DIV>
	</DIV>
</BODY>
</HTML>