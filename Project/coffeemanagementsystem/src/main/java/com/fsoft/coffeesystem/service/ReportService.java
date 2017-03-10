package com.fsoft.coffeesystem.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.controller.WardController;
import com.fsoft.coffeesystem.dao.OrdersDao;
import com.fsoft.coffeesystem.entity.OrderDetail;
import com.fsoft.coffeesystem.entity.Orders;
import com.fsoft.coffeesystem.model.ReportModel;

@Service("reportService")
public class ReportService {

	@Autowired
	private OrdersDao orderDao;	
	static final Logger log = Logger.getLogger(WardController.class.getName());

	public List<ReportModel> getReportService(String startDate, String endDate) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		// tim kiem tat ca co trong order
		List<Orders> list = orderDao.findAll();
		// tao ds chua truong name va sum
		List<ReportModel> report= new ArrayList<ReportModel>();
		ReportModel reportModel;
		// lay ra  sp
		try {
			for(int j=0; j < list.size() && j <= 5; j++) {
				if (list.get(j).getDate().before(sdf.parse(endDate))
						&& list.get(j).getDate().after(sdf.parse(startDate))) {
					for (OrderDetail orderDetail : list.get(j).getOrderDetails()) {
						boolean flag=false;
						for (int i=0;i<report.size();i++) {
							if(report.get(i).getProducts_name().equalsIgnoreCase(orderDetail.getProduct().getName())){
								report.get(i).setSum(report.get(i).getSum()+ orderDetail.getQuantity());
								flag=true;
								break;
							}
						}
						if(!flag){ 
							reportModel= new ReportModel();
							reportModel.setProducts_name(orderDetail.getProduct().getName());
							reportModel.setSum(orderDetail.getQuantity());
							report.add(reportModel);
						}
					}
					
				}
			}
			return report;
		} catch (Exception e) {
			e.printStackTrace();
			log.log(Level.INFO, e.getMessage(),e);
			return null;
			
		}

	}

}
