/**@project coffeemanagementsystem
 *@class PromotionDetailDao.java
 *@author TuanVT2
 *@date Jan 20, 2017 
 *@version_java 1.8.0_111
 */
package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Product;
import com.fsoft.coffeesystem.entity.PromotionDetail;

// TODO: Auto-generated Javadoc
/**
 * The Interface PromotionDetailDao.
 */
public interface PromotionDetailDao extends JpaRepository<PromotionDetail, Integer> {

	/**
	 * Gets the promotion detail with product.
	 *
	 * @param p the p
	 * @return the promotion detail with product
	 */
	@Query("select prod from PromotionDetail prod where prod.product like :p and prod.isDelete = false")
	List<PromotionDetail> getPromotionDetailWithProduct(@Param("p") Product p);
	
}
