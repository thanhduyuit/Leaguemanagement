function FormatNumber(str) {
	var strTemp = GetNumber(str);
	if (strTemp.length <= 3)
		return strTemp;
	strResult = "";
	for (var i = 0; i < strTemp.length; i++)
		strTemp = strTemp.replace(",", "");
	var m = strTemp.lastIndexOf(".");
	if (m == -1) {
		for (var i = strTemp.length; i >= 0; i--) {
			if (strResult.length > 0 && (strTemp.length - i - 1) % 3 == 0)
				strResult = "," + strResult;
			strResult = strTemp.substring(i, i + 1) + strResult;
		}
	} else {
		var strphannguyen = strTemp.substring(0, strTemp.lastIndexOf("."));
		var strphanthapphan = strTemp.substring(strTemp.lastIndexOf("."),
				strTemp.length);
		var tam = 0;
		for (var i = strphannguyen.length; i >= 0; i--) {

			if (strResult.length > 0 && tam == 4) {
				strResult = "," + strResult;
				tam = 1;
			}

			strResult = strphannguyen.substring(i, i + 1) + strResult;
			tam = tam + 1;
		}
		strResult = strResult + strphanthapphan;
	}
	return strResult;
}
//ConnectDB.getConnection();
//System.out.println(request.getParameter(PRICEFROM).isEmpty()+" fdsf  "+request.getParameter(PRODUCTNAME)+request.getParameter(PRICEFROM)+request.getParameter(PRICETO));
//response.setCharacterEncoding("UTF-8"); 
//response.setContentType("application/json");
//response.getWriter().println(ConnectDB.searchListProduct(
//		request.getParameter(PRODUCTNAME).trim().toString(), 
//		request.getParameter(PRODUCTGROUPNAME).equalsIgnoreCase("")?"":request.getParameter(PRODUCTGROUPNAME).trim().toString(), 
//		request.getParameter(PRICEFROM).isEmpty()?"0":request.getParameter(PRICEFROM),
//		request.getParameter(PRICETO).isEmpty()?"0":request.getParameter(PRICETO)).toString());
//response.getWriter().close();
function GetNumber(str) {
	var count
	= 0;
	for (var i = 0; i < str.length; i++) {
		var temp = str.substring(i, i + 1);
		if (!(temp == "," || temp == "." || (temp >= 0 && temp <= 9))) {
			return str.substring(0, i);
		}
		if (temp == " ")
			return str.substring(0, i);
		if (temp == ".") {
			if (count > 0)
				return str.substring(0, ipubl_date);
			count++;
		}
	}
	return str;
}

function IsNumberInt(str) {
	for (var i = 0; i < str.length; i++) {
		var temp = str.substring(i, i + 1);
		if (!(temp == "." || (temp >= 0 && temp <= 9))) {
			return str.substring(0, i);
		}
		if (temp == ",") {
			return str.substring(0, i);
		}
	}
	return str;
}