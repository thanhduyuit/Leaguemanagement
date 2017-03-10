$(document)
		.ready(
				function() {
					// combobox search loai hang
					$.ajax({
						type : "GET",
						contentType : "application/json;charset=UTF-8",
						dataType : "json",
						url : "getAllMaterialType",
						success : function(data) {
							$('#comboLoaiHang1').append($('<option>', {
								value : "",
								text : "Chọn loại hàng"
							}));
							$.each(data, function(i, item) {
								$('#comboLoaiHang1').append($('<option>', {
									value : item.id,
									text : item.name
								}));
							});
						}
					});

					// search
					$("#search")
							.submit(
									function(e) {
										e.preventDefault();
										var search = {
											'name' : $("#material").val(),
											'materialType' : ($(
													'select#comboLoaiHang1 option:selected')
													.text() != "Chọn loại hàng") ? $(
													'select#comboLoaiHang1 option:selected')
													.text()
													: "",
											"priceFrom" : $("#pricefrom").val(),
											"priceTo" : $("#priceto").val()
										};
										console.log(search);
										$
												.ajax({
													type : "POST",
													contentType : "application/json;charset=UTF-8",
													dataType : "json",
													data : JSON
															.stringify(search),
													url : "listWarehouse",
													success : function(data) {
														table.destroy();
														table = $("#example")
																.DataTable(
																		{
																			"columnDefs" : [ {
																				"targets" : [ 0 ],
																				"visible" : false,
																				"searchable" : false
																			} ],
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
																			"aaData" : data,
																			"columns" : [
																					{
																						"data" : "id"
																					},
																					{
																						"data" : "name"
																					},
																					{
																						"data" : "materialType"
																					},
																					{
																						"data" : "price"
																					},
																					{
																						"data" : "quantity"
																					},
																					{
																						"className" : 'details-control',
																						"orderable" : false,
																						"data" : null,
																						"defaultContent" : '<button class="viewDetails fa fa-eye" data-toggle="modal" data-target="#myModal"></button><button data-toggle="modal" data-target="#myModalUpdate" class="update fa fa-pencil-square-o"></button><button class="delete fa fa-trash" data-toggle="modal" data-target="#delete-modal"></button>'
																					} ]
																		});
													}
												});
										return false;
									});
					// set firt datatable
					var table = $("#example").DataTable({
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
						"columnDefs" : [ {
							"targets" : [ 0 ],
							"visible" : false,
							"searchable" : false
						} ],

					});
					// delete update isDelete = 1
					$('#example tbody').on('click', '.delete', function() {
						var data = table.row($(this).parents('tr')).data();
						var row = table.row($(this).parents('tr'));
						var id = data['id'];
						$('#agreeDelete').unbind().click(function() {
							$.ajax({
								type : "POST",
								contentType : "application/json;charset=UTF-8",
								dataType : "json",
								data : JSON.stringify({
									"id" : id
								}),
								url : "deleteWarehouse",
								success : function() {
									row.remove().draw();
									alert("da xoa");
								}
							});
						});
					});

					// Viewdetails
					var elementID = 0;
					
					$('#example tbody').on('click', '.viewDetails', function() {
						var data = table.row($(this).parents('tr')).data();
						var id = data['id'];
						
						var temp = table.row($(this).parents('tr')).index();					
						
						elementID = temp;
						
						var RowElement = getRowElementID(temp);
						
						$('#indexViewDetails').html(RowElement);
						
						getData(id, "viewDetailWH");
						
					});
					
					
					$( "#btnViewDetails" ).click(function() {
					
						getRowElementID(elementID);
	
					});
					
					function getRowElementID(oldID)
					{
						var temp = table.row(oldID).data();
	
						if(temp != null)
						{
							var RowElement = temp['id'] + 1;
							$('#indexViewDetails').html(RowElement);
							getData(temp['id'], "viewDetailWH");
							
							elementID = elementID + 1;
						}
						
						else
						{
							$('#indexViewDetails').html("hiện tại là mặt hàng cuối cùng!");
						}			
						
					}
					
					// Validate form Update warehouse
					var update_inputID = $("#update_inputID");
					var update_inputName = $("#update_inputName");
					var update_inputSl = $("#update_inputSl");
					var update_inputGia = $("#update_inputGia");
					var update_nameErr = $("#update_nameErr");
					var update_slErr = $("#update_slErr");
					var update_giaErr = $("#update_giaErr");
					var loaiHangUpdate = $('#loaiHangUpdate');
					// load imfomation update warehouse
					$('#example tbody').on('click', '.update', function() {
						var data = table.row($(this).parents('tr')).data();
						var row = table.row($(this).parents('tr'));
						var id = data['id'];
						var type = data['materialType'];
						update_inputID.val(data['id']);
						update_inputName.val(data['name']);
						update_inputSl.val(data['quantity']);
						update_inputGia.val(data['price']);
						//
						update_inputName.removeClass("error");
						update_nameErr.text("")
						update_nameErr.removeClass("error");

						update_inputSl.removeClass("error");
						update_slErr.text("")
						update_slErr.removeClass("error");

						update_inputGia.removeClass("error");
						update_giaErr.text("")
						update_giaErr.removeClass("error");
						$.ajax({
							type : "GET",
							contentType : "application/json;charset=UTF-8",
							dataType : "json",
							url : "getAllMaterialType",
							success : function(data) {
								$.each(data, function(i, item) {
									$('#loaiHangUpdate').append($('<option>', {
										value : item.id,
										text : item.name
									}));
									if (item.name === type) {
										loaiHangUpdate.val(item.id);
									}
								});
							}
						});
					});
					// get infomation from update form in popup send to
					// controller
					$("#updateWarehouse")
							.submit(
									function(e) {
										e.preventDefault();
										if (validate_update_name()
												& validate_update_sl()
												& validate_update_gia()) {
											var id = update_inputID.val();
											var name = update_inputName.val();
											var quantity = update_inputSl.val();
											var price = update_inputGia.val();
											var materialType = $(
													'select#loaiHangUpdate option:selected')
													.val();
											$
													.ajax({
														type : "POST",
														contentType : "application/json;charset=UTF-8",
														dataType : "json",
														data : JSON
																.stringify({
																	"id" : id,
																	"name" : name,
																	"materialType" : materialType,
																	"price" : price,
																	"quantity" : quantity
																}),
														url : "updateWarehouse",
														success : function() {
															$('#myModalUpdate')
																	.modal(
																			'toggle');
															$
																	.ajax({
																		type : "POST",
																		contentType : "application/json;charset=UTF-8",
																		dataType : "json",
																		data : JSON
																				.stringify({
																					"name" : "",
																					"materialType" : "",
																					"priceFrom" : "",
																					"priceTo" : ""
																				}),
																		url : "listWarehouse",
																		success : function(
																				data) {
																			table
																					.destroy();
																			table = $(
																					"#example")
																					.DataTable(
																							{
																								"columnDefs" : [ {
																									"targets" : [ 0 ],
																									"visible" : false,
																									"searchable" : false
																								} ],
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
																								"aaData" : data,
																								"columns" : [
																										{
																											"data" : "id"
																										},
																										{
																											"data" : "name"
																										},
																										{
																											"data" : "materialType"
																										},
																										{
																											"data" : "price"
																										},
																										{
																											"data" : "quantity"
																										},
																										{
																											"className" : 'details-control',
																											"orderable" : false,
																											"data" : null,
																											"defaultContent" : '<button class="viewDetails fa fa-eye" data-toggle="modal" data-target="#myModal"></button><button data-toggle="modal" data-target="#myModalUpdate" class="update fa fa-pencil-square-o"></button><button class="delete fa fa-trash" data-toggle="modal" data-target="#delete-modal"></button>'
																										} ]
																							});
																		}
																	});
														}
													});
										} else {
											return false;
										}
									});
					// focus out
					update_inputName.blur(validate_update_name);
					update_inputSl.blur(validate_update_sl);
					update_inputGia.blur(validate_update_gia);
					// validate name
					function validate_update_name(){
						var str = update_inputName.val();
						var nameCheck = new RegExp( /[^a-zA-Z0-9ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ ]/);
						var nameCheck2 = new RegExp( /[^a-zA-Z0-9Zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ ]/);
						if(update_inputName.val()==""){
							update_inputName.addClass("error");
							update_nameErr.text("Tên không được bỏ trống!")
							update_nameErr.addClass("error");
							return false;
						}else if(nameCheck.test(str)&&nameCheck2.test(str)){
							update_inputName.addClass("error");
							update_nameErr.text("Tên chỉ được chứa chữ cái và số!")
							update_nameErr.addClass("error");
							return false;
						}else if(str.indexOf(" ")==0){
							update_inputName.addClass("error");
							update_nameErr.text("Vị trí đầu tiên không được chứa khoảng trắng!")
							update_nameErr.addClass("error");
							return false;
						}else {
							update_inputName.removeClass("error");
							update_nameErr.text("")
							update_nameErr.removeClass("error");
							return true;
						}
					}
					// validate quantity
					function validate_update_sl() {
						if (update_inputSl.val() == "") {
							update_inputSl.addClass("error");
							update_slErr.text("Số lượng không được bỏ trống!")
							update_slErr.addClass("error");
							return false;
						} else if (update_inputSl.val() == 0) {
							update_inputSl.addClass("error");
							update_slErr.text("Số lượng không thể bằng không!")
							update_slErr.addClass("error");
							return false;
						} else if (update_inputSl.val() < 0) {
							update_inputSl.addClass("error");
							update_slErr.text("Số lượng không thể âm!")
							update_slErr.addClass("error");
							return false;
						} else {
							update_inputSl.removeClass("error");
							update_slErr.text("")
							update_slErr.removeClass("error");
							return true;
						}
					}
					// validate price
					function validate_update_gia() {
						if (update_inputGia.val() == "") {
							update_inputGia.addClass("error");
							update_giaErr.text("Giá không được bỏ trống!")
							update_giaErr.addClass("error");
							return false;
						} else if (update_inputGia.val() == 0) {
							update_inputGia.addClass("error");
							update_giaErr.text("Giá không thể bằng không!")
							update_giaErr.addClass("error");
							return false;
						} else if (update_inputGia.val() < 0) {
							update_inputGia.addClass("error");
							update_giaErr.text("Giá không thể âm!")
							update_giaErr.addClass("error");
							return false;
						} else {
							update_inputGia.removeClass("error");
							update_giaErr.text("")
							update_giaErr.removeClass("error");
							return true;
						}
					}
				});