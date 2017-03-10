/**
 * @project coffeemanagementsystem
 * @file GroupProduct.js
 * @author TuanVT2
 * @date Jan 18, 2017
 * @version_java 1.8.0_111
 */

// this atribute use for control datatable
var datatable = null;
/**
 * this function use for auto load data when productgroup.jsp called
 */

$(document)
		.ready(
				function() {
					$("#backtolistproduct").click(function(){
						$("#mainpage").load("products");
					});
					
					
				datatable= $("#table_id").DataTable({
					 "bSort": false,
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
				})
					
				
				
				resetTable();
				
				
				
				
				
				});

/**
 * send data row click edit to [edit product group] modal
 */
function setValueModalEdit(id, name, description) {
	var modalid = document.getElementById("idedit");
	var modalname = document.getElementById("namegroupedit");
	var modaldescription = document.getElementById("descriptionedit");
	var button = document.getElementById("editgroup");
	button.disabled = true;
	modalname.value = name;
	modaldescription.value = description;
	modalid.value = id;
}
/**
 * set request update product group to server
 * 
 */
function editgroupproduct() {
	var modalid = document.getElementById("idedit").value;
	var name = document.getElementById("namegroupedit").value;
	var description = document.getElementById("descriptionedit").value;

	$.ajax({
		url : "productgroup/update",
		data : {
			"id" : modalid,
			"name" : name,
			"description" : description,
		},
		type : "GET",
		contentType : "charset=UTF-8",
		success : function(resp) {
			if(resp==true)resetTable();// true if deleted on server
			else{
				alert("vui lòng thử lại sau");
				
			}
		},
		error : function(err) {
			alert("Lỗi kết nối đến server");
		}

	});
}

/**
 * function use to delete product group
 */
function deletegroupproduct(id) {

	$.ajax({
		url : 'productgroup/delete',
		data : {
			"id" : id,
		},
		type : "GET",
		datatype : 'json',
		contentType : "charset=UTF-8",
		success : function(resp) {
			
			if(resp==true){// true if deleted on server
			resetTable();}
			else{
				alert("vui lòng thử lại sau");
				
			}
			
		},
		error : function(err) {
			alert("Lỗi kết nối đến Server");
		}
	});
}
/**
 * function use to create a product group
 * 
 */
function creategroupproduct() {
	var name = document.getElementById("namegroupadd").value;
	var description = document.getElementById("descriptionadd").value;

	$.ajax({
		url : "productgroup/insert",
		data : {
			"name" : name,
			"description" : description,
		},
		type : "GET",
		contentType : "charset=UTF-8",
		success : function(resp) {
			if(resp==true)// true if deleted on server
				resetTable();
			else{
				alert("vui lòng thử lại sau");
				
			}
			
		},
		error : function(err) {
			alert("Lỗi kết nối đến server");
		}

	});
}

/**
 * reset data on modal add product group when click Them nhom san pham
 */

function resetaddmodal() {
	var name = document.getElementById("namegroupadd");
	var description = document.getElementById("descriptionadd");
	var button = document.getElementById("addgroupinmodal");
	button.disabled= true;
	name.value = "";
	description.value = "";

}
/**
 * reset datatable when update new data
 * 
 * 
 */
function resetTable(){
	datatable =table = $('#table_id')
	.DataTable();
	waitingDialog.show('Loading data');

$.ajax({
	url : 'productgroup/getproductgroupdetail',
	data : {},
	type : "GET",
	datatype : 'json',
	contentType : "charset=UTF-8",
	success : function(data) {
		datatable.destroy();  // remove all structure of datatable.
		 datatable =table = $('#table_id') // create a new datatable with new
											// data
			.DataTable(
					{
						 "bSort": false,
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
						data : data,
						
						"columns" : [

								{	"label":"id",
									"data" : "id"

								},
								{"label":"name",
									"data" : "name"
								},
								{"label":"description",
									"data" : "description"
								},

								{
									"defaultContent" : "<button class='btn btn-default btedit' data-toggle='modal' data-target='#editmodal' ><span class='glyphicon glyphicon-wrench'></span></button>"
											+ "<button class='btn btn-default btdelete' data-toggle='modal' data-target='#deletemodal'><span class='glyphicon glyphicon-trash'></span></button>",
								}

						],
						"columnsDefs" : [

						{
							"data" : null,

							"targets" : -1
						}

						],
					"initComplete": function(){
						waitingDialog.hide();
						 $("#table_id tbody").on(
									'click',
									'.btedit',
									function() {
										var a = table.row(
												
													$(this).parents('tr'))
												.data(); 
										var x = a['id'];

										setValueModalEdit(a['id'],
												a['name'],
												a['description']);
									

									});
						
							$("#table_id tbody")
									.on(
											'click',
											'td .btdelete',
											function() {
												var record = table
														.row($(this)
																.parents(
																		'tr'));// get
																				// data
																				// in
																				// row
																				// table
												var deleteid = record
														.data();
												$("#deleteok")
														.unbind() // sure
																	// button
																	// click
																	// onetime
														.click(
																function() {
																	deletegroupproduct(deleteid['id']);

																	

																});
											});
					}
					}
					);	
	},
	error(err){
		
		alert("Connect to data have problem");
		waitingDialog.hide();
		
		
		
	}
});

	
	
	
}

/**
 * dialog loading modal
 */

var waitingDialog = waitingDialog || (function ($) {
    'use strict';

	// Creating modal dialog's DOM
	var $dialog = $(
		'<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
		'<div class="modal-dialog modal-m">' +
		'<div class="modal-content">' +
			'<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
			'<div class="modal-body">' +
				'<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
			'</div>' +
		'</div></div></div>');

	return {
		/**
		 * Opens our dialog
		 * 
		 * @param message
		 *            Custom message
		 * @param options
		 *            Custom options: options.dialogSize - bootstrap postfix for
		 *            dialog size, e.g. "sm", "m"; options.progressType -
		 *            bootstrap postfix for progress bar type, e.g. "success",
		 *            "warning".
		 */
		show: function (message, options) {
			// Assigning defaults
			if (typeof options === 'undefined') {
				options = {};
			}
			if (typeof message === 'undefined') {
				message = 'Loading';
			}
			var settings = $.extend({
				dialogSize: 'm',
				progressType: '',
				onHide: null // This callback runs after the dialog was
								// hidden
			}, options);

			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
			$dialog.find('.progress-bar').attr('class', 'progress-bar');
			if (settings.progressType) {
				$dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
			}
			$dialog.find('h3').text(message);
			// Adding callbacks
			if (typeof settings.onHide === 'function') {
				$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
					settings.onHide.call($dialog);
				});
			}
			// Opening dialog
			$dialog.modal();
		},
		/**
		 * Closes dialog
		 */
		hide: function () {
			$dialog.modal('hide');
		}
	};

})(jQuery);
//export excel



