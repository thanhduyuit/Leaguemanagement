/**@project coffeemanagementsystem
 *@class ProductGroupDetail.java
 *@author TuanVT2
 *@date Jan 18, 2017 
 *@version_java 1.8.0_111
 */
package com.fsoft.coffeesystem.model;

// TODO: Auto-generated Javadoc
/**
 * The Class ProductGroupDetail.
 */
public class ProductGroupDetail {
	
	/** The id. */
	private int id;
	
	/** The name. */
	private String name;
	
	/** The description. */
	private String description;

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

	/**
	 * Instantiates a new product group detail.
	 *
	 * @param id the id
	 * @param name the name
	 * @param description the description
	 */
	public ProductGroupDetail(int id, String name, String description) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
	}

	/**
	 * Instantiates a new product group detail.
	 */
	public ProductGroupDetail() {

	}
}
