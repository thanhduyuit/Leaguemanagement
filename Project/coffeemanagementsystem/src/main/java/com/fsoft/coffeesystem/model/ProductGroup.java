package com.fsoft.coffeesystem.model;

// TODO: Auto-generated Javadoc
/**
 * The Class ProductGroup.
 */
public class ProductGroup {
	
	/** The id. */
	int id;
	
	/** The name. */
	String name;

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
	 * Instantiates a new product group.
	 *
	 * @param i the i
	 * @param name the name
	 */
	public ProductGroup(int i, String name) {
		super();
		this.id = i;
		this.name = name;
	}

	/**
	 * Instantiates a new product group.
	 */
	public ProductGroup() {

	}
}
