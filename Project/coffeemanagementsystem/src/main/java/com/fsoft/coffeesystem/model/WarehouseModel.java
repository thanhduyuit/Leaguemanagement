package com.fsoft.coffeesystem.model;

import java.math.BigDecimal;

// TODO: Auto-generated Javadoc
/**
 * The Class WarehouseModel.
 */
public class WarehouseModel {
	
	/** The id. */
	private int id;
	
	/** The name of material. */
	private String name;
	
	/** The material type. */
	private String materialType;
	
	/** The price. */
	private BigDecimal price;
	
	/** The quantity. */
	private int quantity;
	
	/** The description. */
	private String description;
	
	/**
	 * Instantiates a new warehouse model.
	 */
	public WarehouseModel() {
	}
	
	/**
	 * Instantiates a new warehouse model.
	 *
	 * @param id the id
	 * @param name the name
	 * @param materialType the material type
	 * @param price the price
	 * @param quantity the quantity
	 * @param description the description
	 */
	public WarehouseModel(int id, String name, String materialType, BigDecimal price, int quantity, String description) {
		super();
		this.id = id;
		this.name = name;
		this.materialType = materialType;
		this.price = price;
		this.quantity = quantity;
		this.description = description;
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
	
	/**
	 * Gets the material type.
	 *
	 * @return the material type
	 */
	public String getMaterialType() {
		return materialType;
	}
	
	/**
	 * Sets the material type.
	 *
	 * @param materialType the new material type
	 */
	public void setMaterialType(String materialType) {
		this.materialType = materialType;
	}
	
	/**
	 * Gets the price.
	 *
	 * @return the price
	 */
	public BigDecimal getPrice() {
		return price;
	}
	
	/**
	 * Sets the price.
	 *
	 * @param bigDecimal the new price
	 */
	public void setPrice(BigDecimal bigDecimal) {
		this.price = bigDecimal;
	}
	
	/**
	 * Gets the quantity.
	 *
	 * @return the quantity
	 */
	public int getQuantity() {
		return quantity;
	}
	
	/**
	 * Sets the quantity.
	 *
	 * @param quantity the new quantity
	 */
	public void setQuantity(int quantity) {
		this.quantity = quantity;
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
}
