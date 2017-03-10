<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Ward Form</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet"
	href='http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/css/bootstrap.min.css'
	media="screen" />
<link rel="Stylesheet"
	href="https://twitter.github.io/typeahead.js/css/examples.css" />
<link rel="stylesheet"
	href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css">
<link>
<link href="resources/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="resources/css/style.css">
<body>
	<div class="panel panel-info center-block"
		style="width: 72%; height: 32%; margin-top: 1%">
		<div class="panel-heading">Tìm kiếm</div>
		<div class="panel-body">
			<form class="form-horizontal" id="search"
				action="aa" method="POST">
				<div class="form-group">
					<label class="control-label col-sm-3">Tên phường:</label>
					<div class="col-sm-6">
						<input type="text" class="form-control" id="wardName"
							name="wardName">
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
	<table id="example" class="display" style="width: 90%; height: 65%;">
		<thead>
			<tr>
				<th>Phường</th>
				<th>Quận/Huyện</th>
				<th>Thành phố/Tỉnh</th>
				<th>Thao tác</th>
			</tr>
		</thead>
	</table>
	<div class="btn-group btn-group-justified center-block"
		style="width: 90%; height: 4%; margin: 1%;">
		<a href="#" class="btn btn-primary">Thêm</a>
	</div>
</body>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.12.0-rc.2/jquery-ui.js"></script>
	<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script
	src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

<script type="text/javascript"
	src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript"
	src="http://cdn.rawgit.com/bassjobsen/Bootstrap-3-Typeahead/master/bootstrap3-typeahead.min.js"></script>
<script type="text/javascript" src="resources/js/formatPrice.js"></script>
<script src="resources/js/datatable.js"></script>
<script type="text/javascript" src="resources/js/wards.js"></script>
</html>