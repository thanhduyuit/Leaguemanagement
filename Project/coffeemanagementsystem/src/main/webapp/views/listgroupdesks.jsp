<%@ page language="java" contentType="text/HTML; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML >
<HTML>
<HEAD>
<META http-equiv="Content-Type" content="text/HTML; charset=UTF-8">
<TITLE>Insert TITLE here</TITLE>
<LINK rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
	 <LINK rel='stylesheet' href='https://cdn.datatables.net/1.10.13/css/dataTables.bootstrap.min.css'>
	 <LINK rel='stylesheet' href='https://cdn.datatables.net/responsive/2.1.1/css/responsive.bootstrap.min.css'>
	 <LINK rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.1/css/bootstrap-select.min.css">
		<style>
		
.error {
  color: #FF0000;
  
}
		</style>
</HEAD>
<BODY>
	<DIV>
            <TABLE id="example" class="table table-bordred table-striped" style="width: 100%;">
                <THEAD>
                    <TR>
                        <TH>Mã Nhóm Bàn</TH>
                        <TH>Tên Nhóm Bàn</TH>
                        <TH>Phụ THu</TH>
                        <TH>Mô Tả</TH>
						   <TH>Tùy Chọn</TH>
                        
                    </TR>
                </THEAD>
            </TABLE>
			<BUTTON style="margin-left : 90%" id="btaddnew" type="BUTTON" class="btn btn-primary" data-title="Edit" data-toggle="modal" data-target="#popupadd" ><SPAN class="glyphicon glyphicon-plus"></SPAN> Thêm Mới</BUTTON>
        </DIV>
		
		<!--edit -->
<DIV class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <DIV class="modal-dialog">
	<DIV class="modal-content">
		<DIV class="modal-header">
			
			<H3 class="modal-title" id="lineModalLabel">Sửa</H3>
		</DIV>
		<DIV class="modal-body">
			<FORM id="editform">
              <DIV class="form-group">
                <LABEL for="editname">Tên Nhóm Bàn</LABEL>
                <LABEL id="error1" style="color:red"></LABEL>
                <INPUT type="text" class="form-control validate" id="editname" name="editname" placeholder="Tên nhóm bàn">
              </DIV>
              <DIV class="form-group">
                <LABEL for="editcost">Phụ Thu</LABEL>
                <LABEL id="error2" style="color:red"></LABEL>
                <INPUT type="text" class="form-control validate" id="editcost" name="editcost" placeholder="Phụ thu">
              </DIV>
			   <DIV class="form-group">
      <LABEL for="comment">Mô Tả</LABEL>
      <TEXTAREA class="form-control" rows="5" id="editcomment"></TEXTAREA>
    </DIV>
      <DIV class="modal-footer ">
        <BUTTON id="editgroupdesk" type="BUTTON" class="btn btn-primary"  ><SPAN class="glyphicon glyphicon-ok-sign"></SPAN> Sửa</BUTTON>
        <BUTTON type="BUTTON" class="btn btn-default" data-dismiss="modal"><SPAN class="glyphicon glyphicon-remove"></SPAN> Hủy</BUTTON>
      </DIV>
            </FORM>
		</DIV>
	</DIV>
  </DIV>
