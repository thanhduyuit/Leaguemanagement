/*
* CustomerController
*
* 16-01-2017
*
* Copyright notice
*
* Modification Logs:
* DATE 			AUTHOR 		DESCRIPTION
* --------------------------------------------------------
* 16-Jan-2016 	KienTX2 	Create
* 
*/

package com.fsoft.coffeesystem.controller;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.coffeesystem.entity.Customer;
import com.fsoft.coffeesystem.model.CustomerModel;
import com.fsoft.coffeesystem.service.CustomerService;
import com.fsoft.coffeesystem.utilites.Convert;

@RestController
@RequestMapping("/customer")
public class CustomerController {
	
	/*
	 * Customer Service
	 */
	@Autowired
	private CustomerService customerService;

	/*
	 * Log tool
	 */
	static final Logger log = Logger.getLogger(CustomerController.class.getName());

	/*
	 * Display customer page
	 * 
	 * @return customermanagement.jsp
	 */
	@RequestMapping("")
	public ModelAndView view() {
		return new ModelAndView("/customermanagement");
	}

	/*
	 * Search customer
	 * 
	 * @param Customer
	 * 
	 * @return List<CustomerModel>
	 */
	@RequestMapping(value = "/search", method = RequestMethod.POST)
	public List<CustomerModel> searchCustomer(@RequestBody Customer data) {
		List<Customer> listCustomer = customerService.search(data);
		List<CustomerModel> listCustomerModel;
		listCustomerModel = Convert.convertCustomer(listCustomer);
		
		return listCustomerModel;
	}

	/*
	 * insert customer's information into database input: take customer's
	 * information from customermanagement.jsp view to pass CustomerService
	 * output: String "{\"success\": true}" or "{\"success\": false}"
	 */
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public String addCustomer(@RequestBody CustomerModel data) {
		return customerService.create(data);
	}

	/*
	 * Delete customer
	 * 
	 * @param CustomerModel
	 * 
	 * @return "{\"success\": boolean}"
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public String deleteCustomer(@RequestBody CustomerModel data) {
		return customerService.delete(data);
	}

	/*
	 * Update customer
	 * 
	 * @param CustomerModel
	 * 
	 * @return "{\"success\": boolean}"
	 */
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String updateCustomer(@RequestBody CustomerModel data) {
		return customerService.update(data);
	}

	/*
	 * check phone exist in database input: take customer's phone number from
	 * customermanagement.jsp view to pass CustomerService output: String
	 * "{\"success\": true}" or "{\"success\": false}"
	 */
	@RequestMapping(value = "/checkphone", method = RequestMethod.POST)
	public String checkPhone(@RequestBody CustomerModel data) {
		return customerService.checkPhone(data);
	}

	/*check email exist in database 
	 *input: take customer's email number from customermanagement.jsp view to pass CustomerService
	 *output: String "{\"success\": true}" or "{\"success\": false}"
	 */
	@RequestMapping(value = "/checkmail", method = RequestMethod.POST)
	public String checkMail (@RequestBody CustomerModel data) {
		return customerService.checkMail(data);
	}
	
}
