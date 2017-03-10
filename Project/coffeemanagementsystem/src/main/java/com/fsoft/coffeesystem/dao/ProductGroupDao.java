/**@project: coffeemanagementsystem
*@author: TuanVT2
*@date: Jan 18, 2017 
*
*/

package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.fsoft.coffeesystem.entity.ProductGroup;

/**
 * The Interface ProductGroupDao.
 */
public interface ProductGroupDao extends JpaRepository<ProductGroup, Integer> {
	/**Gets the list product group.
	 *
	 * @return the list product group
	 */
	@Query("select pg from ProductGroup pg where pg.isDelete=false")
	List<ProductGroup> getListProductGroup();
}
