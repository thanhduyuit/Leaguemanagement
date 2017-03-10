package com.fsoft.coffeesystem.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.hibernate.HibernateException;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.AccountDAO;
import com.fsoft.coffeesystem.dao.WardDao;
import com.fsoft.coffeesystem.entity.Accounts;
import com.fsoft.coffeesystem.entity.Store;
import com.fsoft.coffeesystem.entity.Ward;
import com.fsoft.coffeesystem.model.AccountModel;
import com.fsoft.coffeesystem.model.StoreModel;
import com.fsoft.coffeesystem.utilites.Convert;
import com.fsoft.coffeesystem.utilites.MD5;
import com.fsoft.coffeesystem.utilites.RandomPassword;
import com.fsoft.coffeesystem.utilites.SendMessageToNumberPhone;

/**
 * The Class AccountService.
 */
@Service("accountService")
public class AccountService {

	/** The Constant LOG. */
	private static final Logger LOG = Logger.getLogger(AccountService.class
			.getName());

	@Autowired
	private SendMessageToNumberPhone SendMessageToNumberPhone;

	/** The account DAO. */
	@Autowired
	private AccountDAO accountDAO;

	/** The ward dao. */
	@Autowired
	private WardDao wardDao;

	/** The store service. */
	@Autowired
	StoreService storeService;

	/** The send message to number phone. */
	@Autowired
	SendMessageToNumberPhone sendMessageToNumberPhone;

	/**
	 * Gets the account.
	 *
	 * @param username
	 *            the username
	 * @return Accounts entities
	 */
	public Accounts getAccount(String username) {
		return accountDAO.getAccountOfUsername(username);
	}

	/**
	 * Gets the all account.
	 *
	 * @return Accounts entities list
	 */
	public List<Accounts> getAllAccount() {
		return accountDAO.getAllAccount();
	}

	/**
	 * Gets the account.
	 *
	 * @param id
	 *            the id
	 * @return the account
	 */
	public Accounts getAccount(int id) {
		return accountDAO.findOne(id);
	}

	/**
	 * Adds the account.
	 *
	 * @param accountModel
	 *            the account model
	 * @return true, if successful
	 */
	public boolean addAccount(AccountModel accountModel) {
		SimpleDateFormat fo = new SimpleDateFormat("yyyy/MM/dd");
		RandomPassword random = new RandomPassword();
		String password = random.randomPassword();
		Ward myward = wardDao
				.findOne(Integer.parseInt(accountModel.getWardID()));

		String phone = accountModel.getPhone();
		String phoneformat = phone.replaceFirst("0", "+84");
		try {
			Accounts acc = new Accounts();
			acc.setName(accountModel.getName());
			acc.setAccountName(accountModel.getAccountName());
			acc.setIdCard(accountModel.getIdCard());
			acc.setBirthday(fo.parse(accountModel.getBirthday().replaceAll("-",
					"/")));
			acc.setGender(accountModel.isGender());
			acc.setPhoneNumber(phoneformat);
			acc.setEmail(accountModel.getEmail());
			acc.setAddress(accountModel.getAddress());
			acc.setIsAdmin(accountModel.getisAdmin());
			acc.setPassword(MD5.getMD5Hash(password));
			acc.setWard(myward);
			acc.setIsDelete(false);
			acc.setDescription("Account Discription");
			accountDAO.save(acc);
			SendMessageToNumberPhone.sendMessageToPhone(phoneformat,
					"Your password is : " + password);
			return true;
		} catch (Exception e) {
			LOG.log(Level.INFO, e.getMessage(), e);
			return false;
		}

	}

