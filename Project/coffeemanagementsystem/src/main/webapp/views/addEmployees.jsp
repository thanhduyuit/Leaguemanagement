<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML >
<HTML>
<HEAD>
	<META http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<TITLE>Thêm nhân viên</TITLE>
	<STYLE type="text/css">
		.star:after{
			content: "*";
			color: red;
		}
		
		.error{
			color: red;
		}
	</STYLE>
</HEAD>
<BODY>
	<DIV class="modal fade" id="addEmployee" role="dialog">
		    <DIV class="modal-dialog">
		    
		      <!-- Modal content-->
		      <DIV class="modal-content">
		        <DIV class="modal-header" style="text-transform: capitalize; padding-left: 38%; background-color: #337ab7; color: #fff;">
		          <BUTTON type="button" class="close" data-dismiss="modal">&times;</BUTTON>
		          <H4 class="modal-title">Thêm Nhân Viên</H4>
		        </DIV>
		        <FORM class="form-horizontal" style="font-size: 14px;" id="addEmployee1">
					
			        <DIV class="modal-body">
		          	  <DIV class="form-group">
					    <LABEL for="inputNameEmployee" class="col-lg-3 control-label star">Tên nhân viên</LABEL>
					    <DIV class="col-lg-9">
					      <INPUT type="text" id="nameEmployee" class="form-control validate" name="nameEmployee" placeholder="Tên nhân viên">
					    </DIV>
					  </DIV>
						  
					  <DIV class="form-group">
					    <LABEL for="inputBirthday" class="col-lg-3 control-label star">Ngày sinh</LABEL>
					    <DIV class="col-lg-9">
					      <INPUT type="date" class="form-control validate" name="birthday" id="birthday" placeholder="Ngày sinh">
					      <DIV id="errorDate" class="error"></DIV>
					    </DIV>
					    
					  </DIV>
					  
					  <DIV class="form-group">
					    <LABEL for="inputNumberPhone" class="col-lg-3 control-label star">Số điện thoại</LABEL>
					    <DIV class="col-lg-9">
					      <INPUT type="tel" class="form-control validate" name="numberPhone" id="numberPhone" placeholder="SĐT">
					    </DIV>
					  </DIV>
						  
					  <DIV class="form-group">
					    <LABEL for="inputIdCard" class="col-lg-3 control-label star">CMND</LABEL>
					    <DIV class="col-lg-9">
					      <INPUT type="text" class="form-control validate" name="idCard" id="idCard" placeholder="CMND">
					    </DIV>
					  </DIV>
					  
					  <DIV class="form-group">
					    
					    <LABEL for="inputAddress" class="col-lg-3 control-label star">Thành phố</LABEL>
					    
					    <DIV class="col-lg-3">
							<SELECT class="form-control validate" name="citySelect" id="citySelect" style="color: #999999;">
								<OPTION value="" selected="selected">Thành phố</OPTION>
							</SELECT>					    
						</DIV>
						<DIV class="col-lg-2">
							<LABEL for="inputAddress" class="col-lg-3 control-label star">Quận</LABEL>	
						</DIV>				   
					    <DIV class="col-lg-4">
					        <SELECT class="form-control validate" name="districtSelect" id="districtSelect" style="color: #999999;">
								<OPTION value="" selected="selected">Quận</OPTION>
							</SELECT>
					    </DIV>
					  </DIV>
					  
					  <DIV class="form-group">
					  	<LABEL for="inputAddress" class="col-lg-3 control-label star">Địa chỉ</LABEL>
					    
					    <DIV class="col-lg-3">
					      <INPUT type="text" class="form-control validate" name="address" id="address" placeholder="Số nhà">
					    </DIV>	
					  	<DIV class="col-lg-2">
					    <LABEL for="inputAddress" class="col-lg-3 control-label star">Phường</LABEL>
						</DIV>
					    <DIV class="col-lg-4">
							<SELECT class="form-control validate" name="wardSelect" id="wardSelect" style="color: #999999;">
								<OPTION value="" selected="selected">Phường</OPTION>
							</SELECT>					    
						</DIV>											   
					    
					  </DIV>
					  
					  <DIV class="form-group">
					    <LABEL for="inputStartDate" class="col-lg-3 control-label star">Ngày bắt đầu</LABEL>
					    <DIV class="col-lg-9">
					      <INPUT type="date" class="form-control validate" name="employeeStartDate" id="employeeStartDate"  placeholder="Ngày bắt đầu">
					    </DIV>
					  </DIV>
					  
					  <DIV class="form-group">
					    <LABEL for="inputEndDate" class="col-lg-3 control-label">Ngày kết thúc</LABEL>
					    <DIV class="col-lg-9">
					      <INPUT type="date" class="form-control" id="employeeEndDate" placeholder="Ngày kết thúc">
					      <DIV id="errorEndDate" class="error"></DIV>
					    </DIV>		    
						    
					  </DIV>
					  					  
					  <DIV class="form-group">
					    <LABEL for="inputSalary" class="col-lg-3 control-label star">Lương </LABEL>
					    <DIV class="col-lg-8">
					      <INPUT type="number" class="form-control validate" name="salary" id="salary" placeholder="lương nhân viên">
					    </DIV>	
					    <DIV class="col-lg-1">
					      <H4 style="margin-left: -22px;">VNĐ</H4>
					    </DIV>				    
					  </DIV>
						  		  
					  <DIV class="form-group">
					   	<LABEL for="inputGender" class="col-lg-3 control-label">Giới tính</LABEL>
					    <DIV class="col-lg-9">
					        <LABEL class="radio-inline">
							  <INPUT type="radio" name="inlineRadioOptions" id="gender" value="1" checked="checked"> Nam
							</LABEL>
							<LABEL class="radio-inline" style="margin-left: 40px">
							  <INPUT type="radio" name="inlineRadioOptions" id="gender" value="0"> Nữ
							</LABEL>
					    </DIV>
					  </DIV>
					  
					  <DIV class="form-group">
					    <LABEL for="inputPosition" class="col-lg-3 control-label star">Chức vụ</LABEL>
					    <DIV class="col-lg-9">
					      <INPUT type="text" class="form-control validate" name="position" id="position" placeholder="Chức vụ">
					    </DIV>
					  </DIV>
						  
					  <DIV class="form-group">
					    <LABEL for="inputDescribe" class="col-lg-3 control-label">Mô tả</LABEL>
					    <DIV class="col-lg-9">
					      <TEXTAREA class="form-control" id="description" placeholder="Mô tả"></TEXTAREA>
					    </DIV>
					  </DIV>						
			        </DIV>
			        <DIV class="modal-footer">
			          <BUTTON type="submit" id="submitAddEmployee" class="btn btn-primary">Thêm</BUTTON>
			          <BUTTON type="button" id="buttonCancelAddEmployee" class="btn btn-primary" data-dismiss="modal">Hủy</BUTTON>		          
			        </DIV>		        
		        </FORM>
		      </DIV>		      
		    </DIV>
		  </DIV>

</BODY>
</HTML>