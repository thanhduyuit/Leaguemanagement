/*
 * Package name: com.fsoft.coffeesystem.model
 * Project name: coffeemanagementsystem
 * File: DeskModel.java
 * Author: TamNM4
 * Date created: Jan 18, 2017
 */
package com.fsoft.coffeesystem.model;

// TODO: Auto-generated Javadoc
/**
 * The Class DeskModel.
 */
public class DeskModel {

	/** The desk id. */
	private int deskId;

	/** The desk name. */
	private String deskName;

	/** The group desk name. */
	private String groupDeskName;

	/** The group desk id. */
	private int groupDeskId;

	/** The quantity of seats. */
	private Integer quantityOfSeats;

	/** The store name. */
	private String storeName;

	/** The description. */
	private String description;

	private int storeId;
	/**
	 * Instantiates a new desk model.
	 */
	public DeskModel() {
		super();
	}

	

	public DeskModel(int deskId, String deskName, int groupDeskId, Integer quantityOfSeats, String description,
			int storeId) {
		
		this.deskId = deskId;
		this.deskName = deskName;
		this.groupDeskId = groupDeskId;
		this.quantityOfSeats = quantityOfSeats;
		this.description = description;
		this.storeId = storeId;
	}



	public int getStoreId() {
		return storeId;
	}



	public void setStoreId(int storeId) {
		this.storeId = storeId;
	}



	/**
	 * Instantiates a new desk model.
	 *
	 * @param deskName the desk name
	 * @param groupDeskId the group desk id
	 * @param quantityOfSeats the quantity of seats
	 * @param storeName the store name
	 * @param description the description
	 */
	public DeskModel(String deskName, int groupDeskId, Integer quantityOfSeats, String storeName,
			String description) {
		super();
		this.deskName = deskName;
		this.groupDeskId = groupDeskId;
		this.quantityOfSeats = quantityOfSeats;
		this.storeName = storeName;
		this.description = description;
	}

	/**
	 * Instantiates a new desk model.
	 *
	 * @param deskId the desk id
	 * @param deskName the desk name
	 * @param groupDeskName the group desk name
	 * @param groupDeskId the group desk id
	 * @param quantityOfSeats the quantity of seats
	 * @param storeName the store name
	 * @param description the description
	 */
	public DeskModel(int deskId, String deskName, String groupDeskName, int groupDeskId,
			Integer quantityOfSeats, String storeName, String description) {
		super();
		this.deskId = deskId;
		this.deskName = deskName;
		this.groupDeskName = groupDeskName;
		this.groupDeskId = groupDeskId;
		this.quantityOfSeats = quantityOfSeats;
		this.storeName = storeName;
		this.description = description;
	}


	/**
	 * Instantiates a new desk model.
	 *
	 * @param deskId the desk id
	 * @param deskName the desk name
	 * @param groupDeskName the group desk name
	 * @param groupDeskId the group desk id
	 * @param quantityOfSeats the quantity of seats
	 * @param description the description
	 */
	public DeskModel(int deskId, String deskName, String groupDeskName, int groupDeskId, Integer quantityOfSeats,
			String description) {
		super();
		this.deskId = deskId;
		this.deskName = deskName;
		this.groupDeskName = groupDeskName;
		this.groupDeskId = groupDeskId;
		this.quantityOfSeats = quantityOfSeats;
		this.description = description;
	}

	/**
	 * Gets the desk id.
	 *
	 * @return the desk id
	 */
	public int getDeskId() {
		return deskId;
	}

	/**
	 * Sets the desk id.
	 *
	 * @param deskId the new desk id
	 */
	public void setDeskId(int deskId) {
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
	public Integer getQuantityOfSeats() {
		return quantityOfSeats;
	}

	/**
	 * Sets the quantity of seats.
	 *
	 * @param quantityOfSeats the new quantity of seats
	 */
	public void setQuantityOfSeats(Integer quantityOfSeats) {
		this.quantityOfSeats = quantityOfSeats;
	}

	/**
	 * Gets the store name.
	 *
	 * @return the store name
	 */
	public String getStoreName() {
		return storeName;
	}

	/**
	 * Sets the store name.
	 *
	 * @param storeName the new store name
	 */
	public void setStoreName(String storeName) {
		this.storeName = storeName;
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

	/**
	 * Gets the group desk id.
	 *
	 * @return the group desk id
	 */
	public int getGroupDeskId() {
		return groupDeskId;
	}

	/**
	 * Sets the group desk id.
	 *
	 * @param groupDeskId the new group desk id
	 */
	public void setGroupDeskId(int groupDeskId) {
		this.groupDeskId = groupDeskId;
	}
}

