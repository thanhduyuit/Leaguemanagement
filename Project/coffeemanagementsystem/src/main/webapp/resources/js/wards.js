$(document)
		.ready(
				function() {
					$("#search")
							.submit(
									function(e) {
										e.preventDefault();
										var search= {
											'name':	$("#wardName").val()
										} ;
										$
												.ajax({
													type : "POST",
													contentType : "application/json;charset=UTF-8" ,
													dataType : "json",
													data : JSON.stringify(search),
													url : "searchwards",
													success : function(data) {
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
																						"data" : "wardName"
																					},
																					{
																						"data" : "districtName"
																					},
																					{
																						"data" : "cityName"
																					},
																					{
																						"className" : 'details-control',
																						"orderable" : false,
																						"data" : null,
																						"defaultContent" : '<i class="fa fa-pencil-square-o"></i><i class="fa fa-trash"></i>'
																					}  ]
																		});
													}
												});
										return false;
									});
					var table = $("#example")
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
										"aaData" : "",
										"columns" : [
											{
												"data" : "wardName"
											},
											{
												"data" : "districtName"
											},
											{
												"data" : "cityName"
											},
											{
												"className" : 'details-control',
												"orderable" : false,
												"data" : null,
												"defaultContent" : '<i class="fa fa-pencil-square-o"></i><i class="fa fa-trash"></i>'
											}  ]
									});
				});