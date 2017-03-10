package com.fsoft.coffeesystem.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Material;

// TODO: Auto-generated Javadoc
/**
 * The Interface MaterialDao.
 */
public interface MaterialDao extends JpaRepository<Material, Integer>{
	
	/**
	 * Find material.
	 *
	 * @param materialName the material name
	 * @return the material
	 */
	@Query("select w from Material w where w.name = :materialName")
    Material findMaterial(@Param("materialName") String materialName);
	
}
