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

function loadmodalchangepassword(){
	$(document).ready(function(){
		$("#modalChangePassword").find("#sendcodeverify").remove();
	});
}
var table;
$(document).ready(function() {
	var dataTemp = [ [ "", "", "", "", "", "" ] ];
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
		}, {
			title : "Hành Động"
		} ]
	});
	return table;
});

function filltableaccount(dataSet) {
	$(document).ready(function() {
		table.destroy();
		table = $('#tableaccount').DataTable({
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
			}, {
				title : "Hành Động"
			} ]
		});

		$(".delaccount").bind('click', function() {
			// su kien xoa account
			$("#popup_delAccount").modal("show");
			var id = $(this).parent().parent().children(0).first().text();
			deleteaccount(id);
			
});
		$(".detailaccount").bind('click', function() {
			// su kien xem chi tiet account
			$("#viewaccount").modal("show");
			var id = $(this).parent().parent().children(0).first().text();
			ViewAccounts(id);

		});
		$(".editaccount").bind('click', function() {
			// su kien sua account
			var id = $(this).parent().parent().children(0).first().text();
			alert(id);
		});
	});

}

function search() {
	$(document)
			.ready(
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
						$
								.ajax({
									url : "searchaccount",
									type : "get",
									data : "method=" + search + "&message="
											+ inputText,
									contentType : "application/json",
									success : function(result) {
										var isizeresult = result.length;
										var method = "<i class='delaccount fa fa-trash-o'></i> <i class='detailaccount fa fa-eye'></i> <i class='editaccount fa fa-pencil'></i>";
										var dataSet = [];
										var account;
										for (i = 0; i < isizeresult; i++) {
											var arraccountsingle = [];
											account = result[i];
											arraccountsingle.push(account.id);
											arraccountsingle
													.push(account.idCard);
											arraccountsingle.push(account.name);
											arraccountsingle
													.push(account.gender==true?'Nữ':'Nam');
											arraccountsingle
													.push(account.birthday);
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
	$.ajax({
		url : 'deleteAccount',
		data : {
			"id" : id,
		},
		type : "GET",
		datatype : 'json',
		contentType : "charset=UTF-8",
		success : function(data) {
			
		},
		error : function(err) {
			
		}
	});
}

// get id to delete
$("#tableaccount").on('click', '.delaccount', function() {
	var record = table.row($(this).parents('tr')).data();
	var row = table.row($(this).parents('tr'));
	$('#agreedelacc').unbind().click(function(){
		deleteaccount(record['id']);
		row.remove().draw();
	});

});

//View account function
function ViewAccounts(id) {
	$(document).ready(function() {
		$(".detailaccount ").click(function() {
			$.ajax({
				url : 'viewAccounts',
				type : "GET",
				data : {
					"id" : id
				},
				success : function(data) {
					
				},
				error : function(err) {

				}
			});
		});
	});
}
//unbind().

//get data of row when click show button
//$("#example").on("click",".showDetail", function(){
//	var data = table.row($(this).parents("tr")).data();
//	var id = document.getElementById("viewIdAccount");
//	id.value = data["id"];
//	var name = document.getElementById("Viewnameaccount");
//	name.value = data["Viewnameaccount"];
//	var idcard = document.getElementById("viewIdCard");
//	idcard.value = data["idcard"];
//	var viewbirthDay = document.getElementById("viewbirthDay");
//	viewbirthDay.value = data["viewbirthDay"];
//	var gender = document.getElementById("viewgenderAccount");
//	status.value = data["gender"];
//	var phone=document.getElementById("viewphonenumber");
//	phone.value=data["phone"];
//	var email=document.getElementById("viewEmailAccount");
//	email.value=data["email"];
//	var address=document.getElementById("viewAddressAccount");
//	address.value=data["address"];
//	var description=document.getElementById("viewdescriptionAccount");
//	description.value=data["description"];
//	
//});



