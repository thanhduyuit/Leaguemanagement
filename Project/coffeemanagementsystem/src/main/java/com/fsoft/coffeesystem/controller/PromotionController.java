package com.fsoft.coffeesystem.controller;

import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.coffeesystem.dao.PromotionDao;
import com.fsoft.coffeesystem.model.ProductModel;
import com.fsoft.coffeesystem.model.PromotionDetailModel;
import com.fsoft.coffeesystem.model.PromotionModel;
import com.fsoft.coffeesystem.model.PromotionSearchModel;
import com.fsoft.coffeesystem.service.PromotionService;

// TODO: Auto-generated Javadoc
/**
 * The Class PromotionController.
 */
@RestController
@RequestMapping("/")
public class PromotionController {
	
	/** The promotion service. */
	@Autowired
	PromotionService promotionService;
	
	/** The promotion dao. */
	@Autowired
	PromotionDao promotionDao;
	


	/** The Constant log. */
	static final Logger log = Logger.getLogger(DeskController.class.getName());

	/**
	 * Inits the form.
	 *
	 * @return the model and view
	 */
	@RequestMapping(value = "/promotion", method = RequestMethod.GET)
	public ModelAndView initForm() {
		return new ModelAndView("listpromotion");
	}

	

	/**
	 * Find all.
	 *
	 * @param promotionSearchModel the promotion search model
	 * @return the list
	 */
	@RequestMapping(value = "/promotionSearch", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<PromotionModel> findAll(@RequestBody PromotionSearchModel promotionSearchModel) {
		
		List<PromotionModel> modelList = promotionService.searchPromotion(promotionSearchModel);
		log.info("size =" +modelList.size());
		return modelList;
	}


	/**
	 * Insert promotion.
	 *
	 * @param promotionModel the promotion model
	 * @return the string
	 */
	@RequestMapping(value = "/insertPromotions", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public String insertPromotion(@RequestBody PromotionModel promotionModel,HttpServletRequest request) {
			return promotionService.createPromotion(promotionModel,Integer.parseInt(request.getSession().getAttribute("storeid").toString()));
}
		
		
	/**
	 * Gets the product.
	 *
	 * @return the product
	 */
	@RequestMapping(value = "/getproduct", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody public List<ProductModel> getProduct() {

			return promotionService.getAllProduct();	

	}

	/**
	 * Delete promotion.
	 *
	 * @param promotionModel the promotion model
	 * @return the string
	 */
	@RequestMapping(value = "/deletePromotions", method = RequestMethod.GET)
	public String deletePromotion(@QueryParam("id") Integer id) {
		return promotionService.delete(id);

	}

	/**
	 * Update promotion.
	 *
	 * @param promotionModel the promotion model
	 * @return the string
	 */
	@RequestMapping(value = "/updatePromotions", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updatePromotion(@RequestBody PromotionModel promotionModel) {

		return promotionService.update(promotionModel);

	}


	@RequestMapping(value="/viewPromotion", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<PromotionDetailModel> viewPromotion(@QueryParam("id") Integer id){
		
//		Integer idPro = Integer.parseInt(id);
		List<PromotionDetailModel> promotionDetailModels = promotionService.getPromotionDetail(id);
		log.info("size = "+promotionDao.findOne(id).getPromotionDetails().size());
		
		return promotionDetailModels;	
	}

}
