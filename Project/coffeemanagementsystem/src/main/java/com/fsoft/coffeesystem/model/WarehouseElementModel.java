package com.fsoft.coffeesystem.model;

import java.math.BigDecimal;

public class WarehouseElementModel {
	private int id;
	private String name;
	private String materialType;
	private BigDecimal price;
	private int quantity;
	private String description;
	private String store;

	public WarehouseElementModel() {
	}
	
	public WarehouseElementModel(int id, String name, String materialType, BigDecimal price, int quantity, String description) {
		super();
		this.id = id;
		this.name = name;
		this.materialType = materialType;
		this.price = price;
		this.quantity = quantity;
		this.description = description;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal bigDecimal) {
		this.price = bigDecimal;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getStore() {
		return store;
	}

	public void setStore(String store) {
		this.store = store;
	}
}