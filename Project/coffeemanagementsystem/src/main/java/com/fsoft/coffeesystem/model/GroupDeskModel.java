/*
 * Jan 18, 2017
 * @author NhanNN
 */
package com.fsoft.coffeesystem.model;
import java.math.BigDecimal;
// TODO: Auto-generated Javadoc
/**
 * The Class GroupDeskModel.
 */
public class GroupDeskModel {
	
	/** The id. */
	private int id;
	
	/** The name. */
	private String name;
	
	/** The cost. */
	private BigDecimal cost;
	
	/** The description. */
	private String description;
	
	/** The is delete. */
	private Boolean isDelete;
	
	/**
	 * Instantiates a new group desk model.
	 *
	 * @param id the id
	 * @param name the name
	 * @param cost the cost
	 * @param description the description
	 * @param isDelete the is delete
	 */
	public GroupDeskModel(int id, String name, BigDecimal cost,String description,Boolean isDelete) {
		super();
		this.id = id;
		this.name = name;
		this.cost = cost;
		this.description = description;
		this.isDelete = isDelete;
	}
	
	/**
	 * Instantiates a new group desk model.
	 *
	 * @param id the id
	 * @param name the name
	 */
	public GroupDeskModel(int id, String name){
		super();
		this.id = id;
		this.name = name;
	}
	
	/**
	 * Instantiates a new group desk model.
	 */
	public GroupDeskModel(){
		
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
	 * Gets the cost.
	 *
	 * @return the cost
	 */
	public BigDecimal getCost() {
		return cost;
	}
	
	/**
	 * Sets the cost.
	 *
	 * @param cost the new cost
	 */
	public void setCost(BigDecimal cost) {
		this.cost = cost;
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
	 * @param isDelete the new checks if is delete
	 */
	public void setIsDelete(Boolean isDelete) {
		this.isDelete = isDelete;
	}
	
}
