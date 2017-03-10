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
<body id="bodyproduct">
	<div class="panel panel-info center-block"
		style="width: 72%; height: 32%; margin-top: 1%">
		<div class="panel-heading">Tìm kiếm</div>
		<div class="panel-body">
			<form class="form-horizontal" id="search"
				action="a" method="POST">
				<div class="form-group">
					<label class="control-label col-sm-3">Tên sản phẩm:</label>
					<div class="col-sm-6">
						<input type="text" class="form-control" id="productName"
							name="productName">
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-3">Nhóm sản phẩm:</label>
					<div class="col-sm-6">
						<select class="selectpicker form-control" id="productGroupName"
							name="productGroupName">
							
						</select>

					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-3">Giá:</label>
					<div class="col-sm-3">
						<div class="row">
							<div class="col-sm-1">
								<span>Từ</span>
							</div>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="pricefrom"
									name="priceFrom" onkeyup="this.value=FormatNumber(this.value);">
							</div>
							<div class="col-sm-1">
								<span></span>
							</div>
						</div>

					</div>
					<div class="col-sm-3">
						<div class="row">
							<div class="col-sm-1">
								<span>đến</span>
							</div>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="priceto"
									name="priceTo" onkeyup="this.value=FormatNumber(this.value);">
							</div>
							<div class="col-sm-1">
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-5 pull-right">
						<button type="submit" class="btn btn-default">Áp dụng</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	<div class="modal fade" id="delProductModal" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title" align="center">Bạn muốn xóa sản phẩm này không?</h4>
				</div>
				<div class="modal-body" align="right">
				<input type="hidden" id="idtoDelete"/>
					<button type="button" class="btn btn-primary" id="idtoDelete"
						data-dismiss="modal" >Có</button>
					<button type="button" class="btn btn-primary" class="close"
						data-dismiss="modal">Không</button>
				</div>
			</div>
		</div>
	</div>
	<table id="example" class="display" style="width: 90%; height: 65%;">
		<thead>
			<tr>
				<th>id</th>
				<th>groupid</th>
				<th>Tên sản phẩm</th>
				<th>Tên nhóm sản phẩm</th>
				<th>Giá</th>
				<th>Mô tả</th>
				<th>Thao tác</th>
				
			</tr>
		</thead>
	</table>
	<div class="btn-group btn-group-justified center-block"
		style="width: 90%; height: 4%; margin: 1%;">
		<a href="javascript: void(0)" class="btn btn-primary" id="productgroupform">Nhóm sản phẩm</a> 
		<a href="javascript: void(0)"	class="btn btn-primary">Xuất excel</a> 
		<a href="javascript: void(0)"	class="btn btn-primary" data-toggle="modal" data-target="#addProduct">Thêm sản phẩm</a>
		<div id="addform"></div>
	</div>
	<%@ include file="updateProducts.jsp" %>
	<%@ include file="showProducts.jsp" %>
</body>
<script type="text/javascript" src="resources/js/product.js"></script>

</html>