	/**
	 * Delete account.
	 *
	 * @param id
	 *            the id
	 * @return true, if successful
	 */
	public boolean deleteAccount(int id) {
		try {
			Accounts a = accountDAO.findOne(id);
			a.setIsDelete(true);
			accountDAO.save(a);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	/**
	 * Gets the email and number phone.
	 *
	 * @param username
	 *            the username
	 * @return the email and number phone
	 */
	public String getEmailAndNumberPhone(String username) {
		Accounts accounts = getAccount(username);
		JSONObject jsonObject = new JSONObject();
		try {
			if (accounts != null) {
				jsonObject.put("status", "success");
				jsonObject.put("id", accounts.getId());
				String email = accounts.getEmail().trim();
				String numberPhone = accounts.getPhoneNumber().trim();
				StringBuilder emailBuilder = new StringBuilder();
				StringBuilder numberPhoneBuilder = new StringBuilder();
				int iSizeEmail = email.length();
				int iSizeEmail_3 = iSizeEmail - 5;
				for (int i = 0; i < iSizeEmail; i++) {
					if (i >= 3 && i <= iSizeEmail_3) {
						emailBuilder.append('*');
					} else {
						emailBuilder.append(email.charAt(i));
					}
				}
				int iSizeNumberPhone = numberPhone.length();
				int iSizeNumberPhone_2 = iSizeNumberPhone - 4;
				for (int i = 0; i < iSizeNumberPhone; i++) {
					if (i >= 4 && i <= iSizeNumberPhone_2) {
						numberPhoneBuilder.append('*');
					} else {
						numberPhoneBuilder.append(numberPhone.charAt(i));
					}
				}
				jsonObject.put("email", emailBuilder.toString().trim());
				jsonObject.put("numberphone", numberPhoneBuilder.toString()
						.trim());
			} else {
				jsonObject.put("status", "fail");
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}

		return jsonObject.toString();
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
	public List<AccountModel> searchAccount(String method, String message) {
		if (!method.equals("")) {
			String[] methods = method.split(",");

			boolean isName = false, isUsername = false, isIdCard = false;
			String str = null;
			for (String string : methods) {
				str = string.trim();
				if ("name".equals(str)) {
					isName = true;
				} else if ("idcard".equals(string)) {
					isIdCard = true;
				} else if ("username".endsWith(str)) {
					isUsername = true;
				}
			}
			List<Accounts> list = searchAccount(isName, isIdCard, isUsername,
					message);
			List<AccountModel> accountModels = new ArrayList<>();
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(
					"yyyy-MM-dd");
			AccountModel accountModel = null;
			String date = null;
			for (Accounts accounts : list) {
				Date dTemp = accounts.getBirthday();
				date = dTemp != null ? simpleDateFormat.format(dTemp) : "";
				accountModel = new AccountModel(accounts.getId(),
						accounts.getName(), accounts.getIdCard(),
						accounts.getGender(), accounts.getAccountName(),
						accounts.getIsAdmin(), date);
				accountModels.add(accountModel);
			}
			return accountModels;
		}
		return null;
	}

	/**
	 * Search account.
	 *
	 * @param isName
	 *            the is name
	 * @param isIdCard
	 *            the is id card
	 * @param isUsername
	 *            the is username
	 * @param message
	 *            the message
	 * @return the list
	 */
	private List<Accounts> searchAccount(boolean isName, boolean isIdCard,
			boolean isUsername, String message) {

		List<Accounts> lisAccounts = null;

		if (isIdCard && !isUsername) {// find by idcard or name
			lisAccounts = accountDAO.searchAccountOfIDCard(message, message);
		} else if (isIdCard && isUsername) {// find by idcard or username or
											// name
			lisAccounts = accountDAO.searchAccountOfIDCardAndUsername(message,
					message, message);
		} else if (!isIdCard && isUsername) {// find by username or name
			lisAccounts = accountDAO.searchAccountOfUsername(message, message);
		} else if (!isIdCard && !isUsername) { // find by name or name
			if (message.equals("")) {
				lisAccounts = getAllAccount();
			} else {
				lisAccounts = accountDAO.searchAccountOfName(message);
			}
		}

		return lisAccounts;
	}

	/**
	 * Login.
	 *
	 * @param username
	 *            the username
	 * @param password
	 *            the password
	 * @return the account model
	 */
	public AccountModel login(String username, String password) {
		password = MD5.getMD5Hash(password);
		Accounts accounts = getAccount(username.trim());
		AccountModel accountModel = null;
		if (accounts != null) {
				if (accounts.getIsAdmin()) {
					accountModel = new AccountModel(accounts.getId(),
							accounts.getName(), accounts.getAccountName(),
							accounts.getIsAdmin());
				} else {
					List<Store> storeList = storeService
							.getStoreByAccountID(accounts.getId());
					List<StoreModel> storeModelList = Convert
							.convertToStoreModel(storeList);

					accountModel = new AccountModel(accounts.getId(),
							accounts.getName(), accounts.getAccountName(),
							accounts.getIsAdmin(), storeModelList);
				}

			
		}

		return accountModel;
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
	 * @return true, if successful
	 */
	public boolean sendPasswordToEmailOrNumberPhone(int accountid,
			String method, HttpServletRequest request) {
		RandomPassword randomPassword = new RandomPassword();
		String newPassword = randomPassword.randomPassword();

		Accounts accounts = getAccount(accountid);
		if (accounts != null) {
			if ("email".equals(method.trim())) {

			} else if ("phone".endsWith(method)) {
				boolean res = sendMessageToNumberPhone.sendMessageToPhone(
						accounts.getPhoneNumber(), newPassword);
				if (res) {
					request.getSession().setAttribute("newPassword", newPassword);
					request.getSession().setMaxInactiveInterval(30);
					return true;
				}
			}
		}

		return false;
	}

	/**
	 * Change password.
	 *
	 * @param accountId
	 *            the account id
	 * @param passwordOld
	 *            the password old
	 * @param newPassword
	 *            the new password
	 * @param request
	 *            the request
	 * @return true, if successful
	 */
	public boolean changePassword(int accountID ,String passwordOld, String newPassword,
			HttpServletRequest request) {
		HttpSession session = request.getSession();
		Accounts accounts = getAccount(accountID);
		if (accounts != null) {
			passwordOld = MD5.getMD5Hash(passwordOld.trim());
			String code = (String) session.getAttribute("newPassword");
			code = (code != null) ? MD5.getMD5Hash(code) : "";
			if ((accounts.getPassword().trim().equals(passwordOld))
					|| (passwordOld.trim().equals(code.trim()))) {
				accounts.setPassword(MD5.getMD5Hash(newPassword).trim());
				try {
					accountDAO.save(accounts);
					return true;
				} catch (HibernateException he) {
					return false;
				}
			}
		}

		return false;
	}

}
