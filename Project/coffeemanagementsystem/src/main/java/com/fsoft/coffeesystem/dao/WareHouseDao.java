package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Warehouse;

// TODO: Auto-generated Javadoc
/**
 * The Interface WareHouseDao.
 */
public interface WareHouseDao extends JpaRepository<Warehouse,Integer> {
	
	/**
	 * Search ware house.
	 *
	 * @param material the material
	 * @param materialType the material type
	 * @return the list
	 */
	@Query("select w from Warehouse w where w.material.name LIKE '%'||:material||'%' and w.material.materialType.name LIKE '%'||:nameType||'%' "
			+ "and (:priceFrom = 0 or w.material.price > :priceFrom)"
			+ "and (:priceTo = 0 or w.material.price < :priceTo)"
			+ "and w.isDelete = 0")
    List<Warehouse> searchWareHouse(@Param("material") String material,@Param("nameType") String materialType,@Param("priceFrom") int priceFrom,@Param("priceTo") int priceTo);
	
//	@Query("update Warehouse w set w.isDelete = true where w.id = :whId ")
//	boolean deleteWh(@Param("whId")int id); 
	
	/**
 * Find material in warehouse.
 *
 * @param materialId the material id
 * @return the warehouse
 */
@Query("select w from Warehouse w where w.material.id = :materialId")
	Warehouse findMaterialInWarehouse(@Param("materialId") int materialId);
}
