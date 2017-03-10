// xu ly ngay 
$(document).ready(
		function() {
			var d = new Date();
			var strDate = d.getFullYear() + "-" + strpad00((d.getMonth() + 1))
					+ "-" + strpad00(d.getDate());
			$("#endDate").val(strDate);
			$("#startDate").val(strDate);

			$("#startDate").val($("#endDate").val())

			$("#endDate").on("change", function(e) {

				if ($("#endDate").val() < $("#startDate").val()) {

					alert("Ngày bắt đầu lớn hơn ngày kết thúc");
					$("#endDate").val($("#startDate").val())
					return false;
				}
			});

		});
function strpad00(s) {
	s = s + '';
	if (s.length === 1)
		s = '0' + s;
	return s;
}

function drawChart() {
	var date = {
		'startDate' : $("#startDate").val(),
		'endDate' : $("#endDate").val()
	};
	$.ajax({
		type : "POST",
		url : "ReportService",
		contentType : "application/json;charset=UTF-8",
		dataType : "json",
		data : JSON.stringify(date),
		error : function() {
		
		},
		success : function(data1) {
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'product_name');
			data.addColumn('number', 'sum');
			data.addRows(data1);
			var chart = new google.visualization.PieChart(document.getElementById('KQ_top5'));
			chart.draw(data, options);
		},
	});

	// Instantiate and draw the chart.
	var options = {
		'title' : 'Sản phẩm bán chạy',
		'width' : 400,
		'height' : 300
	};

}
// ve bieu do 
function draw() {
	  // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

	// setTimeout(function(){ alert("Hello"); }, 3000);
}
