$(document)
		.ready(
				function() {
					// start load data desk name for combobox
					$.ajax({
						url : "desk/getalldeskname",
						dataType : "json",
						type : 'get',
						success : function(data) {
							$('#sel1').append($('<option>', {
								value : "",
								text : "Chọn Tên Bàn"
							}));
							$.each(data, function(i, item) {
								$('#sel1').append($('<option>', {
									value : item,
									text : item
								}));
							});
						}
					});
					// end load data desk name for combobox
					// start submit form search, return list orders
					$("#search")
							.submit(
									function(e) {
										e.preventDefault();
										var search = {
											'name' : $("#userName").val(),
											'phoneNumber' : $("#phoneNumber")
													.val(),
											'deskName' : $("#sel1").val(),
											'totalBill' : $("#totalBill").val()
										};
										$
												.ajax({
													type : "POST",
													contentType : "application/json;charset=UTF-8",
													dataType : "json",
													data : JSON
															.stringify(search),
													url : "searchOrders",
													success : function(data) {
														console.log(data);
														table.destroy();
														table = $("#example")
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
																			"aaData" : data,
																			"columns" : [
																					{
																						"data" : "id"

																					},
																					{
																						"data" : "customerModel.name"
																					},
																					{
																						"data" : "desk"
																					},
																					{
																						"data" : "quantityProduct"
																					},
																					{
																						"data" : "totalBill"
																					},
																					{
																						"className" : 'details-control',
																						"orderable" : false,
																						"data" : null,
																						"defaultContent" : '<button style="margin-right: 5%;" type="button" class="btn btn-default btn-sm viewDetail" data-target="#myModalView" data-toggle="modal"><span class="glyphicon glyphicon-eye-open"></span></button> <button style="margin-right: 5%;" type="button" class="btn btn-default btn-sm deleteOrder" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-trash"></span></button>'
																					} ]
																		});
														if (data[0].id != "") {
															$(
																	"#divExtractExcel")
																	.html(
																			"<input onclick=\"exportExcel()\" type=\"button\" class=\"btn btn-primary\" value=\"Xuất Excel\">");
														}
													}
												});
										return false;
									});
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
						"aaData" : "",
						"language" : {
							"emptyTable" : "Không có sản phẩm nào cả",
							"paginate" : {
								"previous" : "Trước",
								"next" : "Sau"
							}
						}
					});
					// end submit form search, return list orders

					// click viewbutton view order detail
					$('#example tbody')
							.on(
									'click',
									'.viewDetail',
									function() {
										$("#detailProduct").empty();
										var content = "";
										var data = table.row(
												$(this).parents('tr')).data();
										console.log(data);
										$('#nameCustomer').text(
												data.customerModel.name);
										$('#totalBill').text(data.totalBill);
										$('#quantity').text(
												data.quantityProduct);
										$('#point').text(
												data.customerModel.point);
										var size = data.orderDetailsModel.length;
										for (i = 0; i < size; i++) {
											content += '<tr><td class="nameProduct">'
													+ data.orderDetailsModel[i].productModel.name
													+ '</td><td>'
													+ data.orderDetailsModel[i].quantity
													+ '</td><td class="priceProduct">'
													+ data.orderDetailsModel[i].productModel.price
													+ '</td></tr>';
										}

										$('#detailProduct').append(content);
									});
					// end view orderdetail

					// click delete order
					$('#example tbody').on('click', '.deleteOrder', function() {
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
								url : "deleteOrder",
								success : function() {
									row.remove().draw();
									alert("da xoa");
								}
							});
						});
					});
					// end delete order
					// extract excel
				});

function exportExcel() {
	console.log("test");
	window.open('data:application/vnd.ms-excel,' + $('#example_wrapper').html);
}