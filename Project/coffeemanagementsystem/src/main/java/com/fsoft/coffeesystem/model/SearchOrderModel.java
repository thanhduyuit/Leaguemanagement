package com.fsoft.coffeesystem.model;


/**
 * The Class SearchOrderModel.
 */
public class SearchOrderModel {

	/** The name. */
	private String name;

	/** The phone number. */
	private String phoneNumber;

	/** The desk name. */
	private String deskName;

	/** The total bill. */
	private Integer totalBill;

	public SearchOrderModel() {
		// TODO Auto-generated constructor stub
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

	public String getDeskName() {
		return deskName;
	}

	public void setDeskName(String deskName) {
		this.deskName = deskName;
	}

	public Integer getTotalBill() {
		return totalBill;
	}

	public void setTotalBill(Integer totalBill) {
		this.totalBill = totalBill;
	}
}