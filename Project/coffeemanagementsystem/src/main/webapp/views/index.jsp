<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<title>Coffee Management System</title>

<spring:url value="resources/css/bootstrap-theme.min.css"
	var="bootstrapThemeCSS" />
<spring:url value="resources/css/customer-style.css" var="customerStyle" />
<spring:url value="resources/css/font-awesome.min.css" var="fontAwesome" />

<link href="${bootstrapThemeCSS}" rel="stylesheet">
<link href="${customerStyle}" rel="stylesheet">
<link href="${fontAwesome}" rel="stylesheet">

<link href="resources/css/bootstrap.min.css" rel="stylesheet" />
<link href="resources/css/plugins/morris.css" rel="stylesheet" />
<link href="resources/css/font-awesome.min.css" rel="stylesheet" />
<link rel="Stylesheet"
	href="resources/css/examples.css" />
<link rel="stylesheet"
	href="resources/css/bootstrap.min.css">
<link rel="stylesheet"
	href="resources/css/datatables.min.css">
</head>
<body>

	<div id="wrapper">

		<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header" style="width: 100%">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target=".navbar-ex1-collapse">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="index.html">Hệ thống quản lý cửa
					hàng</a>
				<div style="width: 30%; float: right;">
					<!-- Top Menu Items -->
					<ul class="nav navbar-right top-nav" style="width: 50%">
						<li class="dropdown"><a href="#" class="dropdown-toggle"
							data-toggle="dropdown"><i class="fa fa-user"></i> <c:out
									value="${account.name}"></c:out><b class="caret"></b></a>
							<ul class="dropdown-menu">
								<li><a href="#"><i class="fa fa-fw fa-user"></i> Thông
										tin</a></li>
								<li><a href="#"><i class="fa fa-cog"></i> Thiết lập</a></li>
							</ul></li>
					</ul>
					<select class="form-control" style="width: 50%" name="storeselect" id="storeselect">
						<c:forEach items="${account.storeList}" var="store">
							<c:choose>
							<c:when test="${storeid==store.id}">
									<option value="${store.id}" selected="selected"><c:out
											value="${store.name}"></c:out></option>
								</c:when>
							<c:otherwise>
							<option value="${store.id}"><c:out value="${store.name}"></c:out></option>
							</c:otherwise>
							</c:choose>				
						</c:forEach>
						
					</select>
					
				</div>
			</div>


			<div class="collapse navbar-collapse navbar-ex1-collapse">
				<ul class="nav navbar-nav side-nav">
					<li class="active" id="products"><a href="javascript: void(0)"><i
							class="fa fa-shopping-cart"></i> Sản phẩm</a></li>
					<li id="employee"><a href="javascript: void(0)"><i
							class="fa fa-users"></i> Nhân viên</a></li>
					<li id="desk"><a href="javascript: void(0)"><i
							class="fa fa-table"></i> Bàn</a></li>
					<li id="listgroupdesk"><a href="javascript: void(0)"><i
							class="fa fa-users"></i> Nhóm bàn</a></li>
					<li id="promotion"><a href="javascript: void(0)"><i
							class="fa fa-users"></i> Khuyến mãi</a></li>
					<li id="customer"><a href="javascript: void(0)"><i
							class="fa fa-users"></i> Khách hàng</a></li>
					<li id="warehouse"><a href="javascript: void(0)"><i
							class="fa fa-users"></i> Kho hàng</a></li>
					<li id="viewOrders"><a href="javascript: void(0)"><i
							class="fa fa-users"></i> Hóa đơn</a></li>
					<li id="viewreports"><a href="javascript: void(0)"><i
							class="fa fa-users"></i> Thống kê</a></li>
				</ul>

			</div>
			<!-- /.navbar-collapse -->
		</nav>
		<div id="line-example"></div>
		<div id="page-wrapper" style="height: 870px; margin-top: 100px">
			<div class="breadcrumb">
				<div class="active">
					<i class="fa fa-dashboard" id="maintitle">Sản phẩm</i>
				</div>
			</div>
			<div id="mainpage" style="width: 100%; height: 100%"></div>
		</div>
	</div>
</body>

<spring:url value="resources/js/bootstrap.min.js" var="bootstrapJS" />
<spring:url value="resources/js/jquery.dataTables.min.js"
	var="dataTableJS" />
<script type="text/javascript"
	src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="${bootstrapJS}"></script>
<script type="text/javascript" src="${dataTableJS}"></script>
<script src="resources/js/jquery-ui.js"></script>
<script
	src="resources/js/angular.min.js"></script>
<script type="text/javascript"
	src="resources/js/bootstrap3-typeahead.min.js"></script>
<script
	src="resources/js/jquery.validate.js"></script>
<script src="resources/js/mainhome.js">
	
</script>
<script type="text/javascript" src="resources/js/formatPrice.js"></script>
<script src="resources/js/datatable.js"></script>
<script type="text/javascript" src="resources/js/popuploading.js"></script>

</html>