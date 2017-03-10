
function resetAccountfield() { // Reset lại các o textbox ở popup add-account
	$('#hovaten').val("");
	$('#sodienthoai').val("");
	$('#ngaysinh').val("");
	$('#socmnd').val("");
	$('#sonha').val("");
	$('#tinhthanh').val("");
	$('#quan').val("");
	$('#phuong').val("");
	$('#tentaikhoan').val("");
	$('#email').val("");
	$('#taikhoanchu').val("")

}
function showpopupaddaccount() {
	resetAccountfield();
	$('#accountModal').modal('show');
	$.ajax({
		url : "city/getListCity",
		dataType : "json",
		success : function(data) {
			$('#City').empty();
			$('#City').append($('<option>', {
				value : "rong",
				text : "Không chọn"
			}));
			$.each(data, function(i, item) {
				$('#City').append($('<option>', {
					value : item.id,
					text : item.name
				}));
			});
		}
	});
}
var listAccount = {};


//Xử lí khi bấm button lưu  ở popup-addStore
$("#addstore").submit(
		function(e) {
			var storename = document.getElementById("storename").value;
			var storedis = document.getElementById("storedis").value;
			if ((document.getElementById("storename").value != "") && (document.getElementById("storedis").value != "")) {
				var a = $('#liststore').html();
				var b = a
						+ '<tr><td>'
						+ storename
						+ '</td><td>'
						+ storedis
						+ '</td><td><i class="btdelete glyphicon glyphicon-trash"></i></td></tr>';
				$('#liststore').html(b);
				
				$(".btdelete").bind("click", function() {
					$(this).parent().parent().remove();
				});
				
				// Reset lại các o textbox ở popup add-store
				$('#storename').val("");
				$('#storedis').val("");
			}
			if (document.getElementById("storename").value == "a") alert ("asdad");
		});


//Xử lí khi bấm button hủy ở popup-addStore
$("#btnStorehuy").click(
		function(e) {
			
		});

//Xử lí khi bấm button hủy ở popup-addAccount
$("#btnAccHuy").click(
		function(e) {
			
		});


//Xử lí khi bấm button lưu  ở popup-addAccount
$("#btnAccLuu").click(
		function(e) {
			var data = {
					"name" : $("#hovaten").val(),
					"phone" : $("#sodienthoai").val(),
					"birthday" : $("#ngaysinh").val(),
					"gender" : $("input[name='gender']:checked").val(),
					"idCard" : $("#a").val(),
					"address" : $("#sonha").val(),
					"wardID" : $("#Ward").find(":selected").val(),
					"accountName" : $("#tentaikhoan").val(),
					"email" : $("#email").val(),
					"isAdmin" : $("input[name='isAdmin']:checked").val(),
				};
				$.ajax({
					type : "POST",
					contentType : "application/json; charset=uft-8",
					url : "addAccounts",
					data : JSON.stringify(data),
					dataType : 'json',
					suscess : function(data) {
						alert("save");
					},
					error: function(){
						alert( $("input[name='isAdmin']:checked").val()
								
								);
					}
				})
		});





function btnStoreluu(){
	
	
	var storename = document.getElementById("storename").value;
	var storedis = document.getElementById("storedis").value;
	if ((storename != null) && (storedis != null)) {
		var a = $('#liststore').html();
		var b = a
				+ '<tr><td>'
				+ storename
				+ '</td><td>'
				+ storedis
				+ '</td><td><i class="btdelete glyphicon glyphicon-trash"></i></td></tr>';
		$('#liststore').html(b);
		$(".btdelete").bind("click", function() {
			$(this).parent().parent().remove();
		});
		
		// Reset lại các o textbox ở popup add-store
		$('#storename').val("");
		$('#storedis').val("");
	}
	
	
	
}


//Hàm load quận khi người dùng chọn thành phố xong
$("#City").on("change", function() {
	  if($(this).find(":selected").val()=="rong"){
		  $('#District').empty();
			$('#District').append($('<option>', {
				value : "rong",
				text : "Không chọn"
			}));
			$('#Ward').empty();
			$('#Ward').append($('<option>', {
				value : "rong",
				text : "Không chọn"
			}));
			
	  } else {
		  var data = {
					"id" : $("#City").find(":selected").val()
				};
		  $.ajax({
				url : "city/getListDistrictById",
				dataType : "json",
				type : "POST",
				contentType : "application/json",
				data : JSON.stringify(data),
				success : function(data) {
					$('#District').empty();
					$('#District').append($('<option>', {
						value : "rong",
						text : "Không chọn"
					}));
					$.each(data, function(i, item) {
						$('#District').append($('<option>', {
							value : item.id,
							text : item.name
						}));
					});
					$('#Ward').empty();
					$('#Ward').append($('<option>', {
						value : "rong",
						text : "Không chọn"
					}));
				}
			});
	  }
	});

//Hàm load phường khi người dùng chọn quận xong
$("#District").on("change", function() {
	  if($(this).find(":selected").val()=="rong"){
		  $('#Ward').empty();
			$('#Ward').append($('<option>', {
				value : "rong",
				text : "Không chọn"
			}));
	  } else {
		  var data = {
					"id" : $("#District").find(":selected").val()
				};
		  $.ajax({
				url : "getListWardById",
				dataType : "json",
				type : "POST",
				contentType : "application/json",
				data : JSON.stringify(data),
				success : function(data) {
					$('#Ward').empty();
					$('#Ward').append($('<option>', {
						value : "rong",
						text : "Không chọn"
					}));
					$.each(data, function(i, item) {
						$('#Ward').append($('<option>', {
							value : item.id,
							text : item.name
						}));
					});
				}
			});
	  }
	});





