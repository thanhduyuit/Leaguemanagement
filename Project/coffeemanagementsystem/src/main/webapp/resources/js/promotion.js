//initial array,table view for products
var search = [];


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
							"paging" : true,
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
											data : 'storeId',
											"visible" : false
										},
										{
											data : 'id',
											"visible" : false
										},
							            {
							            	"className" : 'details-control',
											"orderable" : false,
											"data" : null,
											"defaultContent" : '<button class="showDetail fa fa-eye" data-toggle="modal" data-target="#view-detail" id="view-promotion"></button>' +
																'<button class="updateDetail fa fa-pencil-square-o" data-toggle="modal" data-target="#edit-detail"></button>' +
																'<button class="deletePromotion fa fa-trash" data-toggle="modal" data-target="#delete-modal"></button>'
										}]
					    } );
				  }
				});
		 return false;
	 		});
	 /*create datatables list promotion*/
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
	 /*view detail promotion when click button view*/
	 $("#table_id tbody").on('click','.showDetail',function(){
		 /*get data from table list promotion*/
			var record = table.row($(this).parents('tr')).data();
			console.log(record['id']);
			/*set data get from table list promotion to view promotion detail*/
			$("#view-name").val(record['name']);
			$("#view-startDate").val(record['startDate']);
			$("#view-endDate").val(record['endDate']);
			
			$.ajax({
				
				contentType : "application/json;charset=UTF-8",
				type: "GET",
	            url: "viewPromotion?id="+record['id'],
				data : JSON.stringify(search),
				  success: function( response ) {
					  console.log(response);
					  tableViewDetail.destroy();
					  tableViewDetail = $('#table_pro_detail').DataTable( {
						  
							"searching" : false,
							"searchable" : true,
							"scrollX" : false,
							"scrolly" : false,
							"scrollCollapse" : true,
							"paging" : true,
							"lengthChange" : false,
							"ordering" : false,
							"paginate" : false,
							"info" : false,
							"sDom" : 'lfrtip',
							 "data" : response ,
							"columns": [	
										{
											data : 'id',
											"visible" : false
										},
								        { data: 'productName' },
							            { data: 'discount' },
										
										{
											data : 'productId',
											"visible" : false
										},
							            {
							            	"className" : 'details-control',
											"orderable" : false,
											"data" : null,
											"defaultContent" : '<button class="update fa fa-pencil-square-o" data-toggle="modal" data-target="#updateProduct"></button>' +
																'<button class="deleteproduct fa fa-trash" data-toggle="modal" data-target="#delProductModal"></button>'
										}]
					    } );
					  
				  }
			});
		});

	 /*edit detail promotion when click button view*/
	 $("#table_id tbody").on('click','.updateDetail',function(){
		 /*get data from table list promotion*/
			var record = table.row($(this).parents('tr')).data();
			console.log(record['id']);
			/*set data get from table list promotion to view promotion detail*/
			$("#edit-name").val(record['name']);
			$("#edit-startDate").val(record['startDate']);
			$("#edit-endDate").val(record['endDate']);
			
			$.ajax({
				
				contentType : "application/json;charset=UTF-8",
				type: "GET",
	            url: "viewPromotion?id="+record['id'],
				data : JSON.stringify(search),
				  success: function( response ) {
					  console.log(response);
					  tableEditDetail.destroy();
					  tableEditDetail = $('#table_edit_detail').DataTable( {
						  
							"searching" : false,
							"searchable" : true,
							"scrollX" : false,
							"scrolly" : false,
							"scrollCollapse" : true,
							"paging" : true,
							"lengthChange" : false,
							"ordering" : false,
							"paginate" : false,
							"info" : false,
							"sDom" : 'lfrtip',
							 "data" : response ,
							"columns": [	
										{
											data : 'id',
											"visible" : false
										},
								        { data: 'productName' },
							            { data: 'discount' },
										
										{
											data : 'productId',
											"visible" : false
										},
							            {
							            	"className" : 'details-control',
											"orderable" : false,
											"data" : null,
											"defaultContent" : '<button class="editDetail fa fa-pencil-square-o" data-toggle="modal" data-target="#updateProduct"></button>' +
																'<button class="deleteproduct fa fa-trash" data-toggle="modal" data-target="#delProductModal"></button>'
										}]
					    } );
					  
				  }
			});
		});
	 /**
	  * function use to delete promotion 
	  */
	 $("#table_id tbody").on('click','.deletePromotion',function(){
		 
		 var record = table.row($(this).parents('tr')).data();
		 	console.log(record['id']);
		 $(".delpro").click(record['id'],function(){
			 	
			 	$.ajax({
			 		url : "deletePromotions?id="+record['id'],
			 		type : "GET",
			 		datatype : 'json',
			 		contentType : "charset=UTF-8",
			 		success : function(resp) {
			 			
			 		},
			 		error : function(err) {
			 			alert('Xóa không được');
			 		}
			 	});
		 });

	
	 });
	});

