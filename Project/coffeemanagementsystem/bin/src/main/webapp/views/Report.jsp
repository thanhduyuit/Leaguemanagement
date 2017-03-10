<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Thống Kê</title>
<link rel="stylesheet" href="resources/css/Report.css" />

<script type="text/javascript" src="resources/js/jquery.js"></script>

 <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<script type="text/javascript" src="resources/js/Report.js"></script>
</head>

<body>
		<div class="container">
		<div id="start">
			<input type="date" class="form-control" id="startDate" />StartDay
		</div>
		<div id="end">
			<input type="date" class="form-control" id="endDate"/>EndDate
		</div>
	
		<div id="submit">
			<input class="btn btn-primary" type="submit" value="Submit" onclick="draw()">
		</div>

	</div>
<div id="KQ_top5"></div>
</div> 
</body>

</html>