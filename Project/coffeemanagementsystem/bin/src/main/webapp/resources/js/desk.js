$(document)
.ready(

		function() {
			// system handles when form with id = "search" was submitted by end user
			$("#search")
			.submit(
					function(e) {
						// prevent open a new page 
						// just stay in listdesk.jsp
						e.preventDefault();
						// create a variable contains a list of keys to search desk
						var search = {
								"deskId" : $("#maBan").val(),  // id of desk
								"deskName" : $("#tenBan").val(), // name of desk
								"groupDeskName" : $("#tenNB").val(), // name of group desk
								"quantityOfSeats" : $("#slGhe").val() // quantity of seats

						};
						// debug to show information of "search" variable
						console.log(search);

						// use ajax to tranfer "search" variable to search() method
						// in DeskController.java
						// results will be shown under a json
						// and these will be presented on DataTable with id = "example"
						$.ajax({
							type : "POST",
							contentType : "application/json;charset=UTF-8" ,
							dataType : "json",
							data : JSON.stringify(search),
							url : "desk/searchdesks",
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
												"emptyTable" : "Danh sách rỗng", // result is null
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
													"defaultContent" : '<button data-toggle="modal" data-target="#poppupUpdate" class="updateDesk fa fa-pencil-square-o"></button><button class="deleteDesk fa fa-trash" data-toggle="modal" data-target="#delDeskModal"></button>'
												} ]
										});
							}
						});
						return false;
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

				//code ajax de them ban
				$.ajax({
					url : "desk/addDesk",
					contentType : "application/json",
					type : "POST",
					dataType : "JSON",
					data : JSON.stringify({						
						"groupDeskId" : groupDeskId,
						"deskName" : deskName,						
						"quantityOfSeats" : quantityOfSeats,
						"description" : descript
					}),			
					success : function() {
						$('#myModalHorizontal').modal('toggle');
						table.clear().draw()
					},
					error:function(){
						alert("Thêm bị lỗi!!!");
					}
				});
			});

			//luu thong tin da duoc sua doi trong from 
			$('#saveUpdateDesk').click(function(e){		
				e.preventDefault();
				var deskId = document.getElementById("udId").value;
				var groupDeskId = document.getElementById("ugrdId").value;
				var deskName = document.getElementById("udeskName").value;				
				var quantityOfSeats = document.getElementById("uqOSeat").value;
				var descript = document.getElementById("udescr").value;

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
						"description" : descript
					}),
					success: function(){
						$('#poppupUpdate').modal('toggle');
						table.clear().draw()
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
			// use ajax to call getList() method
			// in DeskController.java
			// results will be shown under a json
			// and these will be presented under a list of devices 
			// on select tag with id = "maTB"
			$.ajax({
				url : 'desk/getlistdevice',
				type : 'GET',
				dataType : 'json',
				success : function(data) {
					$('#maTB').empty();
					$('#maTB').addClass("form-control");
					$('#maTB').append(
							$("<option/>").attr("value",
							"rong")
							.text("Không chọn"));
					$.each(data, function(i, value) {
						$('#maTB').append(
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
						table.clear().draw()
					},
					error : function(err) {
						alert("Khong xoa duoc");
					}
				});
			}
			// get id to delete
			$("#example tbody").on('click', '.deleteDesk', function() {
				var record = table.row($(this).parents('tr')).data();
				deleteDesk(record['deskId']);
			});

		});
