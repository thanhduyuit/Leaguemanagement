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
import javax.persistence.OneToMany;
import javax.persistence.Table;

// TODO: Auto-generated Javadoc
/**
 * MaterialType generated by hbm2java.
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "materialType")
public class MaterialType implements java.io.Serializable {

	/** The id. */
	private int id;
	
	/** The name. */
	private String name;
	
	/** The is delete. */
	private Boolean isDelete;
	
	/** The description. */
	private String description;
	
	/** The materials. */
	private Set<Material> materials = new HashSet<Material>(0);

	/**
	 * Instantiates a new material type.
	 */
	public MaterialType() {
	}

	/**
	 * Instantiates a new material type.
	 *
	 * @param id the id
	 * @param name the name
	 */
	public MaterialType(int id, String name) {
		this.id = id;
		this.name = name;
	}

	/**
	 * Instantiates a new material type.
	 *
	 * @param id the id
	 * @param name the name
	 * @param isDelete the is delete
	 * @param description the description
	 * @param materials the materials
	 */
	public MaterialType(int id, String name, Boolean isDelete, String description,
			Set<Material> materials) {
		this.id = id;
		this.name = name;
		this.isDelete = isDelete;
		this.description = description;
		this.materials = materials;
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
	 * Gets the materials.
	 *
	 * @return the materials
	 */
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "materialType")
	public Set<Material> getMaterials() {
		return this.materials;
	}

	/**
	 * Sets the materials.
	 *
	 * @param materials the new materials
	 */
	public void setMaterials(Set<Material> materials) {
		this.materials = materials;
	}

}
