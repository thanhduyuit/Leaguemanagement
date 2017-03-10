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
package com.fsoft.coffeesystem.model;

import java.util.Date;

public class CustomerModel {
	
	private long id;
	private String name;
	private String phoneNumber;
	private String email;
	private Date birthday;
	private Byte gender;
	private Long point;
	
	public CustomerModel () {}
	
	public CustomerModel (String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	public CustomerModel (String name, String phoneNumber){
		this.name = name;
		this.phoneNumber = phoneNumber;
	}
	/*
	 * constructor for insert customer's account from view customermanagement 
	 */
	public CustomerModel (String name, String phoneNumber, String email, Date birthday, Byte gender) {
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.birthday = birthday;
		this.gender = gender;
	}
	public CustomerModel (long id, String name, String phoneNumber, String email, Date birthday, Byte gender, Long point) {
		this.id = id;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.birthday = birthday;
		this.gender = gender;
		this.point = point;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public Byte getGender() {
		return gender;
	}
	public void setGender(Byte gender) {
		this.gender = gender;
	}
	public Long getPoint() {
		return point;
	}
	public void setPoint(Long point) {
		this.point = point;
	}
	
	
}
