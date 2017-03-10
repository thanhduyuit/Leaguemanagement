package com.fsoft.coffeesystem.model;

import java.math.BigDecimal;

public class ProductModel {
	private int id;
	private int productGroupId;
	private String productGroupName;
	private String name;
	private BigDecimal price;
	private boolean status;
	private String description;
	public ProductModel(String name, int productGroupId, BigDecimal price, boolean status, String description) {
		super();
		this.name = name;
		this.productGroupId = productGroupId;
		this.price = price;
		this.status = status;
		this.description = description;
	}

	public ProductModel(int id, int productGroupId, String productGroupName, String name, BigDecimal price,
			boolean status, String description) {
		super();
		this.id = id;
		this.productGroupId = productGroupId;
		this.productGroupName = productGroupName;
		this.name = name;
		this.price = price;
		this.status = status;
		this.description = description;
	}

	public ProductModel() {
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getProductGroupId() {
		return productGroupId;
	}
	public void setProductGroupId(int productGroupId) {
		this.productGroupId = productGroupId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getProductGroupName() {
		return productGroupName;
	}

	public void setProductGroupName(String productGroupName) {
		this.productGroupName = productGroupName;
	}
	
	
}
