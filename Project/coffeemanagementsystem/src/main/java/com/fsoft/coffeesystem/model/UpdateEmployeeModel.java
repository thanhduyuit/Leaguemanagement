package com.fsoft.coffeesystem.model;

import java.math.BigDecimal;
import java.util.Date;

// TODO: Auto-generated Javadoc
/**
 * The Class EmployeeModel.
 */
public class UpdateEmployeeModel{
	
	/** The id. */
	private int id;	
	
	/** The ward id. */
	private int wardId;	
	
	/** The district id. */
	private int districtId;	
	
	/** The city id. */
	private int cityId;	
	
	/** The name. */
	private String name;	
	
	/** The address. */
	private String address;	
	
	/** The id card. */
	private String idCard;	
	
	/** The phone. */
	private String phone;	
	
	/** The birthday. */
	private String birthday;	
	
	/** The start date. */
	private String startDate;	
	
	/** The end date. */
	private String endDate;	
	
	/** The salary. */
	private BigDecimal salary;	
	
	/** The position. */
	private String position;	
	
	/** The gender. */
	private boolean gender;	
	
	/** The description. */
	private String description;
	
	/**
	 * Instantiates a new employee model.
	 */
	public UpdateEmployeeModel() {
		super();
	}

	
	/**
	 * Instantiates a new employee model.
	 *
	 * @param id the id
	 * @param wardId the ward id
	 * @param name the name
	 * @param address the address
	 * @param idCard the id card
	 * @param phone the phone
	 * @param birthday the birthday
	 * @param startDate the start date
	 * @param endDate the end date
	 * @param salary the salary
	 * @param position the position
	 * @param gender the gender
	 * @param description the description
	 */
	public UpdateEmployeeModel(int id, int wardId,int cityId, int districtId, String name, String address, String idCard, String phone, String birthday,
			String startDate, String endDate, BigDecimal salary, String position, boolean gender, String description) {
		super();
		this.id = id;
		this.wardId = wardId;
		this.districtId = districtId;
		this.cityId = cityId;
		this.name = name;
		this.address = address;
		this.idCard = idCard;
		this.phone = phone;
		this.birthday = birthday;
		this.startDate = startDate;
		this.endDate = endDate;
		this.salary = salary;
		this.position = position;
		this.gender = gender;
		this.description = description;
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
	 * Gets the ward id.
	 *
	 * @return the ward id
	 */
	public int getWardId() {
		return wardId;
	}


	/**
	 * Sets the ward id.
	 *
	 * @param wardId the new ward id
	 */
	public void setWardId(int wardId) {
		this.wardId = wardId;
	}

	/**
	 * Gets the district id.
	 *
	 * @return the district id
	 */
	public int getDistrictId() {
		return districtId;
	}


	/**
	 * Sets the district id.
	 *
	 * @param districtId the new district id
	 */
	public void setDistrictId(int districtId) {
		this.districtId = districtId;
	}
	
	/**
	 * Gets the city id.
	 *
	 * @return the city id
	 */
	public int getCityId() {
		return cityId;
	}


	/**
	 * Sets the city id.
	 *
	 * @param cityId the new city id
	 */
	public void setCityId(int cityId) {
		this.cityId = cityId;
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
	 * Gets the start date.
	 *
	 * @return the start date
	 */
	public String getStartDate() {
		return startDate;
	}


	/**
	 * Sets the start date.
	 *
	 * @param startDate the new start date
	 */
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}


	/**
	 * Gets the end date.
	 *
	 * @return the end date
	 */
	public String getEndDate() {
		return endDate;
	}


	/**
	 * Sets the end date.
	 *
	 * @param endDate the new end date
	 */
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}


	/**
	 * Gets the salary.
	 *
	 * @return the salary
	 */
	public BigDecimal getSalary() {
		return salary;
	}


	/**
	 * Sets the salary.
	 *
	 * @param salary the new salary
	 */
	public void setSalary(BigDecimal salary) {
		this.salary = salary;
	}


	/**
	 * Gets the position.
	 *
	 * @return the position
	 */
	public String getPosition() {
		return position;
	}


	/**
	 * Sets the position.
	 *
	 * @param position the new position
	 */
	public void setPosition(String position) {
		this.position = position;
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
	 * Gets the description.
	 *
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}


	/**
	 * Sets the description.
	 *
	 * @param description the new description
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
