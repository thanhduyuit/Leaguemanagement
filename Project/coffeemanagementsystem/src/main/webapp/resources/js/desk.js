$(document)
.ready(function() {
	var search;
	var storeId;
	// system handles when form with id = "search" was submitted by end user
	$("#search")
	.submit(
			function(e) {
				// prevent open a new page 
				// just stay in listdesk.jsp
				e.preventDefault();
				// create a variable contains a list of keys to search desk
				search = {
						"deskId" : $("#maBan").val(),  // id of desk
						"deskName" : $("#tenBan").val(), // name of desk
						"groupDeskName" : $("#tenNB").val(), // name of group desk
						"quantityOfSeats" : $("#slGhe").val() // quantity of seats

				};
				// debug to show information of "search" variable
				console.log(search);
				// create a variable to represent the selected value from select tag with id = "storeselect"
				storeId = document.getElementById("storeselect").value;
				console.log(storeId);

				showListOfDesk(search);
			});
	// create a new table when end user opens listdesks.jsp
	var table = $("#example")
	.DataTable(
			{
				"searching" : false,
				"searchable" : false,
				"scrollX" : false,
				"scrolly" : false,
				"scrollCollapse" : true,
				"paging" : false,
				"lengthChange" : false,
				"ordering" : false,
				"paginate" : false,
				"info" : false,
				"sDom" : 'lfrtip',
				"aaData" : "",
				"language" : {
					"emptyTable" : "Danh sách rỗng",
					"paginate" : {
						"previous" : "Trước",
						"next" : "Sau"
					}
				},
				"columns" : 	[ {
					"data" : "deskId",
					"visible" : false
				},
				{
					"data" : "groupDeskName",

				}, {
					"data" : "deskName",
				}, {
					"data" : "quantityOfSeats",
				},{
					"data" : "description",
				}, {
					"className" : 'details-control',
					"orderable" : false,
					"data" : null,
					"defaultContent" : '<button data-toggle="modal" data-target="#poppupUpdate" class="updateDesk fa fa-pencil-square-o"></button>'
				} ]
			});

	// create a func to show list of desks which was filtered by key "search"
	function showListOfDesk(search){
		// use ajax to tranfer "search" variable to search() method
		// in DeskController.java
		// results will be shown under a json
		// and these will be presented on DataTable with id = "example"
		$.ajax({
			type : "POST",
			contentType : "application/json;charset=UTF-8" ,
			dataType : "json",
			data : JSON.stringify(search),
			url : "desk/searchdesks/"+storeId,
			// system handles when ajax was executed successfully
			success : function(data) {
				// remove old table
				table.destroy();
				// create a new table
				table = $("#example")
				// configure new DataTable 
				.DataTable(
						{
							"searching" : false, 
							"searchable" : false,
							"scrollX" : false,
							"scrolly" : false,
							"scrollCollapse" : true,
							"paging" : true,
							"lengthChange" : false,
							"ordering" : false,
							"paginate" : false,
							"info" : false,
							"sDom" : 'lfrtip',
							// convert results to data of DataTable
							"aaData" : data,
							"language" : {
								"emptyTable" : "Không tìm thấy bàn", // result is null
								"paginate" : {
									"previous" : "Trước",
									"next" : "Sau"
								}
							},
							// configure the columns of DataTable 
							// to present the data of results
							"columns" : 
								[ {
									"data" : "deskId", 
									"visible" : false
								},
								{
									"data" : "groupDeskName",

								}, {
									"data" : "deskName",
								}, {
									"data" : "quantityOfSeats",
								},{
									"data" : "description",
								}, 
								// create a column which shows 2 icons: 
								// "fa fa-pencil-square-o" icon: update table
								// "delete fa fa-trash" icon: delete table
								{
									"className" : 'details-control',
									"orderable" : false,
									"data" : null,
									"defaultContent" : '<button data-toggle="modal" data-target="#poppupUpdate" class="updateDesk fa fa-pencil-square-o"></button><button class="deletedesk fa fa-trash" data-toggle="modal" data-target="#delDeskModal"></button>'
								} ]
						});
			}
		});
	}

	//Lay thong tin cua ban tru nhom ban ra
	$('#example tbody').on('click','.updateDesk', function(e){
		e.preventDefault();
		var data = table.row($(this).parents('tr')).data();
		var id = data['deskId'];
		//var groupdeskName = data["groupDeskName"];
		$.ajax({
			type : "GET",
			contentType : "application/json;charset=UTF-8",
			dataType : "json",					
			url : "desk/showDeskInfo/"+id,
			success: function(data1){					
				$("#udId").val(id);						
				$("#udeskName").val(data1['deskName']);
				$("#uqOSeat").val(data1['quantityOfSeats']);
				$("#udescr").val(data1['description']);
			},
			error:function(data1){
				alert("Cập nhật bị lỗi!!!");
			}
		});
	});
	//lay thong tin cua nhom ban 
	$('#example tbody').on('click','.updateDesk', function(e){
		e.preventDefault();
		var data = table.row($(this).parents('tr')).data();
		var id = data['deskId'];
		var gdName = data["groupDeskName"];
		$.ajax({
			type : "GET",
			contentType : "application/json;charset=UTF-8",
			dataType : "json",					
			url : "getlistgroupdesk",
			success: function(data1){				
				$('#ugrdId').empty();
				$.each(data1, function(i, item) {
					$("#ugrdId").append($('<option>', {
						value : item.id,
						text : item.name
					}));							
					//neu ten nhom hien tai trung voi ten nhom ban trong danh sach thi ten nhom ban do se hien len dau tien
					if(item.name === gdName){
						$('#ugrdId').val(item.id);							
					}
				});						
			},
			error:function(data1){
				alert("Cập nhật bị lỗi!!!");
			}
		});
	});

	//nhan du lieu kieu json tu form va gui toi controler de them vao co so du lieu
	$('#saveDesk').click(function(e) {
		e.preventDefault();

		var groupDeskId = document.getElementById("grdId").value;
		var deskName = document.getElementById("deskName").value;				
		var quantityOfSeats = document.getElementById("qOSeat").value;
		var descript = document.getElementById("descr").value;
		var storeId = document.getElementById("storeselect").value;
		
		//rule validate form add desk
		$('#addDeskForm').validate({
			rules : {
				'deskName' : {
					required : true,
					maxlength : 30
				   },
				'qOSeat' : {
					required : true,
					number : true
				}					
			},
			messages : {
				'deskName' : {
					required : "Không được bỏ trống!!!",
					maxlength : "tên bàn không được quá 30 ký tự!!!"
					},
					'qOSeat' : {
						required : "Không được bỏ trống!!!",
						number : "Không được bỏ trống!!!"
					}
			   },
			errorElement: 'span',
			highlight: function(element, errorClass, validClass) {
		            $(element).addClass(this.settings.errorElementClass).removeClass(errorClass);
		        },
		    unhighlight: function(element, errorClass, validClass) {
		            $(element).removeClass(this.settings.errorElementClass).removeClass(errorClass);
		        }
		});
		//code ajax de them ban
		if($('#addDeskForm').valid() ){
			
		$.ajax({
			url : "desk/addDesk",
			contentType : "application/json",
			type : "POST",
			dataType : "JSON",
			data : JSON.stringify({						
				"groupDeskId" : groupDeskId,
				"deskName" : deskName,						
				"quantityOfSeats" : quantityOfSeats,
				"description" : descript, 
				"storeId": storeId
			}),			
			success : function() {
				$('#myModalHorizontal').modal('toggle');
				//table.clear().draw()
				showListOfDesk(search)
			},
			error:function(){
				alert("Thêm bị lỗi!!!");
			}
		});
		}return false;
	});

	//luu thong tin da duoc sua doi trong from 
	$('#saveUpdateDesk').click(function(e){		
		e.preventDefault();
		var deskId = document.getElementById("udId").value;
		var groupDeskId = document.getElementById("ugrdId").value;
		var deskName = document.getElementById("udeskName").value;				
		var quantityOfSeats = document.getElementById("uqOSeat").value;
		var descript = document.getElementById("udescr").value;
		var storeId = document.getElementById("storeselect").value;
		$.ajax({
			url:"desk/saveUpdateDesk",
			contentType : "application/json",
			type : "POST",
			dataType : "JSON",
			data:JSON.stringify({							
				"deskId": deskId,
				"groupDeskId" : groupDeskId,
				"deskName" : deskName,						
				"quantityOfSeats" : quantityOfSeats,
				"description" : descript,
				"storeId": storeId
			}),
			success: function(){
				$('#poppupUpdate').modal('toggle');
				//table.clear().draw()
				showListOfDesk(search);
			},
			error: function(){
				alert("Cập nhật bị lỗi!!!");
			}
		})
	})


	// use ajax to call getList() method
	// in GroupDeskController.java
	// results will be shown under a json
	// and these will be presented under a list of groups of desk 
	// on select tags with id = "grdId" and "tenNB"
	$.ajax({
		url : 'getlistgroupdesk',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			$('#grdId, #tenNB').empty();
			$('#tenNB').addClass("form-control");
			$('#grdId, #tenNB').append(
					$("<option/>").attr("value",
					"rong")
					.text("Không chọn"));
			$.each(data, function(i, value) {
				$('#grdId, #tenNB').append(
						$("<option/>").attr("value",
								value['id'])
								.text(value['name']));
			});
		}
	});
	window.destroyTable = function() {
		var table = $('#example').DataTable();
		table.destroy();
	};
	// delete DESK function
	function deleteDesk(id) {
		$.ajax({
			url : 'desk/deleteDesk',
			data : {
				"id" : id,
			},
			type : "GET",
			datatype : 'json',
			contentType : "charset=UTF-8",
			success : function(resp) {
				alert("Xóa bàn thành công. ");
			},
			error : function(err) {
				alert("Không xóa được. ");
			}
		});
	}
	// get id to delete
	$("#example tbody").on('click', '.deletedesk', function() {
		var record = table.row($(this).parents('tr')).data();
		var row = table.row($(this).parents('tr'));
		$('#iddesktoDelete').unbind().click(function(){
			deleteDesk(record['deskId']);
			row.remove().draw();
		});

	});

});
