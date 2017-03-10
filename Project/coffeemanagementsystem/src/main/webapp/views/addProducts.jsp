	<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML >
<HTML>
<HEAD>
	<META http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<TITLE>Thêm sản phẩm</TITLE>
	
	<STYLE type="text/css">
		.star:after{
			content: "*";
			color: red;
		}
		
		.error{
			color: red;
		}
	</STYLE>

</HEAD>
<BODY>
	<DIV class="modal fade" id="addProduct" role="dialog">
		<DIV class="modal-dialog">

			<!-- Modal content-->
			<DIV class="modal-content">
				<DIV class="modal-header"
					style="text-transform: capitalize; padding-left: 38%; background-color: #337ab7; color: #fff;">
					<BUTTON type="button" class="close" data-dismiss="modal">&times;</BUTTON>
					<H4 class="modal-title">Thêm sản phẩm</H4>
				</DIV>
				<FORM class="form-horizontal" style="font-size: 14px;"
						method="post" action="" id="addProduct1">
					<DIV class="modal-body">
					
						<DIV class="form-group">
							<LABEL for="inputNameProduct1"
								class="col-lg-3 control-label star">Tên sản phẩm</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="text" name="nameProduct" id="nameProduct"
									class="form-control nameProduct validate"
									placeholder="Tên sản phẩm">
							</DIV>
						</DIV>

						<DIV class="form-group">
							<LABEL for="inputProductGroup"
								class="col-lg-3 control-label star">Nhóm sản phẩm</LABEL>
							<DIV class="col-lg-9">
								<SELECT class="form-control validate" name="productGroup" id="productGroup" style="color: #999999;">
									<OPTION value="" selected="selected">Nhóm sản phẩm</OPTION>

								</SELECT>
								
							</DIV>
						</DIV>
						<DIV class="form-group">
							<LABEL for="inputPriceProduct"
								class="col-lg-3 control-label star">Giá sản phẩm</LABEL>
							<DIV class="col-lg-8">
								<INPUT type="number" class="form-control validate"
									name="priceProduct" id="priceProduct" placeholder="Giá sản phẩm">
							</DIV>
							<DIV class="col-lg-1">
								<H4 style="margin-left: -22px;">VNĐ</H4>
							</DIV>
						</DIV>
						
						<DIV class="form-group">
							<LABEL for="inputDescriptionProduct"
								class="col-lg-3 control-label">Mô tả</LABEL>
							<DIV class="col-lg-9">
								<TEXTAREA rows="10" cols="6" name="descriptionProduct" id="descriptionProduct"
									class="form-control"></TEXTAREA>
							</DIV>
						</DIV>
						
						<DIV class="form-group">
							<LABEL for="inputStatus" class="col-lg-3 control-label">Trạng
								thái</LABEL>
							<DIV class="col-lg-9">
								<LABEL class="radio-inline"> 
									<INPUT type="radio"	name="status" id="status" value="1" checked>
									Hiển thị
								</LABEL> 
								<LABEL class="radio-inline" style="margin-left: 40px">
									<INPUT type="radio" name="status" id="status" value="0">
									Ẩn
								</LABEL>
							</DIV>
						</DIV>
					</DIV>
					<DIV class="modal-footer">
						<BUTTON type="submit" id="submitAddProduct"	class="btn btn-primary">Thêm</BUTTON>
						<BUTTON type="button" id="buttonCancelAddProduct" class="btn btn-primary" data-dismiss="modal">Hủy</BUTTON>
					</DIV>
				</FORM>
			</DIV>
		</DIV>
	</DIV>

</BODY>
</HTML>