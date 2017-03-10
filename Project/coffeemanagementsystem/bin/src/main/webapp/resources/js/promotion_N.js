


$(document).ready(function() {
 
	
	
	
	 $("#frmSearch").submit(function(e) {
		 var frm = $('#frmSearch');
		 e.preventDefault();
		 /*get value of form put in search object*/
		 var search = {
					'promotionName' : $("#promotionName").val(),
					'startDate' : $("#startDate").val(),
					'endDate' : $("#endDate").val()
				}
		 /*get data of promotion follow criteria of form search*/
			$.ajax({
				
				contentType : "application/json;charset=UTF-8",
				type: frm.attr('method'),
	            url: frm.attr('action'),
				data : JSON.stringify(search),
				  success: function( response ) {
					  /*put data response in datatables */
					  console.log(response);
					  table.destroy();
					  table = $('#table_id').DataTable( {
						  
							"searching" : false,
							"searchable" : true,
							"scrollX" : false,
							"scrolly" : false,
							"scrollCollapse" : true,
							"paging" : false,
							"lengthChange" : false,
							"ordering" : false,
							"paginate" : false,
							"info" : false,
							"sDom" : 'lfrtip',
							 "data" : response ,
							"columns": [
							            
							            { data: 'name' },
							            { data: 'startDate' },
							            { data: 'endDate' },
							            {
											"className" : 'details-control',
											"orderable" : false,
											"data" : null,
											"defaultContent" : '<button class="viewDetails fa fa-pencil-square-o" data-toggle="modal" data-target="#view-modal"></button><button class="update fa glyphicon-zoom-in"></button></button><button class="delete fa fa-trash"></button>'
										}]
					    } );
				    
				  }
				});
		 return false;
	 		});
	 /*create datatables*/
	 var table = $('#table_id')
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
				});
	

	});


function findById(id) {
	var pos;
	for (var i = 0; i < data.length; i++) {
		if (data[i].id === id)
			pos = i;
	}
	return pos;
}


var posDel;
function delCus (pos) {
	posDel = pos;
}



function editCus(pos) {
	$('#edit-modal').on('show.bs.modal', function() {
		$(this).find('input[id="promotionName"]').val(data[pos].promotionName);
		$(this).find('input[id="datepicker4"]').val(data[pos].startDate);
		$(this).find('input[id="datepicker5"]').val(data[pos].endDate);
		
	});
}

function submitSave() {
	
	$('#edit-modal').on('hide.bs.modal', function(){
		var id = $(e.currentTarget).find('input[id="id"]').val();
		console.log(id);
		pos = findById(id);
		data[pos].name = $(this).find('input[id="promotionName"]').val();
		data[pos].phone = $(this).find('input[id="datepicker4"]').val();
		data[pos].point = $(this).find('input[id="datepicker5"]').val();
		
		console.log (data[pos]);
		$(this).off('hide.bs.modal');
		update();
	});
}



function submitDel() {
	console.log(posDel);
	$('#delete-modal').on('hide.bs.modal', function(e){
		data.splice(posDel, 1);
		console.log(data);
		$(this).off('hide.bs.modal');
		updateButton();
		update();
	});
}

function viewCus (pos) {
	$('#view-modal').on('show.bs.modal', function() {
		$(this).find('label[id="promotionName"]').text(data[pos].promotionName);
		$(this).find('label[id="datepicker4"]').text(data[pos].startDate);
		$(this).find('label[id="datepicker5"]').text(data[pos].endDate);
	})
}
/**
 * function use to add promotion
 */

$('#button_add').click(function() {
	
	
	//get data from form
	var promotion = new Object();
	promotion.name =  $("#contractName").val();
	promotion.startDate =  $("#datepicker2").val();
	promotion.endDate =  $("#datepicker3").val();
	
	
	//check validate form by validate jquery
	$("#addpromotion").validate({
		onfocusout : false,
		rules : {
			'name' : {
				required : true,
				maxlength : 30
			},
			'start' : {
				required : true
			},
			'end' : {
				required : true,
			}
		},
		messages : {
			'name' : {
				required : "Vui lòng nhập tên khuyến mãi .",
				maxlength : "Tên sản phẩm nhỏ hơn 31 ký tự. Vui lòng nhập lại!"
			},
			'start' : {
				required : "Vui lòng chọn ngày bắt đầu khuyến mãi."
			},
			'end' : {
				required : "Vui lòng chọn ngày kết thúc khuyến mãi."
			}
		}
	});
	//clear message error
	$('.cancelpromotion,.close').click(function(e){
		e.preventDefault();
		$("#add-promotion").validate().resetForm();
	});
	
	// validate 
	if( $("#addpromotion").valid() ) {
	//true request server
	$.ajax(  {
		  type: 'POST',
		  url : "insertPromotions",
		  contentType: "application/json; charset=utf-8",
	      dataType: "json",
	      data: JSON.stringify(promotion),
	      success: function( response ) { 
	    	  alert(response);
	      }
	  	});
	} return false;

	
});
/**
 * function use to add promotion detail
 */
