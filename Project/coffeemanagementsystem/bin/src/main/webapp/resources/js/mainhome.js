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