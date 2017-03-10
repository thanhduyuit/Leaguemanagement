package com.fsoft.coffeesystem.model;

public class SearchWarehouseModel {
	private String name;
	private String materialType;
	private String priceFrom;
	private String priceTo;
	public SearchWarehouseModel() {
		
	}
	public SearchWarehouseModel(String name, String materialType, String priceFrom, String priceTo) {
		super();
		this.name = name;
		this.materialType = materialType;
		this.priceFrom = priceFrom;
		this.priceTo = priceTo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMaterialType() {
		return materialType;
	}
	public void setMaterialType(String materialType) {
		this.materialType = materialType;
	}
	public String getPriceFrom() {
		return priceFrom;
	}
	public void setPriceFrom(String priceFrom) {
		this.priceFrom = priceFrom;
	}
	public String getPriceTo() {
		return priceTo;
	}
	public void setPriceTo(String priceTo) {
		this.priceTo = priceTo;
	}
	
}
