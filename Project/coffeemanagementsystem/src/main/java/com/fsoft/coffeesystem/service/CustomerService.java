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
package com.fsoft.coffeesystem.service;

import java.util.List;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.CustomerDao;
import com.fsoft.coffeesystem.entity.Customer;
import com.fsoft.coffeesystem.model.CustomerModel;
import com.fsoft.coffeesystem.utilites.Constants;
import com.fsoft.coffeesystem.utilites.MD5;

/**
 * The Class CustomerService.
 */
@Service("customerService")
public class CustomerService {

	/** The customer Dao. */
	@Autowired
	private CustomerDao customerDao;
	
	/** The Constant log. */
	static final Logger log = Logger.getLogger(CustomerService.class.getName());

	/**
	 * Search.
	 *
	 * @param customer the customer
	 * @return the list
	 */
	public List<Customer> search(Customer customer) {
		return customerDao.search(customer.getName(), customer.getPhoneNumber(),
				customer.getPoint(), customer.getGender());
	}

	/**
	 * Update.
	 *
	 * @param customerModel the customer model
	 * @return the string
	 */
	public String update(CustomerModel customerModel) {
		Customer customer = customerDao.findOne(customerModel.getId());
		customer.setName(customerModel.getName());
		customer.setPhoneNumber(customerModel.getPhoneNumber());
		customer.setEmail(customerModel.getEmail());
		customer.setBirthday(customerModel.getBirthday());
		customer.setGender(customerModel.getGender());
		
		return saveJpa(customer);
	}

	/**
	 * Delete.
	 *
	 * @param customerModel the customer model
	 * @return the string
	 */
	public String delete(CustomerModel customerModel) {
		Customer customer = customerDao.findOne(customerModel.getId());
		customer.setIsDelete(true);
		
		return saveJpa(customer);
	}
	
	/**
	 * Creates the.
	 *
	 * @param customerModel the customer model
	 * @return the string
	 */
	/*
	 *insert customer into database 
	 *input: take fields of customerModel from CustomerController sends
	 *output: String "{\"success\": true}" or "{\"success\": false}"
	 */
	public String create(CustomerModel customerModel){
		Customer customer = new Customer();
		try {
			customer.setName(customerModel.getName());
			customer.setPhoneNumber(customerModel.getPhoneNumber());
			customer.setEmail(customerModel.getEmail());
			customer.setBirthday(customerModel.getBirthday());
			customer.setPassword(MD5.getMD5Hash(reneratePassword()));
			customer.setGender(customerModel.getGender());
			customer.setIsDelete(false);
			customer.setPoint(0L);
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(), e);
		}
		
		return saveJpa(customer);
	}
	
	/**
	 * Pass customer.
	 *
	 * @return the string
	 */
	/*
	 * random chars for customer's password
	 */
	public String reneratePassword(){
		Random rd = new Random();
		String alphabet = "coffee";
		String password = "";
		for (int i = 0; i < 10; i++) {
			password += (alphabet.charAt(rd.nextInt(alphabet.length())));
		}
		return password;
	}
	
	/**
	 * Check phone.
	 *
	 * @param customerModel the customer model
	 * @return the string
	 */
	/*
	 *check phone exist in database 
	 *input: take phonenumber field of customerModel from CustomerController sends
	 *output: String "{\"success\": true}" or "{\"success\": false}"
	 */
	public String checkPhone(CustomerModel customerModel){
		List<Customer> customer = customerDao.searchPhone(customerModel.getPhoneNumber(),
				customerModel.getId());
		if(customer.size() == 0)
			return Constants.RESPONSE_JSON.EXIST_FALSE;
		return Constants.RESPONSE_JSON.EXIST_TRUE;
	}
	
	/**
	 * Check mail.
	 *
	 * @param customerModel the customer model
	 * @return the string
	 */
	/*
	 *check email exist in database 
	 *input: take email field of customerModel from CustomerController sends
	 *output: String "{\"success\": true}" or "{\"success\": false}"
	 */
	public String checkMail(CustomerModel customerModel){
		List<Customer> customer = customerDao.searchMail(customerModel.getEmail(),
				customerModel.getId());
		if(customer.size() == 0)
			return Constants.RESPONSE_JSON.EXIST_FALSE;
		return Constants.RESPONSE_JSON.EXIST_TRUE;
	}
	
	/**
	 * Save jpa.
	 *
	 * @param customer the customer
	 * @return the string
	 */
	/* Call Save JPA to update/insert query */
	private String saveJpa(Customer customer) {
		try {
			customerDao.save(customer);
			return Constants.RESPONSE_JSON.SUCCESS_TRUE;
		} catch (Exception e) {
			System.out.println(e);
			return Constants.RESPONSE_JSON.SUCCESS_FALSE;
		}
	}
}
