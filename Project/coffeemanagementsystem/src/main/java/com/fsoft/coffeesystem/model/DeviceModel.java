/*
 * Package name: com.fsoft.coffeesystem.model
 * Project name: coffeemanagementsystem
 * File: DeviceModel.java
 * Author: TamNM4
 * Date created: Jan 18, 2017
 */
package com.fsoft.coffeesystem.model;


// TODO: Auto-generated Javadoc
/**
 * The Class DeviceModel.
 */
public class DeviceModel {
	
	/** The id. */
	private int id;
	
	/** The name. */
	private String name;
	
	/** The description. */
	private String description;

	/**
	 * Instantiates a new device model.
	 */
	public DeviceModel() {

	}

	/**
	 * Instantiates a new device model.
	 *
	 * @param id the id
	 * @param name the name
	 * @param description the description
	 */
	public DeviceModel(int id, String name, String description) {
		this.id = id;
		this.name = name;
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
