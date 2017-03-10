package com.fsoft.coffeesystem.model;

// TODO: Auto-generated Javadoc
/**
 * The Class SearchProductModel.
 */
public class SearchProductModel {
	
	/** The name. */
	String name;
	
	/** The group id. */
	String groupId;
	
	/** The price from. */
	String priceFrom;
	
	/** The price to. */
	String priceTo;
	
	/**
	 * Instantiates a new search product model.
	 */
	public SearchProductModel() {
		super();
	}
	
	/**
	 * Instantiates a new search product model.
	 *
	 * @param name the name
	 * @param groupId the group id
	 * @param priceFrom the price from
	 * @param priceTo the price to
	 */
	public SearchProductModel(String name, String groupId, String priceFrom, String priceTo) {
		super();
		this.name = name;
		this.groupId = groupId;
		this.priceFrom = priceFrom;
		this.priceTo = priceTo;
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
	 * Gets the price from.
	 *
	 * @return the price from
	 */
	public String getPriceFrom() {
		return priceFrom;
	}
	
	/**
	 * Sets the price from.
	 *
	 * @param priceFrom the new price from
	 */
	public void setPriceFrom(String priceFrom) {
		this.priceFrom = priceFrom;
	}
	
	/**
	 * Gets the price to.
	 *
	 * @return the price to
	 */
	public String getPriceTo() {
		return priceTo;
	}
	
	/**
	 * Sets the price to.
	 *
	 * @param priceTo the new price to
	 */
	public void setPriceTo(String priceTo) {
		this.priceTo = priceTo;
	}
	
	/**
	 * Gets the group id.
	 *
	 * @return the group id
	 */
	public String getGroupId() {
		return groupId;
	}
	
	/**
	 * Sets the group id.
	 *
	 * @param groupId the new group id
	 */
	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}
	

}
