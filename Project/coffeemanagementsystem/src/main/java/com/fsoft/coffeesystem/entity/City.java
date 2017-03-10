/*
 * 
 */
package com.fsoft.coffeesystem.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
// TODO: Auto-generated Javadoc

/**
 * The Class City.
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "city")
public class City implements java.io.Serializable {

	/** The id. */
	private int id;
	
	/** The name. */
	private String name;
	
	/** The is delete. */
	private Boolean isDelete;
	
	/** The description. */
	private String description;
	
	/** The districts. */
	private Set<District> districts = new HashSet<District>(0);

	/**
	 * Instantiates a new city.
	 */
	public City() {
	}

	/**
	 * Instantiates a new city.
	 *
	 * @param id the id
	 * @param name the name
	 */
	public City(int id, String name) {
		this.id = id;
		this.name = name;
	}

	/**
	 * Instantiates a new city.
	 *
	 * @param id the id
	 * @param name the name
	 * @param isDelete the is delete
	 * @param description the description
	 * @param districts the districts
	 */
	public City(int id, String name, Boolean isDelete, String description, Set<District> districts) {
		this.id = id;
		this.name = name;
		this.isDelete = isDelete;
		this.description = description;
		this.districts = districts;
	}

	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return this.id;
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
	@Column(name = "name", nullable = false)
	public String getName() {
		return this.name;
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
	 * Gets the checks if is delete.
	 *
	 * @return the checks if is delete
	 */
	@Column(name = "isDelete")
	public Boolean getIsDelete() {
		return this.isDelete;
	}

	/**
	 * Sets the checks if is delete.
	 *
	 * @param isDelete the new checks if is delete
	 */
	public void setIsDelete(Boolean isDelete) {
		this.isDelete = isDelete;
	}

	/**
	 * Gets the description.
	 *
	 * @return the description
	 */
	@Column(name = "description")
	public String getDescription() {
		return this.description;
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
	 * Gets the districts.
	 *
	 * @return the districts
	 */
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "city")
	public Set<District> getDistricts() {
		return this.districts;
	}

	/**
	 * Sets the districts.
	 *
	 * @param districts the new districts
	 */
	public void setDistricts(Set<District> districts) {
		this.districts = districts;
	}

}
