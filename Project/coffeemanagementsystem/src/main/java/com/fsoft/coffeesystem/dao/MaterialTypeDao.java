package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fsoft.coffeesystem.entity.MaterialType;

// TODO: Auto-generated Javadoc
/**
 * The Interface MaterialTypeDao.
 */
public interface MaterialTypeDao extends JpaRepository<MaterialType, Integer>{
	
	/**
	 * Find all material type.
	 *
	 * @return the list
	 */
	@Query("select w from MaterialType w where w.isDelete = 'false'")
    List<MaterialType> findAllMaterialType();

}
