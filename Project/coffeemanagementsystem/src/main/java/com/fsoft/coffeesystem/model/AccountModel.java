package com.fsoft.coffeesystem.model;

import java.io.Serializable;
import java.util.List;

// TODO: Auto-generated Javadoc
/**
 * The Class AccountModel.
 */
public class AccountModel implements Serializable{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;
	
	/** The id. */
	private int id;
	
	/** The id card. */
	private String idCard;
	
	/** The name. */
	private String name;
	
	/** The birthday. */
	private String birthday;
	
	/** The gender. */
	private boolean gender;
	
	/** The phone. */
	private String phone;
	
	/** The email. */
	private String email;
	
	/** The address. */
	private String address;
	
	/** The account name. */
	private String accountName;
	
	/** The is admin. */
	private boolean isAdmin;
	
	/** The password. */
	private String password;
	
	/** The ward ID. */
	private String wardID;
	
	/** The store list. */
	private List<StoreModel> storeList;


	/**
	 * Instantiates a new account model.
	 */
	public AccountModel() {
		super();
	}

	/**
	 * Instantiates a new account model.
	 *
	 * @param id the id
	 * @param idCard the id card
	 * @param name the name
	 * @param birthday the birthday
	 * @param gender the gender
	 * @param phone the phone
	 * @param email the email
	 * @param address the address
	 * @param accountName the account name
	 * @param isAdmin the is admin
	 * @param password the password
	 * @param wardID the ward ID
	 * @param storeList the store list
	 */
	public AccountModel(int id, String idCard, String name, String birthday,
			boolean gender, String phone, String email, String address,
			String accountName, boolean isAdmin, String password,
			String wardID, List<StoreModel> storeList) {
		super();
		this.id = id;
		this.idCard = idCard;
		this.name = name;
		this.birthday = birthday;
		this.gender = gender;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.accountName = accountName;
		this.isAdmin = isAdmin;
		this.password = password;
		this.wardID = wardID;
		this.storeList = storeList;
	}

	/**
	 * Instantiates a new account model.
	 *
	 * @param id the id
	 * @param idCard the id card
	 * @param name the name
	 * @param birthday the birthday
	 * @param gender the gender
	 * @param phone the phone
	 * @param email the email
	 * @param address the address
	 * @param accountName the account name
	 * @param isAdmin the is admin
	 * @param password the password
	 * @param wardID the ward ID
	 */
	public AccountModel(int id, String idCard, String name, String birthday,
			boolean gender, String phone, String email, String address,
			String accountName, boolean isAdmin, String password, String wardID) {
		super();
		this.id = id;
		this.idCard = idCard;
		this.name = name;
		this.birthday = birthday;
		this.gender = gender;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.accountName = accountName;
		this.isAdmin = isAdmin;
		this.password = password;
		this.wardID = wardID;
	}
	
	/**
	 * Instantiates a new account model.
	 *
	 * @param id the id
	 * @param name the name
	 * @param accountName the account name
	 * @param isAdmin the is admin
	 */
	public AccountModel(int id, String name, String accountName, boolean isAdmin) {
		super();
		this.id = id;
		this.name = name;
		this.accountName = accountName;
		this.isAdmin = isAdmin;
	}

	/**
	 * Instantiates a new account model.
	 *
	 * @param id the id
	 * @param name the name
	 * @param idCard the id card
	 * @param gender the gender
	 * @param accountName the account name
	 * @param isAdmin the is admin
	 * @param birthday the birthday
	 */
	public AccountModel(int id, String name, String idCard, boolean gender,
			String accountName, boolean isAdmin, String birthday) {
		super();
		this.id = id;
		this.name = name;
		this.idCard = idCard;
		this.gender = gender;
		this.accountName = accountName;
		this.isAdmin = isAdmin;
		this.birthday = birthday;
	}

	/**
	 * Instantiates a new account model.
	 *
	 * @param id the id
	 * @param name the name
	 * @param accountName the account name
	 * @param isAdmin the is admin
	 * @param storeList the store list
	 */
	public AccountModel(int id, String name, String accountName,
			boolean isAdmin, List<StoreModel> storeList) {
		super();
		this.id = id;
		this.name = name;
		this.accountName = accountName;
		this.isAdmin = isAdmin;
		this.storeList = storeList;
	}

	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * Sets the id.
	 *
	 * @param id the new id
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * Gets the id card.
	 *
	 * @return the id card
	 */
	public String getIdCard() {
		return idCard;
	}

	/**
	 * Sets the id card.
	 *
	 * @param idCard the new id card
	 */
	public void setIdCard(String idCard) {
		this.idCard = idCard;
	}

	/**
	 * Gets the name.
	 *
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * Sets the name.
	 *
	 * @param name the new name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Gets the birthday.
	 *
	 * @return the birthday
	 */
	public String getBirthday() {
		return birthday;
	}

	/**
	 * Sets the birthday.
	 *
	 * @param birthday the new birthday
	 */
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	/**
	 * Checks if is gender.
	 *
	 * @return true, if is gender
	 */
	public boolean isGender() {
		return gender;
	}

	/**
	 * Sets the gender.
	 *
	 * @param gender the new gender
	 */
	public void setGender(boolean gender) {
		this.gender = gender;
	}

	/**
	 * Gets the phone.
	 *
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}

	/**
	 * Sets the phone.
	 *
	 * @param phone the new phone
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}

	/**
	 * Gets the email.
	 *
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * Sets the email.
	 *
	 * @param email the new email
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * Gets the address.
	 *
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * Sets the address.
	 *
	 * @param address the new address
	 */
	public void setAddress(String address) {
		this.address = address;
	}

	/**
	 * Gets the account name.
	 *
	 * @return the account name
	 */
	public String getAccountName() {
		return accountName;
	}

	/**
	 * Sets the account name.
	 *
	 * @param accountName the new account name
	 */
	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	/**
	 * Checks if is admin.
	 *
	 * @return true, if is admin
	 */
	public boolean getisAdmin() {
		return isAdmin;
	}

	/**
	 * Sets the admin.
	 *
	 * @param isAdmin the new admin
	 */
	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	/**
	 * Gets the password.
	 *
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * Sets the password.
	 *
	 * @param password the new password
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * Gets the ward ID.
	 *
	 * @return the ward ID
	 */
	public String getWardID() {
		return wardID;
	}

	/**
	 * Sets the ward ID.
	 *
	 * @param wardID the new ward ID
	 */
	public void setWardID(String wardID) {
		this.wardID = wardID;
	}

	/**
	 * Gets the store list.
	 *
	 * @return the store list
	 */
	public List<StoreModel> getStoreList() {
		return storeList;
	}

	/**
	 * Sets the store list.
	 *
	 * @param storeList the new store list
	 */
	public void setStoreList(List<StoreModel> storeList) {
		this.storeList = storeList;
	}

}
