<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<HTML>
<HEAD>
<TITLE>Update employee</TITLE>
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

#update-employee {
	font-size: 14px;
}
</STYLE>
</HEAD>
<BODY>
	<DIV class="modal fade" id="updateEmployee" role="dialog">
		<DIV class="modal-dialog">
			<!-- Modal update employee-->
			<DIV class="modal-content">
				<DIV class="modal-header">
					<BUTTON type="button" class="close" data-dismiss="modal">&times;</BUTTON>
					<H4 class="modal-title">Cập nhật thông tin nhân viên</H4>
				</DIV>
				<FORM class="form-horizontal" id="update-employee">
					<DIV class="modal-body">
						<!-- Field id employee hidden -->
						<INPUT type="hidden" id="updateIdEmployee">
						<!-- Field name employee -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label star">Tên nhân viên</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="text" id="updateNameEmployee"
									class="form-control validate" name="nameEmployee">
							</DIV>
						</DIV>
						<!-- Field birthday employee -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label star">Ngày sinh</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="date" class="form-control validate" name="birthday"
									id="updateBirthday">
								<DIV id="updateErrorDate" class="error"></DIV>
							</DIV>
						</DIV>
						<!-- Field numberphone employee -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label star">Số  điện thoại</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="tel" class="form-control validate"
									name="numberPhone" id="updateNumberPhone">
							</DIV>
						</DIV>
						<!-- Field idcard employee -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label star">CMND</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="text" class="form-control validate" name="idCard"
									id="updateIdCard">
							</DIV>
						</DIV>
						<!-- Field city district combobox -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label star">Thành
								phố</LABEL>
							<DIV class="col-lg-3">
								<SELECT class="form-control validate" name="citySelect"
									id="updateCitySelect" style="color: #999999;">
								</SELECT>
							</DIV>
							
							<DIV class="col-lg-2">
								<LABEL for="inputAddress" class="col-lg-3 control-label star">Quận</LABEL>
							</DIV>
							<DIV class="col-lg-4">
								<SELECT class="form-control validate" name="districtSelect"
									id="updateDistrictSelect" style="color: #999999;">
								</SELECT>
							</DIV>
						</DIV>
						<!-- Field address employee -->
						<DIV class="form-group">
							<LABEL for="inputAddress" class="col-lg-3 control-label star">Địa
								chỉ</LABEL>
							<DIV class="col-lg-3">
								<INPUT type="text" class="form-control validate" name="address"
									id="updateAddress" placeholder="Số nhà">
							</DIV>
							
							<DIV class="col-lg-2">
								<LABEL for="inputAddress" class="col-lg-3 control-label star">Phường</LABEL>
							</DIV>
							<DIV class="col-lg-4">
								<SELECT class="form-control validate" name="wardSelect"
									id="updateWardSelect" style="color: #999999;">
								</SELECT>
							</DIV>

						</DIV>
						<!-- Field stardate employee -->
						<DIV class="form-group">
							<LABEL for="inputStartDate" class="col-lg-3 control-label star">Ngày
								bắt đầu</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="date" class="form-control validate"
									name="employeeStartDate" id="updateEmployeeStartDate">
							</DIV>
						</DIV>
						<!-- Field enddate employee -->
						<DIV class="form-group">
							<LABEL for="inputEndDate" class="col-lg-3 control-label">Ngày
								kết thúc</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="date" class="form-control"
									id="updateEmployeeEndDate">
								<DIV id="updateErrorEndDate" class="error"></DIV>
							</DIV>
						</DIV>
						<!-- Field salary employee -->
						<DIV class="form-group">
							<LABEL for="inputSalary" class="col-lg-3 control-label star">Lương
							</LABEL>
							<DIV class="col-lg-8">
								<INPUT type="number" class="form-control validate" name="salary"
									id="updateSalary">
							</DIV>
							<DIV class="col-lg-1">
								<H4 style="margin-left: -22px;">VNĐ</H4>
							</DIV>
						</DIV>
						<!-- Field gender employee -->
						<DIV class="form-group">
							<LABEL for="inputGender" class="col-lg-3 control-label">Giới
								tính</LABEL>
							<DIV class="col-lg-9">
								<LABEL class="radio-inline"> <INPUT type="radio"
									name="gender" id="updateGenderTrue" value="1" checked="checked">
									Nam
								</LABEL> <LABEL class="radio-inline" style="margin-left: 40px">
									<INPUT type="radio" name="gender" id="updateGenderFalse"
									value="0"> Nữ
								</LABEL>
							</DIV>
						</DIV>
						<!-- Field position employee -->
						<DIV class="form-group">
							<LABEL for="inputPosition" class="col-lg-3 control-label star">Chức
								vụ</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="text" class="form-control validate" name="position"
									id="updatePosition">
							</DIV>
						</DIV>
						<!-- Field description employee -->
						<DIV class="form-group">
							<LABEL for="inputDescribe" class="col-lg-3 control-label">Mô
								tả</LABEL>
							<DIV class="col-lg-9">
								<textarea class="form-control" id="updateDescription"></textarea>
							</DIV>
						</DIV>
					</DIV>
					<DIV class="modal-footer">
						<BUTTON type="submit" id="submitUpdateEmployee"
							class="btn btn-primary">Lưu</BUTTON>
						<BUTTON type="button" id="buttonCancelUpdateEmployee"
							class="btn btn-primary" data-dismiss="modal">Hủy</BUTTON>
					</DIV>
				</FORM>
			</DIV>
		</DIV>
	</DIV>
</BODY>
</HTML>