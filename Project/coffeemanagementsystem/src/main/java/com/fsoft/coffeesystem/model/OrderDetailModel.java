package com.fsoft.coffeesystem.model;

// TODO: Auto-generated Javadoc
/**
 * The Class OrderDetailModel.
 */
public class OrderDetailModel {

	/** The id. */
	private int id;

	/** The order model. */
	private OrdersModel orderModel;

	/** The product. */
	private ProductModel productModel;

	/** The quantity. */
	private int quantity;

	/** The is delete. */
	private Boolean isDelete;

	/** The description. */
	private String description;

	/**
	 * Instantiates a new order detail model.
	 */
	public OrderDetailModel() {
		// TODO Auto-generated constructor stub
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
	 * @param id
	 *            the new id
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * Gets the order model.
	 *
	 * @return the order model
	 */
	public OrdersModel getOrderModel() {
		return orderModel;
	}

	/**
	 * Sets the order model.
	 *
	 * @param orderModel
	 *            the new order model
	 */
	public void setOrderModel(OrdersModel orderModel) {
		this.orderModel = orderModel;
	}

	/**
	 * Gets the product model.
	 *
	 * @return the product model
	 */
	public ProductModel getProductModel() {
		return productModel;
	}

	/**
	 * Sets the product model.
	 *
	 * @param productModel
	 *            the new product model
	 */
	public void setProductModel(ProductModel productModel) {
		this.productModel = productModel;
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
	 * @param quantity
	 *            the new quantity
	 */
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	/**
	 * Gets the checks if is delete.
	 *
	 * @return the checks if is delete
	 */
	public Boolean getIsDelete() {
		return isDelete;
	}

	/**
	 * Sets the checks if is delete.
	 *
	 * @param isDelete
	 *            the new checks if is delete
	 */
	public void setIsDelete(Boolean isDelete) {
		this.isDelete = isDelete;
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
	 * @param description
	 *            the new description
	 */
	public void setDescription(String description) {
		this.description = description;
	}
}
