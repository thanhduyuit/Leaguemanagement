$(document).ready(function(){
	$("#search").validate({
		onfocusout : false,
		rules : {
			'productName' : {
				required : false,
				maxlength : 20
			},
			'pricefrom' : {
				required : false,
				minlength: 0,
				maxlength: 12
			},
			'priceto' : {
				required : false,
				minlength: 0,
				maxlength: 12
			}
		},
		messages : {
			'productName' : {
				maxlength : "Tên nhân viên phải nhỏ hơn 20 ký tự. Vui lòng nhập lại!"
			}
		}
		,
		messages : {
			'pricefrom' : {
				maxlength: "Giá từ nhỏ hơn hoặc bằng 12 ký tự. Vui lòng nhập lại!",
			}
		}
		,
		messages : {
			'priceto' : {
				maxlength: "Giá từ nhỏ hơn hoặc bằng 12 ký tự. Vui lòng nhập lại!",
			}
		}
	});
});