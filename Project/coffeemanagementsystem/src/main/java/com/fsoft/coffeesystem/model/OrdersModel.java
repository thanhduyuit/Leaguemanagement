package com.fsoft.coffeesystem.model;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


// TODO: Auto-generated Javadoc
/**
 * The Class OrderModel.
 */
public class OrdersModel {

	/** The id. */
	private int id;

	/** The customer. */
	private CustomerModel customerModel;

	/** The desk. */
	private String deskName;

	/** The date. */
	private Date date;

	/** The total bill. */
	private BigDecimal totalBill;
	
	/** The quantity product. */
	private int quantityProduct;

	/** The order details. */
	private Set<OrderDetailModel> orderDetailsModel = new HashSet<OrderDetailModel>(0);

	/**
	 * Instantiates a new order model.
	 *
	 * @param id            the id
	 * @param customer            the customer
	 * @param deskName the desk name
	 * @param date            the date
	 * @param totalBill            the total bill
	 * @param orderDetails            the order details
	 */
	public OrdersModel(int id, CustomerModel customer, String deskName, Date date, BigDecimal totalBill,
			Set<OrderDetailModel> orderDetails) {
		super();
		this.id = id;
		this.customerModel = customer;
		this.deskName = deskName;
		this.date = date;
		this.totalBill = totalBill;
		this.orderDetailsModel = orderDetails;
	}

	/**
	 * Instantiates a new order model.
	 */
	public OrdersModel() {
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
	 * Gets the customer.
	 *
	 * @return the customer
	 */
	public CustomerModel getCustomerModel() {
		return customerModel;
	}

	/**
	 * Sets the customer.
	 *
	 * @param customer
	 *            the new customer
	 */
	public void setCustomerModel(CustomerModel customer) {
		this.customerModel = customer;
	}

	/**
	 * Gets the desk.
	 *
	 * @return the desk
	 */
	public String getDesk() {
		return deskName;
	}

	/**
	 * Sets the desk.
	 *
	 * @param desk
	 *            the new desk
	 */
	public void setDesk(String desk) {
		this.deskName = desk;
	}

	/**
	 * Gets the date.
	 *
	 * @return the date
	 */
	public Date getDate() {
		return date;
	}

	/**
	 * Sets the date.
	 *
	 * @param date
	 *            the new date
	 */
	public void setDate(Date date) {
		this.date = date;
	}

	/**
	 * Gets the total bill.
	 *
	 * @return the total bill
	 */
	public BigDecimal getTotalBill() {
		return totalBill;
	}

	/**
	 * Sets the total bill.
	 *
	 * @param bigDecimal
	 *            the new total bill
	 */
	public void setTotalBill(BigDecimal bigDecimal) {
		this.totalBill = bigDecimal;
	}

	/**
	 * Gets the order details.
	 *
	 * @return the order details
	 */
	public Set<OrderDetailModel> getOrderDetailsModel() {
		return orderDetailsModel;
	}

	/**
	 * Sets the order details.
	 *
	 * @param orderDetails
	 *            the new order details
	 */
	public void setOrderDetailsModel(Set<OrderDetailModel> orderDetails) {
		this.orderDetailsModel = orderDetails;
	}

	/**
	 * Gets the desk name.
	 *
	 * @return the desk name
	 */
	public String getDeskName() {
		return deskName;
	}

	/**
	 * Sets the desk name.
	 *
	 * @param deskName the new desk name
	 */
	public void setDeskName(String deskName) {
		this.deskName = deskName;
	}

	/**
	 * Gets the quantity product.
	 *
	 * @return the quantity product
	 */
	public int getQuantityProduct() {
		return quantityProduct;
	}

	/**
	 * Sets the quantity product.
	 *
	 * @param quantityProduct the new quantity product
	 */
	public void setQuantityProduct(int quantityProduct) {
		this.quantityProduct = quantityProduct;
	}
	
	
	
}