/**
 * function use to delete promotion
 */


/**
 * function use to add promotion
 */
$('#button_add').click(function() {

	//get data
	var data = {
			"name" :  $("#contractName").val(),
			"startDate" : $("#datepicker2").val(),
			"endDate"  : $("#datepicker3").val(),
			"promotionDetails" : search	
			
	}
	//add custom validate
	jQuery.validator.addMethod("greaterThan", 
			function(value, element, params) {

			    if (!/Invalid|NaN/.test(new Date(value))) {
			        return new Date(value) > new Date($(params).val());
			    }
			},'Phải lớn hơn Ngày bắt đầu.');
	
	jQuery.validator.addMethod("notPast", 
			function(value, element) {
				var d= new Date();
			    if(  d < new Date(value))
			     return true;
			},'Ngày kết thúc không nhỏ hơn hiện tại.');
	
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
				greaterThan : "#datepicker2",
				notPast : true
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
				required : "Vui lòng chọn ngày kết thúc khuyến mãi.", 
				
			}
		},
		//set error if validate 
		errorElement: 'span',
        errorElementClass: 'input-validation-error',
        errorClass: 'field-validation-error',
        
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(this.settings.errorElementClass).removeClass(errorClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(this.settings.errorElementClass).removeClass(errorClass);
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
	      data: JSON.stringify(data),
	      
	      success: function( response ) { 
	    	  alert(response);
	      }
	  	});
	} return false;

	
});


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
/**
 * function use to add promotion detail
 */
$('#add-modal').on('click','#add-detail',function() {
	//add custom validate
	jQuery.validator.addMethod("notSelected", function(value, element) {
	    return this.optional(element) || ((value) != '00');
	}, "Nên chọn sản phẩm cần khuyến mãi");
	
	//validate function for add detail form
	$("#promotionadddetails").validate({
		onfocusout : false,
		rules : {
			'discount' : {
				required : true,
				number: true,
				range: [0, 100],
				notSelected: true
				}
		},
		messages : {
			'discount' : {
				required : "Vui lòng nhập % giảm giá cho sản phẩm .",
				number: "Chỉ được nhập số.",
				range: "chỉ nhập từ 1 đến 100. Vui lòng nhập lại!",
				notSelected : "ss"
				
			}
		},
		errorElement: 'span',
        errorElementClass: 'input-validation-error',
        errorClass: 'field-validation-error',
        
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(this.settings.errorElementClass).removeClass(errorClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(this.settings.errorElementClass).removeClass(errorClass);
        }
	});
	//clear message error
	$('.cancelpromotion,.close').click(function(e){
		e.preventDefault();
	});
	//check validate
	if($("#promotionadddetails").valid()){
		if($("#productName option:selected").text() != '-Chọn sản phẩm-' ){
			
	
		 var e = {'productName' :  $("#productName option:selected").text(),
				  'discount' :  $("#discount").val(),
				  'productId' : $("#productName option:selected").val()};
			
	//add to table in form add promotion
		 search.push(e);	
	//remove option selected
		$("#productName option:selected").remove();
			
		}
	   }
	
	loadtable()
		});
	




/**
 * function use to get List menu 
 */

$('#linkadd').click(function() {
	
	$('#productName')  .find('option')
    .remove().end()
   
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
	
	var index = $(this).parents('tr').index();
	var record = ba.row($(this).parents('tr')).data();
	
	deletedetail(index);
	$('<option>').text(record['productName']).val(record['productId']).appendTo($("#productName"));
		
	
});
/**
 * function use delete promotion_Detail (Insert promotion only)
 */
function deletedetail(index){
		
    search.splice(index,1);
	loadtable();	
}


var tableViewDetail = $('#table_pro_detail')
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
/*create table edit promotion detail*/
var tableEditDetail = $('#table_edit_detail')
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


/**
 * function loadtable
 */
function loadtable(){
	//reload table
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
							"defaultContent" : '<button class="fa fa-pencil-square-o" data-toggle="modal" data-target="#edit-detail"></button></button><button class="delete fa fa-trash"></button>'
						}]
	    } );
	 return false;	
	
}




