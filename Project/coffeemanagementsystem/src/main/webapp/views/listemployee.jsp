<%@page import="org.json.JSONObject"%>
<%@page import="org.json.JSONArray"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*"%>
<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
	<div class="panel panel-info center-block"
		style="width: 90%; height: 47%; margin-top: 1%; margin-bottom: 3%">
		<div class="panel-heading">Tìm kiếm</div>
		<div class="panel-body">
			<form class="form-horizontal" id="search" action="a" method="POST">
				<div class="form-group">
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">Tên nhân viên:</label>
							<div class="col-sm-7">
								<input type="text" class="form-control" id="employeeName"
									name="employeeName">
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">Chức vụ:</label>
							<div class="col-sm-7">
								<input type="text" class="form-control" id="employeePosition"
									name="employeePosition">
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">Giới tính:</label>
							<div class="col-sm-7">
								<select class="selectpicker form-control" id="employeeGender"
									name="employeeGender">
									<option value="">Không chọn</option>
									<option value="True">Nam</option>
									<option value="False">Nữ</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">Địa chỉ:</label>
							<div class="col-sm-7">
								<input type="text" class="form-control" id="employeeAddress"
									name="employeeAddress">
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">CMND:</label>
							<div class="col-sm-7">
								<input type="number" class="form-control" id="employeeIdCard"
									name="employeeIdCard">
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">Số điện thoại:</label>
							<div class="col-sm-7">
								<input type="number" class="form-control" id="employeePhone"
									name="employeePhone">
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">Phường:</label>
							<div class="col-sm-7">
								<select class="selectpicker form-control" id="employeeWard"
									name="employeeWard">
									<option value="">Không chọn</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">Quận/Huyện:</label>
							<div class="col-sm-7">
								<select class="selectpicker form-control" id="employeeDistrict"
									name="employeeDistrict">
									<option value="">Không chọn</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">Tỉnh/Thành phố:</label>
							<div class="col-sm-7">
								<select class="selectpicker form-control" id="employeeCity"
									name="employeeCity">
									<option value="">Không chọn</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">Ngày sinh:</label>
							<div class="col-sm-7">
								<select class="selectpicker form-control" id="employeeBirthDay"
									name="employeeBirthDay">
									<option value="">Không chọn</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">Tháng sinh:</label>
							<div class="col-sm-7">
								<select class="selectpicker form-control" id="employeeBirthMonth"
									name="employeeBirthMonth">
									<option value="">Không chọn</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="row">
							<label class="control-label col-sm-5">Năm sinh:</label>
							<div class="col-sm-7">
								<select class="selectpicker form-control" id="employeeBirthYear"
									name="employeeBirthYear">
									<option value="">Không chọn</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
				<label class="control-label col-sm-2">Lương:</label>
					<div class="col-sm-5">
						<div class="row">
							<div class="col-sm-10">
								<div class="row">
									<div class="col-sm-3">
										<span>Từ</span>
									</div>
									<div class="col-sm-8">
										<input type="text" class="form-control" id="salaryFrom"
											name="salaryFrom"
											onkeyup="this.value=FormatNumber(this.value);">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-5">
						<div class="row">
							<div class="col-sm-10">
								<div class="row">
									<div class="col-sm-3">
										<span>đến</span>
									</div>
									<div class="col-sm-8">
										<input type="text" class="form-control" id="salaryTo"
											name="salaryFrom"
											onkeyup="this.value=FormatNumber(this.value);">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-2">Khoảng thời gian:</label>
					<div class="col-sm-5">
						<div class="row">
							<div class="col-sm-10">
								<div class="row">
									<div class="col-sm-3">
										<span>Từ</span>
									</div>
									<div class="col-sm-8">
										<input type="date" class="form-control dateformat" id="startDate"
											name="startDate">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-5">
						<div class="row">
							<div class="col-sm-10">
								<div class="row">
									<div class="col-sm-3">
										<span>đến</span>
									</div>
									<div class="col-sm-8">
										<input type="date" class="form-control dateformat" id="endDate"
											name="endDate">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-9"></div>
					<div class="col-sm-2 pull-right">
						<button type="submit" class="btn btn-default">Áp dụng</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	<table id="example" class="display"
		style="width: 90%; height: 65%; margin-left: 5%">
		<thead>
			<tr>
				<th>id</th>
				<th>Tên nhân viên</th>
				<th>Giới tính</th>
				<th>Số điện thoại</th>
				<th>Số CMND</th>
				<th>Ngày sinh</th>
				<th>Chức vụ</th>
				<th>Thao tác</th>
			</tr>
		</thead>
	</table>
	<div class="right-block"
		style="width: 90%; height: 4%; margin: 1%;">
		<!-- <a href="javascript: void(0)" class="btn btn-primary exportEmployeeExcel">Xuất excel</a> --> <a
			href="javascript: void(0)" class="btn btn-primary addformEmployee"
			data-toggle="modal" data-target="#addEmployee">Thêm nhân viên</a>
		<div id="addformEmployee"></div>
	</div>
	<div class="modal fade" id="delEmployeeModal" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">Bạn muốn xóa nhân viên này không?</h4>
				</div>
				<div class="modal-body" align="right">
<!-- 				<input type="hidden" id="idemtoDelete"/> -->
					<button type="button" class="btn btn-primary" id="idemtoDelete"
						data-dismiss="modal" >Đồng ý</button>
					<button type="button" class="btn btn-primary" class="close"
						data-dismiss="modal">Hủy</button>
				</div>
			</div>
		</div>
	</div>
	<%@ include file="updateEmployees.jsp" %>
	<%@ include file="showEmployees.jsp" %>
</body>
<script type="text/javascript" src="resources/js/validateemployee.js"></script>
<script type="text/javascript" src="resources/js/employee.js"></script>
<script type="text/javascript" src="resources/js/addEmployee.js"></script>
</html>