var search = [];
var ba = $('#table_product')
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
		});


$('#add-detail').click(function() {
	/*create datatables*/
	if($("#productName option:selected").text() != '-Chọn sản phẩm-' ){
	var e = {'productName' :  $("#productName option:selected").text(),
			  'discount' :  $("#discount").val(),
			  'productId' : $("#productName option:selected").val()};
	
	 search.push(e);	
	}

		 ba.destroy();
		 ba = $('#table_product').DataTable( {
			  
				"searching" : false,
				"searchable" : true,
				"scrollX" : false,
				"scrolly" : false,
				"scrollCollapse" : true,
				"paging" : false,
				"lengthChange" : false,
				"ordering" : false,
				"paginate" : false,
				"info" : false,
				"sDom" : 'lfrtip',
				 "data" : search ,
				 "columns": [
				            
				            { data: 'productName' },
				            { data: 'discount' },
				            { data: 'productId',
				              "visible" : false
				            },
				            {
								"className" : 'details-control',
								"orderable" : false,
								"data" : null,
								"defaultContent" : '<button class="fa fa-pencil-square-o updatedetail" data-toggle="modal" data-target="#edit-detail"></button></button><button class="delete fa fa-trash" data-toggle="modal" data-target="#delete-detail"></button>'
							}]
		    } );
		 return false;
		});
	




/**
 * function use to get List menu 
 */

$('#linkadd').click(function() {

	$.ajax(  {
		  type: 'GET',
		  url : "getproduct",
		  contentType: "application/json; charset=utf-8",
	      dataType: "json",
	      success: function( response ) {  
	    	 
	    	 var list = response;
	    	 var sel = $('#productName');
	    	 for (var i = 0; i < list.length; i++)
	    	 {
	    		 $('<option>').text(list[i].name).val(list[i].id).appendTo(sel);
	    	 }
	      }
	  	});
	});
$(".cancel").click(function() {
	$("#myModal").modal("show");
});
/**
 * function use to delete promotion 
 */
function deletepromotion(id) {

	$.ajax({
		url : 'deletePromotions',
		data : {
			"id" : id,
		},
		type : "GET",
		datatype : 'json',
		contentType : "charset=UTF-8",
		success : function(resp) {
			resetTable();
		},
		error : function(err) {
			alert(err);
		}
	});
}
/**
 * function use to update promotion 
 */
function updatepromotion() {

	var name =  $("#promotionName").val();
	var startDate =  $("#datepicker4").val();
	var endDate =  $("#datepicker5").val();

	$.ajax({
		url : "updatePromotions",
		data : {
			"id" : 1,
			"name" : name,
			"startDate" : startDate,
			"endDate" : endDate,
		},
		type : "POST",
		contentType : "charset=UTF-8",
		success : function(resp) {
			if(resp==true)resetTable();
		},
		error : function(err) {
			alert("error");
		}

	});
}
//get id to delete
$("#table_product tbody").on('click','.delete',function(){
	var index = ba.row($(this).parents('td').parents('tr')).index();
	var row = table.row($(this).parents('tr'));
	$('#delete-detail').on('click','.deletedetail',function(){
	deletedetail(index);
		});
});
/**
 * function use delete promotion_Detail (Insert promotion only)
 */
function deletedetail(index){
	search.splice(index, 1);
	alert('xóa thành công');
	var row = table.row($(this).parents('tr'));
	row.remove().draw();
}
/**
 * function use update promotion_Detail (Insert promotion only)
 */
/*$("#table_product tbody").on('click','.updatedetail',function(){
	//get index
	var index = ba.row($(this).parents('td').parents('tr')).index();
	
	var data = ba.row($(this).parents("tr")).data();
	//put value for input in form update promotion detail
	var id = $("#productName option:selected");
	id.value = data["productId"];
	var discount = $("#discount");
	name.value = data["discount"];
	
	$("#update-detail").click(index,function(){
		
		//get data edit
	
			for(var i=0;i < search.length(); i ++){
				if (search[i].index() == index)
					{
						search[i]productId =$("#productName option:selected").val();
						search[i]productName=$("#productName option:selected").text();
						search[i]discount =  $("#discount").val();
					}
			}
		
		
		 ba.destroy();
		 ba = $('#table_product').DataTable( {
			  
				"searching" : false,
				"searchable" : true,
				"scrollX" : false,
				"scrolly" : false,
				"scrollCollapse" : true,
				"paging" : false,
				"lengthChange" : false,
				"ordering" : false,
				"paginate" : false,
				"info" : false,
				"sDom" : 'lfrtip',
				 "data" : data ,
				 "columns": [
				            
				            { data: 'productName' },
				            { data: 'discount' },
				            { data: 'productId',
				              "visible" : false
				            },
				            {
								"className" : 'details-control',
								"orderable" : false,
								"data" : null,
								"defaultContent" : '<button class="fa fa-pencil-square-o" data-toggle="modal" data-target="#edit-detail"></button></button><button class="delete fa fa-trash" data-toggle="modal" data-target="#delete-detail"></button>'
							}]
		    } );
		 return false;	
		
		});
});*/


