package com.fsoft.coffeesystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.coffeesystem.model.OrdersModel;
import com.fsoft.coffeesystem.model.SearchOrderModel;
import com.fsoft.coffeesystem.service.DeskService;
import com.fsoft.coffeesystem.service.OrdersService;

// TODO: Auto-generated Javadoc
/**
 * The Class OrdersController.
 */
@RestController
public class OrdersController {

	/** The orders service. */
	@Autowired
	OrdersService ordersService;
	@Autowired
	DeskService deskService;
	/**
	 * Inits the form.
	 *
	 * @return the model and view
	 */
	@RequestMapping(value = "/viewOrders", method = RequestMethod.GET)
	public ModelAndView initForm() {
		return new ModelAndView("orders");
	}
	
	/**
	 * Search.
	 *
	 * @param customerModel
	 *            the customer model
	 * @return the list
	 */
	@RequestMapping(value = "/searchOrders", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<OrdersModel> search(@RequestBody SearchOrderModel searchOrderModel) {
		List<OrdersModel> result = ordersService.searchOrders(searchOrderModel);
		return result;
	}

	/**
	 * Delete orders.
	 *
	 * @param ordersModel
	 *            the orders model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/deleteOrder", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean deleteOrders(@RequestBody OrdersModel ordersModel) {
		boolean result = ordersService.deleteOrders(ordersModel);
		return result;
	}
}
