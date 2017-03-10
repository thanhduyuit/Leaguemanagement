package com.fsoft.coffeesystem.model;

// TODO: Auto-generated Javadoc
/**
 * The Class StoreModel.
 */
public class StoreModel {
	
	/** The id. */
	private int id;
	
	/** The name. */
	private String name;
	
	/** The Discription. */
	private String Discription;
	
	/**
	 * Instantiates a new store model.
	 */
	public StoreModel() {
		super();
	}
	
	/**
	 * Instantiates a new store model.
	 *
	 * @param id the id
	 * @param name the name
	 * @param Discription the discription
	 */
	public StoreModel(int id, String name, String Discription) {
		super();
		this.id = id;
		this.name = name;
		this.Discription = Discription;
	}
	
	/**
	 * Instantiates a new store model.
	 *
	 * @param id the id
	 * @param name the name
	 */
	public StoreModel(int id, String name) {
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
	 * Gets the discription.
	 *
	 * @return the discription
	 */
	public String getDiscription() {
		return Discription;
	}
	
	/**
	 * Sets the discription.
	 *
	 * @param discription the new discription
	 */
	public void setDiscription(String discription) {
		Discription = discription;
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
