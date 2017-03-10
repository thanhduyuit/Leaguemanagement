package com.fsoft.coffeesystem.controller;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.coffeesystem.model.DatetimeReportModel;
import com.fsoft.coffeesystem.model.ReportModel;
import com.fsoft.coffeesystem.service.ReportService;

@RestController
@RequestMapping("/")
public class ReportController {
	@Autowired
	ReportService reportService;

	@RequestMapping(value = "/ReportService", method = RequestMethod.POST)
	public List<List<Object>> report(@RequestBody DatetimeReportModel  datetimereportModel) throws JSONException {
		// tao ds tong 
		List<ReportModel> listReport=reportService.getReportService(datetimereportModel.getStartDate(), datetimereportModel.getEndDate());
		// tao danh sach chua nam va sum
		List<List<Object>> array= new ArrayList<List<Object>>();
		List<Object> a;
		double sum=0;
		for(int i=0;i<listReport.size();i++){
			sum+=listReport.get(i).getSum();
		}
		for(int i=0;i<listReport.size();i++){
			a= new ArrayList<Object>();
			a.add(listReport.get(i).getProducts_name());
			a.add(((listReport.get(i).getSum()/sum)*100));
			array.add(a);
		}
		return array ; 
 
	}
	@RequestMapping(value = "/viewreports", method = RequestMethod.GET)
	public ModelAndView report() throws JSONException { 
		return new ModelAndView("Report") ; 
	}
	
}
