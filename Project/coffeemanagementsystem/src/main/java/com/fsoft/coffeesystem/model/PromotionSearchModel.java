package com.fsoft.coffeesystem.model;

import java.io.Serializable;

public class PromotionSearchModel implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public String promotionName;
	public String startDate;
	public String endDate;
	
	public PromotionSearchModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public PromotionSearchModel(String promotionName, String startDate, String endDate) {
		super();
		this.promotionName = promotionName;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public String getPromotionName() {
		return promotionName;
	}
	public void setPromotionName(String promotionName) {
		this.promotionName = promotionName;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	
}
