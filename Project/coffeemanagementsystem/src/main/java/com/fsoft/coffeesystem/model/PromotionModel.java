package com.fsoft.coffeesystem.model;

import java.util.HashSet;
import java.util.Set;

// TODO: Auto-generated Javadoc
/**
 * The Class PromotionModel.
 */
public class PromotionModel {
	
	/** The name. */
	private String name;
	
	/** The start date. */
	private String startDate;
	
	/** The end date. */
	private String endDate;
	
	/** The Store id. */
	private int StoreId;
	
	/** The id. */
	private int id;
	
	private Set<PromotionDetailModel> promotionDetails = new HashSet<PromotionDetailModel>();

	
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
	 * Gets the end date.
	 *
	 * @return the end date
	 */
	public String getEndDate() {
		return endDate;
	}
	
	/**
	 * Sets the end date.
	 *
	 * @param endDate the new end date
	 */
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	
	/**
	 * Gets the start date.
	 *
	 * @return the start date
	 */
	public String getStartDate() {
		return startDate;
	}
	
	/**
	 * Sets the start date.
	 *
	 * @param startDate the new start date
	 */
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	
	/**
	 * Gets the store id.
	 *
	 * @return the store id
	 */
	public int getStoreId() {
		return StoreId;
	}
	
	/**
	 * Sets the store id.
	 *
	 * @param storeId the new store id
	 */
	public void setStoreId(int storeId) {
		StoreId = storeId;
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

	public Set<PromotionDetailModel> getPromotionDetails() {
		return promotionDetails;
	}

	public void setPromotionDetails(Set<PromotionDetailModel> promotionDetails) {
		this.promotionDetails = promotionDetails;
	}
	
}
