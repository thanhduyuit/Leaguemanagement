function shownavsearch() {
	$(document).ready(function() {
		$(".btnsearchnav").click(function() {
			$(".navsearch").toggleClass("hien");
			if ($(".navsearch").hasClass("an")) {
				$(this).html('<i class="fa fa-caret-down"></i>');
				$(".navsearch").removeClass("an");
			} else {
				$(this).html('<i class="fa fa-caret-right"></i>');
				$(".navsearch").addClass("an");
			}
		});
	});
}

var table;
$(document).ready(function(){
	var dataTemp=[["","","","","",""]];
	 table = $('#tableaccount').DataTable({
		data : dataTemp,
		searching : false,
		ordering : false,
		lengthChange : false,
		columns : [ {
			title : "Mã KH"
		}, {
			title : "Số CMND"
		}, {
			title : "Tên Khách Hàng"
		}, {
			title : "Giới Tính"
		}, {
			title : "Ngày Sinh"
		},{
			title : "Hành Động"
		} ]
	});
	return table;
});




function filltableaccount(dataSet) {
	$(document).ready(function() {
		table.destroy();
		table=$('#tableaccount').DataTable({
			data : dataSet,
			searching : false,
			ordering : false,
			lengthChange : false,
			columns : [ {
				title : "Mã KH"
			}, {
				title : "Số CMND"
			}, {
				title : "Tên Khách Hàng"
			}, {
				title : "Giới Tính"
			}, {
				title : "Ngày Sinh"
			},{
				title : "Hành Động"
			} ]
		});
		
		$(".delaccount").bind('click', function() {
			// su kien xoa account
			var id = $(this).parent().parent().children(0).first().text();
			deleteaccount(id);

		});
		$(".detailaccount").bind('click', function() {
			// su kien xem chi tiet account
			var id = $(this).parent().parent().children(0).first().text();
			alert(id);

		});
		$(".editaccount").bind('click', function() {
			// su kien sua account
			var id = $(this).parent().parent().children(0).first().text();
			alert(id);
		});
	});
}


function search() {
	$(document).ready(
		function() {
			var inputText = $("#inputsearch").val();
			var search = "";
			var obj;
			$("#ulsearch").children("li").each(function() {
				var obj = $(this).children("input");
				if (obj.is(':checked')) {
					search += obj.val() + ",";
				}
			});
				var isizesearch = search.length - 1;
				search = search.substring(0, isizesearch);
				$.ajax({
					url : "searchaccount",
					type : "get",
					data : "method=" + search + "&message="
										+ inputText,
					contentType : "application/json",
					success : function(result) {
						var isizeresult = result.length;
						var method = "<i class='delaccount fa fa-trash-o'></i> <i class='detailaccount fa fa-eye'></i> <i class='editaccount fa fa-pencil'></i>";						
						var dataSet=[];						
						var account;
						for (i = 0; i < isizeresult; i++) {
							var arraccountsingle=[];
							account=result[i];
							arraccountsingle.push(account.id);
							arraccountsingle.push(account.idCard);
							arraccountsingle.push(account.name);
							arraccountsingle.push(account.gender);
							arraccountsingle.push(account.birthday);
							arraccountsingle.push(method);
							dataSet.push(arraccountsingle);						
						}
						filltableaccount(dataSet);
					}
				});
			});
}

// delete account function
function deleteaccount(id) {
	$(document).ready(function(){
		$.ajax({
			url : 'deleteAccount',		
			type : "GET",
			data :"id=" +id,
			success : function(data) {
			
			},
			error : function(err) {
				alert("Khong xoa duoc");
			}
		});
	});
}

// get id to delete
// $("#tableaccount").on('click','.delaccount',function(){
// var record = table.row($(this).parents('tr')).data();
// deleteaccount(record['id']);
// reload();
// });
