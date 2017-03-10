/**@project coffeemanagementsystem
 *@class ProductGroupService.java
 *@author TuanVT2
 *@date Jan 18, 2017 
 *@version_java 1.8.0_111
 */

package com.fsoft.coffeesystem.service;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.ProductDao;
import com.fsoft.coffeesystem.dao.ProductGroupDao;
import com.fsoft.coffeesystem.dao.PromotionDetailDao;
import com.fsoft.coffeesystem.entity.Product;
import com.fsoft.coffeesystem.entity.PromotionDetail;
import com.fsoft.coffeesystem.model.ProductGroup;
import com.fsoft.coffeesystem.model.ProductGroupDetail;
import com.fsoft.coffeesystem.utilites.Convert;

// TODO: Auto-generated Javadoc
/**
 * The Class ProductGroupService.
 */
@Service("productGroupService")
public class ProductGroupService {

	/** The Constant LOG. */
	private static final Logger LOG = Logger.getLogger(ProductGroupService.class.getName());

	/** The product group dao. */
	@Autowired
	private ProductGroupDao productGroupDao;

	/** The product dao. */
	@Autowired
	private ProductDao productDao;

	/** The promotion detail dao. */
	@Autowired
	private PromotionDetailDao promotionDetailDao;

	/**
	 * Gets the list product group.
	 *
	 * @return the list product group
	 */
	public List<ProductGroup> getlistProductGroup() {
		return Convert.convertToProductGroup(productGroupDao.getListProductGroup());
	}

	/**
	 * Gets the list product detail.
	 *
	 * @return the list product detail
	 */
	public List<ProductGroupDetail> getListProductDetail() {
		return Convert.convertToProductGroupDetail(productGroupDao.getListProductGroup());
	}

	/**
	 * Delete.
	 *
	 * @param id
	 *            the id
	 * @return true, if successful
	 */
	public boolean delete(int id) {

		try {
			com.fsoft.coffeesystem.entity.ProductGroup pg = productGroupDao.findOne(id);
			List<Product> listp = productDao.getProductWithProductGroup(pg);
			for (Product p : listp) {
				List<PromotionDetail> listpro = promotionDetailDao.getPromotionDetailWithProduct(p);
				for (PromotionDetail prom : listpro) {
					prom.setIsDelete(true);
					promotionDetailDao.save(prom);
				}
				p.setIsDelete(true);
				productDao.save(p);
			}

			pg.setIsDelete(true);
			productGroupDao.save(pg);
			LOG.log(Level.INFO, "DELETE RECORD PRODUCTGROUP TABLE SUCCESS", pg);
			return true;
		} catch (Exception e) {
			LOG.log(Level.INFO, e.getMessage(), e);
			return false;
		}
	}

	/**
	 * Update.
	 *
	 * @param id
	 *            the id
	 * @param name
	 *            the name
	 * @param description
	 *            the description
	 * @return true, if successful
	 */
	public boolean update(int id, String name, String description) {
		try {
			com.fsoft.coffeesystem.entity.ProductGroup pg = productGroupDao.findOne(id);
			pg.setName(name);
			pg.setDescription(description);
			productGroupDao.save(pg);
			LOG.log(Level.INFO, "UPDATE RECORD PRODUCTGROUP TABLE SUCCESS", pg);
			return true;
		} catch (Exception e) {
			LOG.log(Level.INFO, e.getMessage(), e);
			return false;
		}
	}

	/**
	 * Insert.
	 *
	 * @param name
	 *            the name
	 * @param description
	 *            the description
	 * @return true, if successful
	 */
	public boolean insert(String name, String description) {
		try {
			com.fsoft.coffeesystem.entity.ProductGroup pg = new com.fsoft.coffeesystem.entity.ProductGroup();
			pg.setName(name);
			pg.setDescription(description);
			pg.setIsDelete(false);
			pg.setProducts(null);
			productGroupDao.save(pg);
			System.out.println(pg.getId());
			LOG.log(Level.INFO, "INSERT RECORD PRODUCTGROUP TABLE SUCCESS", pg);
			return true;
		} catch (Exception e) {
			LOG.log(Level.INFO, e.getMessage(), e);
			return false;
		}
	}

}
