package com.fsoft.coffeesystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.OrdersDao;
import com.fsoft.coffeesystem.entity.Orders;
import com.fsoft.coffeesystem.model.OrdersModel;
import com.fsoft.coffeesystem.model.SearchOrderModel;
import com.fsoft.coffeesystem.utilites.Convert;

// TODO: Auto-generated Javadoc
/**
 * The Class OrdersService.
 */
@Service("ordersService")
public class OrdersService {

	/** The orders dao. */
	@Autowired
	private OrdersDao ordersDao;

	/**
	 * Search orders.
	 *
	 * @param searchOrderModel the search order model
	 * @return the list orders
	 */
	public List<OrdersModel> searchOrders(SearchOrderModel searchOrderModel) {
		String name = searchOrderModel.getName();
		String phoneNumber = searchOrderModel.getPhoneNumber();
		String deskName = searchOrderModel.getDeskName();
		Integer totalBill = searchOrderModel.getTotalBill();
		List<Orders> listOrders = ordersDao.searchOrders(name == null ? "" : name,
				phoneNumber == null ? "" : phoneNumber, deskName == null ? "" : deskName, totalBill);
		List<OrdersModel> result = Convert.convertToOrderModel(listOrders);
		return result;
	}

	/**
	 * Delete orders.
	 *
	 * @param ordersModel the orders model
	 * @return true, if successful
	 */
	public boolean deleteOrders(OrdersModel ordersModel) {
		Orders order = ordersDao.findOne(ordersModel.getId());
		order.setIsDelete(true);
		try {
			ordersDao.save(order);
		} catch (Exception e) {
			return false;
		}
		return true;
	}


}