</DIV>
<!--add -->
<DIV class="modal fade" id="popupadd" tabindex="-1" role="dialog">
  <DIV class="modal-dialog">
	<DIV class="modal-content">
		<DIV class="modal-header">
			<h3 class="modal-title" id="lineModalLabel">Thêm</h3>
		</DIV>
		<DIV class="modal-body">
			<FORM id="addform">
              <DIV class="form-group">
                <LABEL for="addname">Tên Nhóm Bàn</LABEL>
                <LABEL id="error1" style="color:red"></LABEL>
                <INPUT type="text" class="form-control validate" id="addname" name="addname" placeholder="Tên nhóm bàn">
              </DIV>
              <DIV class="form-group">
                <LABEL for="addcost">Phụ Thu</LABEL>
                <LABEL id="error2" style="color:red"></LABEL>
                <INPUT type="text" class="form-control validate" id="addcost" name="addcost" placeholder="Phụ thu">
              </DIV>
			  <DIV class="form-group">
      <LABEL for="comment">Mô Tả</LABEL>
      <TEXTAREA class="form-control" rows="5" id="addcomment"></TEXTAREA>
    </DIV>
      <DIV class="modal-footer ">
        <BUTTON id="addgroupdesk" type="submit" class="btn btn-primary" ><SPAN class="glyphicon glyphicon-ok-sign"></SPAN> Thêm</BUTTON>
        <BUTTON type="BUTTON" class="btn btn-default" data-dismiss="modal"><SPAN class="glyphicon glyphicon-remove"></SPAN> Hủy</BUTTON>
      </DIV>
            </FORM>
		</DIV>
	</DIV>
  </DIV>
</DIV>
<!-- delete -->
<DIV class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
      <DIV class="modal-dialog">
    <DIV class="modal-content">
          <DIV class="modal-header">
        <BUTTON type="BUTTON" class="close" data-dismiss="modal" aria-hidden="true"><SPAN class="glyphicon glyphicon-remove" aria-hidden="true"></SPAN></BUTTON>
        <H4 class="modal-title custom_align" id="heading">Xóa</H4>
      </DIV>
          <DIV class="modal-body">
       
       <DIV class="alert alert-danger"><SPAN class="glyphicon glyphicon-warning-sign"></SPAN> Bạn có chắn chắn muốn xóa nhóm bàn này?</DIV>
       
      </DIV>
        <DIV class="modal-footer ">
        <BUTTON id="deletegroupdesk" type="BUTTON" class="btn btn-primary" ><SPAN class="glyphicon glyphicon-ok-sign"></SPAN> Xóa</BUTTON>
        <BUTTON type="BUTTON" class="btn btn-default" data-dismiss="modal"><SPAN class="glyphicon glyphicon-remove"></SPAN> Hủy</BUTTON>
      </DIV>
        </DIV>
    <!-- /.modal-content --> 
  </DIV>
      <!-- /.modal-dialog --> 
    </DIV>
    <!-- update -->
<DIV class="modal fade" id="update" tabindex="-1" role="dialog" aria-labelledby="update" aria-hidden="true">
      <DIV class="modal-dialog">
    <DIV class="modal-content">
          <DIV class="modal-header">
        <BUTTON type="BUTTON" class="close" data-dismiss="modal" aria-hidden="true"><SPAN class="glyphicon glyphicon-remove" aria-hidden="true"></SPAN></BUTTON>
        <H4 class="modal-title custom_align" id="heading">Cập Nhập</H4>
      </DIV>
          <DIV class="modal-body">
       
       <DIV class="alert alert-danger"><SPAN class="glyphicon glyphicon-warning-sign"></SPAN> Tên nhóm bàn đã tồn tại bạn có muốn cập nhập với thông tin vừa nhập không?</DIV>
       
      </DIV>
        <DIV class="modal-footer ">
        <BUTTON id="updategroupdesk" type="BUTTON" class="btn btn-primary" ><SPAN class="glyphicon glyphicon-ok-sign"></SPAN> Cập Nhập</BUTTON>
        <BUTTON type="BUTTON" class="btn btn-default" data-dismiss="modal"><SPAN class="glyphicon glyphicon-remove"></SPAN> Hủy</BUTTON>
      </DIV>
        </DIV>
    <!-- /.modal-content --> 
  </DIV>
      <!-- /.modal-dialog --> 
    </DIV>
</BODY>
	<SCRIPT src="resources/js/groupdesk.js"></SCRIPT>
	<SCRIPT src="resources/js/jquery.number.js"></SCRIPT>
</HTML>