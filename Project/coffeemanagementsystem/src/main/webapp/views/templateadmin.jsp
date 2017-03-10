<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<title>Coffee Management</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<spring:url value="/resources/css/bootstrap.min.css" var="bootstrapCSS" />
<spring:url value="/resources/css/bootstrap-theme.min.css"
	var="bootstrapThemeCSS" />
<spring:url value="/resources/css/style_templete_admin.css"
	var="styleTempleteAdmin" />
<spring:url value="/resources/css/font-awesome.min.css"
	var="fontAwesome" />
<spring:url value="/resources/css/template_search_account.css"
	var="templateSearchAccount" />

<link href="${bootstrapCSS}" rel="stylesheet">
<link href="${bootstrapThemeCSS}" rel="stylesheet">
<link href="${styleTempleteAdmin}" rel="stylesheet">
<link href="${templateSearchAccount}" rel="stylesheet">
<link href="${fontAwesome}" rel="stylesheet">


<link
	href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css"
	rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="container-fluid" style="padding: 0px;">
		<header>
			<div class="logo floatleft"></div>

			<div class="accountinfo floatright">

				<ul>
					<li class="dropdown"><a class="dropdown-toggle"
						data-toggle="dropdown" aria-expanded="false" href="#"
						onclick="$('.dropdown-toggle').dropdown();">Xin chào, <c:out
								value="${account.name}"></c:out> <span class="caret"></span></a>
						<ul class="dropdown-menu" style="width: 100%">
							<li><a href="" data-toggle="modal" data-target="#modalChangePassword">Thay đổi mật khẩu</a></li>
							<li class="divider"></li>
							<li><a href="" onclick="logoutAccount();">Đăng xuất</a></li>
						</ul></li>
				</ul>
			</div>

		</header>
		<section>
			<article class="container-left floatleft">
				<ul class="navdmin">
					<ul class="nav nav-tabs">
						<li class="active"><a data-toggle="tab" href="#home"><i
								class="fa fa-user"></i>Quản lý tài khoản</a></li>
						<li><a data-toggle="tab" href="#menu1">Menu 1</a></li>

					</ul>
				</ul>
			</article>
			<article class="container-right floatleft">

				<div class="tab-content">
					<div id="home" class="tab-pane fade in active">
						<div class="container" id="accountmanagement">
							<div class="searchheader">
								<button type="button" class="btnaddaccount floatright"
									onclick="showpopupaddaccount()">Thêm tài khoản</button>

							</div>
							<div class="searchcontainer">

								<button type="button" class="btnsearchnav floatleft">
									<i class="fa fa-caret-right"></i>
								</button>
								<input type="text" class="inputsearch floatleft"
									id="inputsearch" name="searchcontent" placeholder="Tìm kiếm" />
								<button type="button" id="inputbtnsearch"
									class="inputbtnsearch floatleft" onclick="search();">
									<i class="fa fa-search"></i><b>Tìm</b>
								</button>
								<div class="navsearch an">
									<ul id="ulsearch">
										<li><input type="checkbox" name="fullnamesearch"
											id="fullnamesearch" value="name" checked="" readonly=""
											disabled="" /> <lable for="fullnamesearch">Tìm theo
											tên khách hàng</lable></li>
										<li><input type="checkbox" value="idcard"
											name="idcardsearch" id="idcardsearch" /> <lable
												for="idcardsearch">Tìm theo số chứng minh thư</lable></li>

										<li><input type="checkbox" name="usernamesearch"
											id="usernamesearch" value="username" /> <lable
												for="usernamesearch">Tìm theo tên tài khoản</lable></li>
									</ul>
								</div>
							</div>
							<div class="titlecustomerlist">
								<h2>Danh sách khách hàng</h2>
							</div>
							<div class="clear20"></div>
							<div class="tablecustomerlist">
								<table id="tableaccount" class="display" cellspacing="0"
									width="100%">

								</table>
							</div>
						</div>
						<jsp:include page="addAccount_popup.jsp"></jsp:include>

					</div>
					<div id="menu1" class="tab-pane fade">
						<h3>Menu 1</h3>
						<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.</p>


					</div>

					<div class="modal fade" id="popup_delAccount" role="dialog">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title" align="center">Bạn muốn xóa sản
										phẩm này không?</h4>
								</div>
								<div class="modal-body" align="right">
									<!-- 							<input type="hidden" id="idtoDelete" /> -->
									<button type="button" class="btn btn-primary" id="agreedelacc"
										data-dismiss="modal">Có</button>
									<button type="button" class="btn btn-primary" class="close"
										data-dismiss="modal">Không</button>
								</div>
							</div>
						</div>
					</div>

				</div>


			</article>
		</section>

	<jsp:include page="modalchangepassword.jsp"></jsp:include>
	</div>

	<spring:url value="/resources/js/jquery-1.12.4.js" var="jQueryJS" />
	<spring:url value="/resources/js/bootstrap.min.js" var="bootstrapJS" />
	<spring:url value="/resources/js/script_searchaccount.js"
		var="scriptSearchaccount" />
	<spring:url value="/resources/js/jquery.dataTables.min.js"
		var="dataTableJS" />
	<spring:url value="/resources/js/script_login.js" var="scriptlogin" />
	<spring:url value="/resources/js/script_modalchangepassword.js" var="scriptModalChangePassword" />
	
	
	
	
	<script type="text/javascript" src="${jQueryJS}"></script>
	<script type="text/javascript" src="${bootstrapJS}"></script>
	<script type="text/javascript" src="${scriptSearchaccount}"></script>
	<script type="text/javascript" src="${dataTableJS}"></script>
	<script type="text/javascript" src="${scriptlogin}"></script>
	<script type="text/javascript" src="${scriptModalChangePassword}"></script>
	<script type="text/javascript"
		src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>
	<script>
		shownavsearch();
		loadmodalchangepassword();
	</script>
</body>
</html>