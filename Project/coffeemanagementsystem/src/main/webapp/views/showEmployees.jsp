<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<HTML>
<HEAD>
<TITLE>Show detail employee</TITLE>
</HEAD>
<BODY>
	<DIV class="modal fade" id="showEmployee" role="dialog">
		<DIV class="modal-dialog">

			<!-- Modal show detail employee-->
			<DIV class="modal-content">
				<DIV class="modal-header">
					<BUTTON type="button" class="close" data-dismiss="modal">&times;</BUTTON>
					<H4 class="modal-title">Thông tin nhân viên</H4>
				</DIV>
				<FORM class="form-horizontal" id="show-employee">
					<DIV class="modal-body">
						<!-- Field name employee -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label">Tên nhân viên</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="text" id="showNameEmployee" class="form-control "
									name="nameEmployee" disabled="disabled">
							</DIV>
						</DIV>
						<!-- Field birthday employee -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label">Ngày sinh</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="date" class="form-control" name="birthday"
									id="showBirthday" disabled="disabled">
							</DIV>
						</DIV>
						<!-- Field numberphone employee -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label ">Số điện thoại</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="tel" class="form-control " name="numberPhone"
									id="showNumberPhone" disabled="disabled">
							</DIV>
						</DIV>
						<!-- Field idcard employee -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label ">CMND</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="text" class="form-control " name="idCard"
									id="showIdCard" disabled="disabled">
							</DIV>
						</DIV>
						<!-- Field city district combobox -->
						<DIV class="form-group">
							<LABEL class="col-lg-3 control-label ">Thành phố</LABEL>
							<DIV class="col-lg-3">
								<SELECT class="form-control " name="citySelect"
									id="showCitySelect" style="color: #999999;" disabled="disabled">
								</SELECT>
							</DIV>

							<DIV class="col-lg-2">
								<LABEL for="inputAddress" class="col-lg-3 control-label ">Quận</LABEL>
							</DIV>
							<DIV class="col-lg-4">
								<SELECT class="form-control " name="districtSelect"
									id="showDistrictSelect" style="color: #999999;"
									disabled="disabled">
								</SELECT>
							</DIV>
						</DIV>
						<!-- Field address employee -->
						<DIV class="form-group">
							<LABEL for="inputAddress" class="col-lg-3 control-label ">Địa
								chỉ</LABEL>
							<DIV class="col-lg-3">
								<INPUT type="text" class="form-control " name="address"
									id="showAddress" disabled="disabled">
							</DIV>

							<DIV class="col-lg-2">
								<LABEL for="inputAddress" class="col-lg-3 control-label ">Phường</LABEL>
							</DIV>
							<DIV class="col-lg-4">
								<SELECT class="form-control " name="wardSelect"
									id="showWardSelect" style="color: #999999;" disabled="disabled">
								</SELECT>
							</DIV>

						</DIV>
						<!-- Field date employee -->
						<DIV class="form-group">
							<LABEL for="inputtDate" class="col-lg-3 control-label ">Ngày
								bắt đầu</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="date" class="form-control " name="employeetDate"
									id="showEmployeetDate" disabled="disabled">
							</DIV>
						</DIV>
						<!-- Field enddate employee -->
						<DIV class="form-group">
							<LABEL for="inputEndDate" class="col-lg-3 control-label">Ngày
								kết thúc</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="date" class="form-control" id="showEmployeeEndDate"
									disabled="disabled">
							</DIV>
						</DIV>
						<!-- Field salary employee -->
						<DIV class="form-group">
							<LABEL for="inputSalary" class="col-lg-3 control-label ">Lương
							</LABEL>
							<DIV class="col-lg-8">
								<INPUT type="number" class="form-control " name="salary"
									id="showSalary" disabled="disabled">
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
									name="gender" id="showGenderTrue" value="1" checked="checked"
									disabled="disabled"> Nam
								</LABEL> <LABEL class="radio-inline" style="margin-left: 40px">
									<INPUT type="radio" name="gender" id="showGenderFalse"
									value="0" disabled="disabled"> Nữ
								</LABEL>
							</DIV>
						</DIV>
						<!-- Field position employee -->
						<DIV class="form-group">
							<LABEL for="inputPosition" class="col-lg-3 control-label ">Chức
								vụ</LABEL>
							<DIV class="col-lg-9">
								<INPUT type="text" class="form-control " name="position"
									id="showPosition" disabled="disabled">
							</DIV>
						</DIV>
						<!-- Field description employee -->
						<DIV class="form-group">
							<LABEL for="inputDescribe" class="col-lg-3 control-label">Mô
								tả</LABEL>
							<DIV class="col-lg-9">
								<textarea class="form-control" id="showDescription"
									disabled="disabled"></textarea>
							</DIV>
						</DIV>
					</DIV>
					<DIV class="modal-footer">
						<BUTTON type="button" id="buttonCancelShowEmployee"
							class="btn btn-primary" data-dismiss="modal">Hủy</BUTTON>
					</DIV>
				</FORM>
			</DIV>
		</DIV>
	</DIV>
</BODY>
</HTML>