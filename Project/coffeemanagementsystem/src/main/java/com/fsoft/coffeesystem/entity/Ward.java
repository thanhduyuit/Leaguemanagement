package com.fsoft.coffeesystem.entity;

// Generated 11-Jan-2017 22:33:33 by Hibernate Tools 5.2.0.Beta1

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
// TODO: Auto-generated Javadoc

/**
 * Ward generated by hbm2java.
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "ward")
public class Ward implements java.io.Serializable{

	/** The id. */
	private int id;
	
	/** The district. */
	private District district;
	
	/** The name. */
	private String name;
	
	/** The is delete. */
	private Boolean isDelete;
	
	/** The description. */
	private String description;
	
	/** The accountses. */
	private Set<Accounts> accountses = new HashSet<Accounts>(0);
	
	/** The employees. */
	private Set<Employee> employees = new HashSet<Employee>(0);
	
	/** The accountses. */
	private Set<Customer> customeres = new HashSet<Customer>(0);
	
	/**
	 * Instantiates a new ward.
	 */
	public Ward() {
	}

	/**
	 * Instantiates a new ward.
	 *
	 * @param id the id
	 * @param name the name
	 */
	public Ward(int id, String name) {
		this.id = id;
		this.name = name;
	}

	/**
	 * Instantiates a new ward.
	 *
	 * @param id the id
	 * @param district the district
	 * @param name the name
	 * @param isDelete the is delete
	 * @param description the description
	 * @param accountses the accountses
	 * @param employees the employees
	 */
	public Ward(int id, District district, String name, Boolean isDelete, String description,
			Set<Accounts> accountses, Set<Employee> employees, Set<Customer> customeres) {
		this.id = id;
		this.district = district;
		this.name = name;
		this.isDelete = isDelete;
		this.description = description;
		this.accountses = accountses;
		this.employees = employees;
		this.customeres = customeres;
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
	 * Gets the district.
	 *
	 * @return the district
	 */
	@ManyToOne
	@JoinColumn(name = "districtId")
	public District getDistrict() {
		return this.district;
	}

	/**
	 * Sets the district.
	 *
	 * @param district the new district
	 */
	public void setDistrict(District district) {
		this.district = district;
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
	 * Gets the accountses.
	 *
	 * @return the accountses
	 */
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "ward")
	public Set<Accounts> getAccountses() {
		return this.accountses;
	}

	/**
	 * Sets the accountses.
	 *
	 * @param accountses the new accountses
	 */
	public void setAccountses(Set<Accounts> accountses) {
		this.accountses = accountses;
	}

	/**
	 * Gets the employees.
	 *
	 * @return the employees
	 */
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "ward")
	public Set<Employee> getEmployees() {
		return this.employees;
	}

	/**
	 * Sets the employees.
	 *
	 * @param employees the new employees
	 */
	public void setEmployees(Set<Employee> employees) {
		this.employees = employees;
	}

	/**
	 * Gets the employees.
	 *
	 * @return the employees
	 */
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "ward")
	public Set<Customer> getCustomeres() {
		return this.customeres;
	}

	/**
	 * Sets the employees.
	 *
	 * @param employees the new employees
	 */
	public void setCustomeres(Set<Customer> customeres) {
		this.customeres = customeres;
	}
}
