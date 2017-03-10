package com.fsoft.coffeesystem.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.ProductDao;
import com.fsoft.coffeesystem.dao.ProductGroupDao;
import com.fsoft.coffeesystem.entity.Product;
import com.fsoft.coffeesystem.entity.ProductGroup;
import com.fsoft.coffeesystem.model.ProductModel;
import com.fsoft.coffeesystem.model.SearchProductModel;
import com.fsoft.coffeesystem.utilites.Convert;

// TODO: Auto-generated Javadoc
/**
 * The Class ProductService.
 */
@Service("productService")
public class ProductService {

	/** The product dao. */
	@Autowired
	private ProductDao productDao;

	/** The product group dao. */
	@Autowired
	private ProductGroupDao productGroupDao;

	/**
	 * Adds the products.
	 *
	 * @param productModel
	 *            the product model
	 */
	/*
	 * add products
	 * 
	 * @param ProductModel
	 * 
	 * @return: No
	 */
	public void addProducts(ProductModel productModel) {
		Product p = new Product();
		ProductGroup pg = productGroupDao.findOne(productModel.getProductGroupId());

		p.setName(productModel.getName());
		p.setProductGroup(pg);
		p.setPrice(productModel.getPrice());
		p.setStatus(productModel.isStatus());
		p.setDescription(productModel.getDescription());
		p.setIsDelete(false);
		productDao.save(p);
	}

	/**
	 * Update product.
	 *
	 * @param productModel
	 *            the product model
	 * @return the boolean
	 */
	/*
	 * update product
	 * 
	 * @param ProductModel
	 * 
	 * @return boolean
	 */
	public Boolean updateProduct(ProductModel productModel) {
		Product p = productDao.findOne(productModel.getId());
		if (p == null)
			return false;
		int pgId = productModel.getProductGroupId();
		ProductGroup pg = productGroupDao.findOne(pgId);
		p.setName(productModel.getName());
		p.setProductGroup(pg);
		p.setStatus(productModel.isStatus());
		p.setDescription(productModel.getDescription());
		productDao.save(p);
		return true;
	}

	/**
	 * Search products.
	 *
	 * @param product
	 *            the product
	 * @return the list
	 */
	public List<ProductModel> searchProducts(SearchProductModel product) {
		List<Product> listProduct = new ArrayList<Product>();
		Integer groupId = null, priceFrom = null, priceTo = null;
		String name;
		name = product.getName();
		if (!product.getGroupId().isEmpty()) {
			groupId = Integer.parseInt(product.getGroupId());
		} 
		if (!product.getPriceFrom().isEmpty()) {
			priceFrom = Integer.parseInt(product.getPriceFrom());
		} 
		if (!product.getPriceTo().isEmpty()) {
			priceTo = Integer.parseInt(product.getPriceTo());
		}
		listProduct = productDao.searchProducts(name, groupId, priceFrom, priceTo);
		List<ProductModel> listAddress = Convert.convertToProductModel(listProduct);
		return listAddress;
	}

	/**
	 * Delete product.
	 *
	 * @param id
	 *            the id
	 * @return true, if successful
	 */
	public boolean deleteProduct(int id) {
		try {
			Product p = productDao.findOne(id);
			p.setIsDelete(true);
			productDao.save(p);
			return true;
		} catch (Exception e) {
			return false;
		}

	}
}
