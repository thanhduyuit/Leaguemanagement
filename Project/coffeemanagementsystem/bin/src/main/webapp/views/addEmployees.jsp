<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style type="text/css">
	.star:after{
		content: "*";
		color: red;
	}
	
	.error{
		color: red;
	}
</style>
</head>
<body>
	<!-- <button type="button" id="buttonAddEmployee" class="btn  btn-lg btn-primary" data-toggle="modal" data-target="#addEmployee">Them nhan vien</button>
		
	 --><div class="modal fade" id="addEmployee" role="dialog">
		    <div class="modal-dialog">
		    
		      <!-- Modal content-->
		      <div class="modal-content">
		        <div class="modal-header" style="text-transform: capitalize; padding-left: 38%; background-color: #337ab7; color: #fff;">
		          <button type="button" class="close" data-dismiss="modal">&times;</button>
		          <h4 class="modal-title">Thêm Nhân Viên</h4>
		        </div>
		        <form class="form-horizontal" style="font-size: 14px;" id="addEmployee1">
					
			        <div class="modal-body">
		          	  <div class="form-group">
					    <label for="inputNameEmployee" class="col-lg-3 control-label star">Tên nhân viên</label>
					    <div class="col-lg-9">
					      <input type="text" id="nameEmployee" class="form-control validate" name="nameEmployee" placeholder="Tên nhân viên">
					    </div>
					  </div>
						  
					  <div class="form-group">
					    <label for="inputBirthday" class="col-lg-3 control-label star">Ngày sinh</label>
					    <div class="col-lg-9">
					      <input type="date" class="form-control validate" name="birthday" id="birthday" placeholder="Ngày sinh">
					    </div>
					  </div>
					  
					  <div class="form-group">
					    <label for="inputNumberPhone" class="col-lg-3 control-label star">Số điện thoại</label>
					    <div class="col-lg-9">
					      <input type="tel" class="form-control validate" name="numberPhone" id="numberPhone" placeholder="SĐT">
					    </div>
					  </div>
						  
					  <div class="form-group">
					    <label for="inputIdCard" class="col-lg-3 control-label star">CMND</label>
					    <div class="col-lg-9">
					      <input type="text" class="form-control validate" name="idCard" id="idCard" placeholder="CMND">
					    </div>
					  </div>
					  
					  <div class="form-group">
					    <label for="inputAddress" class="col-lg-3 control-label star">Địa chỉ</label>
					    <div class="col-lg-3">
					      <input type="text" class="form-control validate" name="address" id="address" placeholder="Số nhà">
					    </div>					   
					    <div class="col-lg-2">
					        <label for="inputAddress" class="col-lg-3 control-label star">Thành phố</label>
					    </div>
					    <div class="col-lg-4">
							<select class="form-control validate" name="citySelect" id="citySelect" style="color: #999999;">
								<option value="" selected="selected">Thành phố</option>
							</select>					    
						</div>
					  </div>
					  
					  <div class="form-group">
					    <label for="inputAddress" class="col-lg-3 control-label star">Quận</label>					   
					    <div class="col-lg-3">
					        <select class="form-control validate" name="districtSelect" id="districtSelect" style="color: #999999;">
								<option value="" selected="selected">Quận</option>
							</select>
					    </div>
					    <div class="col-lg-2">
					        <label for="inputAddress" class="col-lg-3 control-label star">Phường</label>
					    </div>
					    <div class="col-lg-4">
							<select class="form-control validate" name="wardSelect" id="wardSelect" style="color: #999999;">
								<option value="" selected="selected">Phường</option>
							</select>					    
						</div>
					  </div>
					  
					  <div class="form-group">
					    <label for="inputStartDate" class="col-lg-3 control-label star">Ngày bắt đầu</label>
					    <div class="col-lg-9">
					      <input type="date" class="form-control validate" name="employeeStartDate" id="employeeStartDate"  placeholder="Ngày bắt đầu">
					    </div>
					  </div>
					  
					  <div class="form-group">
					    <label for="inputEndDate" class="col-lg-3 control-label">Ngày kết thúc</label>
					    <div class="col-lg-9">
					      <input type="date" class="form-control" id="employeeEndDate" placeholder="Ngày kết thúc">
					    </div>		    
						    
					  </div>
					  					  
					  <div class="form-group">
					    <label for="inputSalary" class="col-lg-3 control-label star">Lương </label>
					    <div class="col-lg-8">
					      <input type="number" class="form-control validate" name="salary" id="salary" placeholder="lương nhân viên">
					    </div>	
					    <div class="col-lg-1">
					      <h4 style="margin-left: -22px;">VNĐ</h4>
					    </div>				    
					  </div>
						  		  
					  <div class="form-group">
					   	<label for="inputGender" class="col-lg-3 control-label">Giới tính</label>
					    <div class="col-lg-9">
					        <label class="radio-inline">
							  <input type="radio" name="inlineRadioOptions" id="gender" value="1" checked="checked"> Nam
							</label>
							<label class="radio-inline" style="margin-left: 40px">
							  <input type="radio" name="inlineRadioOptions" id="gender" value="0"> Nữ
							</label>
					    </div>
					  </div>
					  
					  <div class="form-group">
					    <label for="inputPosition" class="col-lg-3 control-label star">Chức vụ</label>
					    <div class="col-lg-9">
					      <input type="text" class="form-control validate" name="position" id="position" placeholder="Chức vụ">
					    </div>
					  </div>
						  
					  <div class="form-group">
					    <label for="inputDescribe" class="col-lg-3 control-label">Mô tả</label>
					    <div class="col-lg-9">
					      <textarea class="form-control" id="description" placeholder="Mô tả"></textarea>
					    </div>
					  </div>						
			        </div>
			        <div class="modal-footer">
			          <button type="submit" id="submitAddEmployee" class="btn btn-primary">Save</button>
			          <button type="button" id="buttonCancelAddEmployee" class="btn btn-primary" data-dismiss="modal">Cancel</button>		          
			        </div>		        
		        </form>
		      </div>		      
		    </div>
		  </div>

</body>
</html>