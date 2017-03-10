$(document).ready(function(){
	
	getListGroupDesk();
	//define datatable
	var table = $('#example').DataTable( {
		
		"bFilter": false,
		"bLengthChange": false,
			data : "",
		"columns" : [
			{
				"data" : 'id'
			},
			{
				"data" : "name"
			},
			{
				"data" : "cost"
			},
			{
				"data" : "description"
			},
			
		{
  "data": null,
  "defaultContent": '<button type="button" class="btn btn-default btn-md" data-title="Edit" data-toggle="modal" data-target="#edit"><span class="glyphicon glyphicon-edit"></span></button><button type="button" class="btn btn-default btn-md btdelete" data-title="Edit" data-toggle="modal" data-target="#delete"><span class="glyphicon glyphicon-remove"></span></button>',
  "targets": -1
}

	
    ],
   
} );
	/**
	 * views list group desk.
	 */
	function getListGroupDesk(){
	$.ajax({
		method:"GET",
		url : "getlistgroupdesk",
		contentType : "application/json;charset=UTF-8",
		dataType : "json",
		success:function(data){
			table.destroy();
			table = $('#example').DataTable( {
					
					"bFilter": false,
					"bLengthChange": false,
					data : data,
					"columns" : [
						{
							 "data": 'id'
						},
						{
							"data" : "name"
						},
						{
							"data" : "cost"
						},
						{
							"data" : "description"
						},
						
					{
		      "data": null,
		      "defaultContent": '<button type="button" class="btn btn-default btn-md btedit" data-title="Edit" data-toggle="modal" data-target="#edit"><span class="glyphicon glyphicon-edit"></span></button><button type="button" class="btn btn-default btn-md btdelete" data-title="Edit" data-toggle="modal" data-target="#delete"><span class="glyphicon glyphicon-remove"></span></button>',
		      "targets": -1
		    }
			
				
		        ],
		        
		    } );
		}
	});
	
}
	/**
	 * Adds the group desk.
	 */
	$("#addgroupdesk").click(function() {
		
		if($("#addform").valid()){
		var name = $("#addname").val();
		var cost = $("#addcost").val();
		var description = $("#addcomment").val();
		//var isDelete = $("#addstatus").val();
		var data = {
				"name":name,
				"cost":cost,
				"description":description,
				//"isDelete":isDelete,
			};
		console.log(data);
		
		$.ajax({
			url : "addgroupdesk",
			method: "POST",
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify(data),
			success : function(id) {
				
				if(id==0){
					getListGroupDesk();
				}
				else{
					  $("#update").modal('show');
					  updategd(id,name,cost,description);
				}
			},
			error: function(){
				alert("Thêm không thành công");
				
			}
		});
		$("#addgroupdesk").attr("data-dismiss","modal");
		}
	});
	/**
	 * delete the group desk.
	 *
	 * @param id the group desk model
	 */
	function deletegd(id){
	$("#deletegroupdesk").click(function() {
		var data = {
				"id":id
			};
		$.ajax({
			url : "deletegroupdesk",
			method: "POST",
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify(data),
			success : function(result) {							
				
				getListGroupDesk();
			},
			error: function(){
				alert("Xóa không thành công");
			}
		});
		$("#deletegroupdesk").attr("data-dismiss","modal");
	});
	}
	/**
	 * get ID group desk in datatable and call function deletegd(id).
	 */
	 $('#example tbody').on( 'click', '.btdelete', function () {	
		 var r = table.row($(this).parents('tr')).data();
		 deletegd(r['id']);
	    } );
	 /**
		 * call function editgd when click button edit
		 */
	 $('#example tbody').on( 'click', '.btedit', function () {	
		 var r = table.row($(this).parents('tr')).data();
		 $("#editname").val(r['name']);
		 $("#editcost").val(r['cost']);
		 $("#editcomment").val(r['description']);
		//$("#editstatus option[value="+r['isDelete']+"]").prop('selected', 'selected').change();
		$("#editgroupdesk").click(function() {
			 if($("#editform").valid()){
			editgd(r['id'],$("#editname").val(),$("#editcost").val(),$("#editcomment").val());
			$("#editgroupdesk").attr("data-dismiss","modal");
			 }
		});
		 
	    } );
	 /**
		 * call function editgd when click button edit
		 */
	 function updategd(id,name,cost,description){
		 $("#updategroupdesk").click(function(){
			 if($("#editform").valid()){
			 editgd(id,name,cost,description);
			 $("#updategroupdesk").attr("data-dismiss","modal");
			 }
		 });
	 }
	 /**
		 * edit the group desk.
		 *
		 * @param id the group desk model
		 * @param name the group desk model
		 * @param cost the group desk model
		 * @param description the group desk model
		 */
	 function editgd(id,name,cost,description){
		
				var data = {
						"id":id,
						"name":name,
						"cost":cost,
						"description":description,
						//"isDelete":isDelete,
					};
				$.ajax({
					url : "updategroupdesk",
					method: "POST",
					dataType: "json",
					contentType: "application/json",
					data: JSON.stringify(data),
					success : function(result) {							
						
						getListGroupDesk();
					},
					error: function(){
						alert("Update không thành công");
					}
				});	
		 
	 }
	 /**
		 * format cost
		 */
	 $('#addcost, #editcost').number( true, 0);
	 
	 /**
		 * check validate for popup add group desk
		 */
	var addvalidator = $("#addform").validate({
		 errorClass: "error",
		  //validClass: "my-valid-class",
		  errorElement: 'span',
		    //errorClass: 'desc',
		 rules: {
			 addname:"required",
			 addcost: {
			      required: true,
			      maxlength: 9
			    }
				
		 },
		 messages: {
			 addname : {
					required : "Vui lòng nhập tên nhóm bàn."
				},
				addcost : {
					required : "Vui lòng nhập phụ thu.",
					maxlength:	"không quá 9 chữ số."
				}
				
		 },
		 submitHandler: function(form) {
		      form.submit();
		    },
	 });
	 /**
	 * check validate for popup edit group desk
	 */
	var editvalidator = $("#editform").validate({
	 errorClass: "error",
	  //validClass: "my-valid-class",
	  errorElement: 'span',
	    //errorClass: 'desc',
	 rules: {
		 editname:"required",
		 editcost: {
		      required: true,
		      maxlength: 9
		    }
			
	 },
	 messages: {
		 editname : {
				required : "Vui lòng nhập tên nhóm bàn."
			},
			editcost : {
				required : "Vui lòng nhập phụ thu.",
				maxlength:	"không quá 9 chữ số."
			}
			
	 },
	 submitHandler: function(form) {
	      form.submit();
	    },
 });
	/**
	 * reset form add
	 */
	$("#btaddnew").click(function(){
		 addvalidator.resetForm();
		 $(".error").removeClass("error");
		 $("#addname").val("");
		 $("#addcost").val(null);
		 
	});
	/**
	 * reset form edit
	 */
	$(".btedit").click(function(){
		 editvalidator.resetForm();
		 $(".error").removeClass("error");
		 
	});
});