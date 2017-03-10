package com.fsoft.coffeesystem.model;


// TODO: Auto-generated Javadoc
/**
 * The Class DistrictModel.
 */
public class DistrictModel{

	/** The id. */
	private int id;
	
	/** The name. */
	private String name;

	/**
	 * Instantiates a new district model.
	 */
	public DistrictModel() {
		super();
	}

	/**
	 * Instantiates a new district model.
	 *
	 * @param id the id
	 * @param name the name
	 */
	public DistrictModel(int id, String name) {
		super();
		this.id = id;
		this.name = name;
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
	
	
}
