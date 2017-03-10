/*
 * 
 */
package com.fsoft.coffeesystem.controller;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.coffeesystem.entity.City;
import com.fsoft.coffeesystem.entity.Store;
import com.fsoft.coffeesystem.entity.StoreAccount;
import com.fsoft.coffeesystem.model.AccountModel;
import com.fsoft.coffeesystem.model.DistrictModel;
import com.fsoft.coffeesystem.model.StoreAccountModel;
import com.fsoft.coffeesystem.model.StoreModel;
import com.fsoft.coffeesystem.service.AccountService;
import com.fsoft.coffeesystem.service.StoreService;


/**
 * The Class AccountController.
 */
@RestController
@RequestMapping("/")
public class AccountController {

	/** The Constant log. */
	static final Logger log = Logger.getLogger(CustomerController.class
			.getName());

	/** The account service. */
	@Autowired
	AccountService accountService;
	 
	@Autowired
	StoreService storeService;
	/**
	 * Login.
	 *
	 * @param username
	 *            the username
	 * @param password
	 *            the password
	 * @param request
	 *            the request
	 * @return the model and view
	 */
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public ModelAndView login(@RequestParam String username,
			@RequestParam String password, HttpServletRequest request) {
		ModelAndView modelAndView = null;
		AccountModel accountModel = accountService.login(username, password);
		if (accountModel != null) {
			HttpSession session = request.getSession();
			if (accountModel.getisAdmin()) {
				modelAndView = new ModelAndView("templateadmin");
				session.setAttribute("account", accountModel);
			} else {
				modelAndView = new ModelAndView("index");
				List<StoreModel> storeModelList = accountModel.getStoreList();
				
				session.setAttribute("account", accountModel);
				if (storeModelList.size() > 0) {
					session.setAttribute("storeid", storeModelList.get(0)
							.getId());
				}
			}	

		} else {
			modelAndView = new ModelAndView("login");
			modelAndView.addObject("message",
					"*Sai thông tin đăng nhập, vui lòng kiểm tra lại");
		}

		return modelAndView;
	}

	/**
	 * Logout.
	 *
	 * @param request
	 *            the request
	 * @return the model and view
	 */
	@RequestMapping(value = "/logout", method = RequestMethod.POST)
	@ResponseBody
	public boolean logout(HttpServletRequest request) {
		request.getSession().invalidate();
	
		return true;
	}

	/**
	 * Change store.
	 *
	 * @param storeId the store id
	 * @param request the request
	 * @return the model and view
	 */
	@RequestMapping(value = "/changestore", method = RequestMethod.POST)
	public ModelAndView changeStore(@RequestParam int storeId,
			HttpServletRequest request) {
		HttpSession session = request.getSession();
		session.setAttribute("storeid", storeId);

		return new ModelAndView("index");
	}

	/**
	 * Gets the email and number phone.
	 *
	 * @param username
	 *            the username
	 * @return the email and number phone
	 */
	@RequestMapping(value = "/findusername", method = RequestMethod.POST)
	@ResponseBody
	public String getEmailAndNumberPhone(@RequestParam String username) {
		return accountService.getEmailAndNumberPhone(username);
	}

	/**
	 * Send password to email or number phone.
	 *
	 * @param accountid
	 *            the accountid
	 * @param method
	 *            the method
	 * @param request
	 *            the request
	 * @return the string
	 */
	@RequestMapping(value = "/sendpassword", method = RequestMethod.POST)
	@ResponseBody
	public String sendPasswordToEmailOrNumberPhone(@RequestParam int accountid,
			@RequestParam String method, HttpServletRequest request) {
		boolean res = accountService.sendPasswordToEmailOrNumberPhone(
				accountid, method, request);
		return String.valueOf(res);
	}
	
	/**
	 * Change password.
	 *
	 * @param accountId the account id
	 * @param passwordOld the password old
	 * @param newPassword the new password
	 * @param request the request
	 * @return true, if successful
	 */
	@RequestMapping(value = "/changepassword", method = RequestMethod.POST)
	@ResponseBody
	public boolean changePassword(@RequestParam int accountID,@RequestParam String passwordOld,@RequestParam String newPassword,HttpServletRequest request){
		return accountService.changePassword(accountID,passwordOld, newPassword, request); 
	}
	
	

	/**
	 * Search account.
	 *
	 * @param method
	 *            the method
	 * @param message
	 *            the message
	 * @return the list
	 */
	@RequestMapping(value = "/searchaccount", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<AccountModel> searchAccount(@RequestParam String method,
			@RequestParam String message) {
		return accountService.searchAccount(method, message);
	}

	/**
	 * Delete account.
	 *
	 * @param id
	 *            the id
	 * @return true, if successful
	 */
	@RequestMapping(value = "/deleteAccount", method = RequestMethod.GET)
	public boolean deleteAccount(@RequestParam int id) {

		try {
			return accountService.deleteAccount(id);
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(), e);
			return false;
		}
	}

	/**
	 * Adds the account.
	 *
	 * @param accountmodel
	 *            the accountmodel
	 * @return true, if successful
	 */
	@RequestMapping(value = "/addAccounts", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public boolean addAccount(@RequestBody AccountModel accountmodel) {
		return accountService.addAccount(accountmodel);

	}
	@RequestMapping(value = "/getListStoreById", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<StoreModel> getStoreByAccountName(@RequestBody AccountModel accountmodel){
		return storeService.getStoreByAccountName(accountmodel);
	}
	
}