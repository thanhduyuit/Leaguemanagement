/*
 * Package name: com.fsoft.coffeesystem.model
 * Project name: coffeemanagementsystem
 * File: SearchDeskModel.java
 * Author: TamNM4
 * Date created: Jan 18, 2017
 */
package com.fsoft.coffeesystem.model;

// TODO: Auto-generated Javadoc
/**
 * The Class SearchDeskModel.
 */
public class SearchDeskModel {

	/** The desk id. */
	private String deskId;

	/** The desk name. */
	private String deskName;

	/** The group desk name. */
	private String groupDeskName;
	/** The quantity of seats. */
	private String quantityOfSeats;

	/**
	 * Instantiates a new search desk model.
	 */
	public SearchDeskModel() {
		super();
	}

	/**
	 * Instantiates a new search desk model.
	 *
	 * @param deskId the desk id
	 * @param deskName the desk name
	 * @param groupDeskName the group desk name
	 * @param quantityOfSeats the quantity of seats
	 */
	public SearchDeskModel(String deskId, String deskName, String groupDeskName, String quantityOfSeats) {
		super();
		this.deskId = deskId;
		this.deskName = deskName;
		this.groupDeskName = groupDeskName;
		this.quantityOfSeats = quantityOfSeats;

	}

	/**
	 * Gets the desk id.
	 *
	 * @return the desk id
	 */
	public String getDeskId() {
		return deskId;
	}

	/**
	 * Sets the desk id.
	 *
	 * @param deskId the new desk id
	 */
	public void setDeskId(String deskId) {
		this.deskId = deskId;
	}

	/**
	 * Gets the desk name.
	 *
	 * @return the desk name
	 */
	public String getDeskName() {
		return deskName;
	}

	/**
	 * Sets the desk name.
	 *
	 * @param deskName the new desk name
	 */
	public void setDeskName(String deskName) {
		this.deskName = deskName;
	}

	/**
	 * Gets the group desk name.
	 *
	 * @return the group desk name
	 */
	public String getGroupDeskName() {
		return groupDeskName;
	}

	/**
	 * Sets the group desk name.
	 *
	 * @param groupDeskName the new group desk name
	 */
	public void setGroupDeskName(String groupDeskName) {
		this.groupDeskName = groupDeskName;
	}

	/**
	 * Gets the quantity of seats.
	 *
	 * @return the quantity of seats
	 */
	public String getQuantityOfSeats() {
		return quantityOfSeats;
	}

	/**
	 * Sets the quantity of seats.
	 *
	 * @param quantityOfSeats the new quantity of seats
	 */
	public void setQuantityOfSeats(String quantityOfSeats) {
		this.quantityOfSeats = quantityOfSeats;
	}
}
