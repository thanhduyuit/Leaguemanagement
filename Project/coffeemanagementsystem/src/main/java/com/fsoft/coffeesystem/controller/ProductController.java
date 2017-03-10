package com.fsoft.coffeesystem.controller;


import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.coffeesystem.model.ProductModel;
import com.fsoft.coffeesystem.model.SearchProductModel;
import com.fsoft.coffeesystem.service.ProductService;

// TODO: Auto-generated Javadoc
/**
 * The Class ProductController.
 */
@RestController
@RequestMapping("/")
public class ProductController {
	
	/** The Constant log. */
	static final Logger log = Logger.getLogger(ProductController.class.getName());

	/** The product service. */
	@Autowired
	ProductService productService;

	/**
	 * Home.
	 *
	 * @return the model and view
	 */
	@RequestMapping(value = "/homeAddProducts", method = RequestMethod.GET)
	public ModelAndView home(){
		return new ModelAndView("addProducts");
	}

	/**
	 * Inits the form.
	 *
	 * @return the model and view
	 */
	@RequestMapping(value = "/products", method = RequestMethod.GET)
	public ModelAndView initForm() {
		return new ModelAndView("listproduct");
	}

	/**
	 * Adds the products.
	 *
	 * @param productModel the product model
	 * @return the boolean
	 */
	@RequestMapping(value = "/addProducts", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Boolean addProducts(@RequestBody ProductModel productModel){
		try { 
			productService.addProducts(productModel);	
			return true;
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(), e);
			return false;
		}		
	}
	
	
	/**
	 * Update products.
	 *
	 * @param productModel the product model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/updateProducts", method = RequestMethod.POST)
	public boolean updateProducts(@RequestBody ProductModel productModel){
		Boolean test = productService.updateProduct(productModel);
		return test;	
	}

	
	/**
	 * Search products.
	 *
	 * @param product the product
	 * @return the list
	 */
	@RequestMapping(value = "/searchproducts", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<ProductModel> searchProducts(@RequestBody SearchProductModel product) {
		List<ProductModel> listAddress= productService.searchProducts(product);
		return listAddress;
	}
	
	/**
	 * Delete product.
	 *
	 * @param id the id
	 * @return true, if successful
	 */
	@RequestMapping(value = "/deleteProducts", method = RequestMethod.GET)
	public boolean deleteProduct(@RequestParam int id) {
		try {
			return productService.deleteProduct(id);
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(), e);
			return false;
		}
	}
}
