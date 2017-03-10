$(document).ready(function() {
		var update_inputName = $("#update_inputName");
		var update_nameErr = $("#update_nameErr");
		var update_inputSl = $("#update_inputSl");
		var update_slErr = $("#update_slErr");
		var update_inputGia = $("#update_inputGia");
		var update_giaErr = $("#update_giaErr");

		//focus out
		update_inputName.blur(validate_update_name);
		update_inputSl.blur(validate_update_sl);
		update_inputGia.blur(validate_update_gia);
		
		$("#updateWarehouse").on('submit', function(){
			if(validate_update_name() & validate_update_sl() & validate_update_gia()){
				return true;
			}else{
				return false;
			}
		});
		
		function validate_update_name(){
			var str = update_inputName.val();
			var email = new RegExp(/^[a-zA-Z0-9 .!?"-]+$/);
			if(update_inputName.val()==""){
				update_inputName.addClass("error");
				update_nameErr.text("Tên không được bỏ trống!")
				update_nameErr.addClass("error");
				return false;
			}else if(!email.test(str)){
				update_inputName.addClass("error");
				update_nameErr.text("Tên chỉ được chứa chữ cái và số!")
				update_nameErr.addClass("error");
				return false;
			}else {
				update_inputName.removeClass("error");
				update_nameErr.text("")
				update_nameErr.removeClass("error");
				return true;
			}
		}
		function validate_update_sl(){
			if(update_inputSl.val()==""){
				update_inputSl.addClass("error");
				update_slErr.text("Số lượng không được bỏ trống!")
				update_slErr.addClass("error");
				return false;
			}else if(update_inputSl.val()==0){
				update_inputSl.addClass("error");
				update_slErr.text("Số lượng không thể bằng không!")
				update_slErr.addClass("error");
				return false;
			}else if(update_inputSl.val()<0){
				update_inputSl.addClass("error");
				update_slErr.text("Số lượng không thể âm!")
				update_slErr.addClass("error");
				return false;
			}else{
				update_inputSl.removeClass("error");
				update_slErr.text("")
				update_slErr.removeClass("error");
				return true;
			}
		}
		function validate_update_gia(){
			if(update_inputGia.val()==""){
				update_inputGia.addClass("error");
				update_giaErr.text("Giá không được bỏ trống!")
				update_giaErr.addClass("error");
				return false;
			}else if(update_inputGia.val()==0){
				update_inputGia.addClass("error");
				update_giaErr.text("Giá không thể bằng không!")
				update_giaErr.addClass("error");
				return false;
			}else if(update_inputGia.val()<0){
				update_inputGia.addClass("error");
				update_giaErr.text("Giá không thể âm!")
				update_giaErr.addClass("error");
				return false;
			}else{
				update_inputGia.removeClass("error");
				update_giaErr.text("")
				update_giaErr.removeClass("error");
				return true;
			}
		}
});