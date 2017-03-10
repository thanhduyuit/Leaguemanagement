$(document).ready(function() {
	$("#mainpage").load("products");
	$("li").click(function(){
		  if (!$(this).hasClass("active")) {
		    $("li.active").removeClass("active");
		    $(this).addClass("active");
		    $("#maintitle").text($(this).text());
		    $("#mainpage").load(this.id);
		  }
		});
	
});

function selectstore() {
	$(document).ready(function() {
		$("#storeselect").change(function() {
			var storeid = $(this).val();
			$.ajax({
				url : "changestore",
				type : "post",
				data : "storeId=" + storeid,
				success : function(result) {
					
				}
			});
			
		});
	});
}
selectstore();