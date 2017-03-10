package com.fsoft.coffeesystem.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.ProductDao;
import com.fsoft.coffeesystem.dao.PromotionDao;
import com.fsoft.coffeesystem.dao.PromotionDetailDao;
import com.fsoft.coffeesystem.dao.StoreDao;
import com.fsoft.coffeesystem.entity.Product;
import com.fsoft.coffeesystem.entity.Promotion;
import com.fsoft.coffeesystem.entity.PromotionDetail;
import com.fsoft.coffeesystem.entity.Store;
import com.fsoft.coffeesystem.entity.Ward;
import com.fsoft.coffeesystem.model.AddressModel;
import com.fsoft.coffeesystem.model.ProductModel;
import com.fsoft.coffeesystem.model.PromotionDetailModel;
import com.fsoft.coffeesystem.model.PromotionModel;
import com.fsoft.coffeesystem.model.PromotionSearchModel;
import com.fsoft.coffeesystem.utilites.Convert;


// TODO: Auto-generated Javadoc
/**
 * The Class PromotionService.
 */
@Service("promotionService")
public class PromotionService {
	
	/** The promotion dao. */
	@Autowired
	PromotionDao promotionDao;
	
	/** The store dao. */
	@Autowired
	StoreDao storeDao;
	
	/** The product dao. */
	@Autowired
	ProductDao productDao;
	@Autowired
	PromotionDetailDao promotionDetaildao;
	/** The start date. */
	Date startDate;
	
	/** The end date. */
	Date endDate;
	

	/**
	 * Creates the promotion.
	 *
	 * @param promotionModel the promotion model
	 * @return the string
	 */
	public String createPromotion(PromotionModel promotionModel,int storeid) {
	
	Store store = new Store();
	Promotion pro = new Promotion();
	
	
		startDate = Convert.parseToDate(promotionModel.getStartDate());
		endDate = Convert.parseToDate(promotionModel.getEndDate());
		store = storeDao.findOne(storeid);
		pro.setName(promotionModel.getName());
		pro.setStartDate(startDate);
		pro.setEndDate(endDate);
		pro.setIsDelete(false);
		
		
		pro.setStore(store);
		promotionDao.save(pro);
		for(PromotionDetailModel detailModel : promotionModel.getPromotionDetails()){
			Product p = productDao.findOne(detailModel.getProductId());			
			PromotionDetail promotionDetail = new PromotionDetail();
			promotionDetail.setProduct(p);
			promotionDetail.setDiscount(detailModel.getDiscount());
			promotionDetail.setPromotion(pro);
			promotionDetail.setIsDelete(false);
			promotionDetaildao.save(promotionDetail);
		}
			

	return saveJpa(pro);
	}
	
	public static List<AddressModel> convertToPromotion(List<Ward> listWards) {
		List<AddressModel> listAddress = new ArrayList<>();
		AddressModel address;
		for (Ward ward : listWards) {
			address = new AddressModel();
			address.setWardName(ward.getName());
			address.setDistrictName(ward.getDistrict().getName());
			address.setCityName(ward.getDistrict().getCity().getName());
			listAddress.add(address);
		}
		return listAddress;
	}
	/**
	 * Gets the all product.
	 *
	 * @return the all product
	 */
	public List<ProductModel> getAllProduct() {
		List<Product> listProduct= new ArrayList<Product>();
		listProduct = productDao.findAll();
		List<ProductModel> listAddress = Convert.convertToProductModel(listProduct);
		return listAddress;
	}
	
	
	/**
	 * Update.
	 *
	 * @param promotionModel the promotion model
	 * @return the string
	 */
	public String update(PromotionModel promotionModel) {
		Promotion pro = promotionDao.findOne(promotionModel.getId());
		Store store = new Store();
	
		startDate = Convert.parseToDate(promotionModel.getStartDate());
		endDate = Convert.parseToDate(promotionModel.getEndDate());
		store = storeDao.findOne(promotionModel.getStoreId());
		pro.setName(promotionModel.getName());
		pro.setStartDate(startDate);
		pro.setEndDate(endDate);
		pro.setIsDelete(false);
		pro.setStore(store);
				
		
		return saveJpa(pro);
	}

	/**
	 * Delete.
	 *
	 * @param promotionModel the promotion model
	 * @return the string
	 */
	public String delete(Integer id) {
		Promotion promotion;
		promotion = promotionDao.findOne(id);	
		if(promotion.getPromotionDetails().isEmpty()){
	       
		    promotion.setIsDelete(true);
		    return saveJpa(promotion);
		}
		else{
			promotion.setIsDelete(true);
		for(PromotionDetail promotionDetail : promotion.getPromotionDetails()){
						
				
				promotionDetail.setIsDelete(true);
				promotionDetaildao.save(promotionDetail);
				
			}
			return saveJpa(promotion);
		}
	}
	
	
	/**
	 * Save jpa.
	 *
	 * @param promotion the promotion
	 * @return the string
	 */
	private String saveJpa(Promotion promotion) {
		try {
			promotionDao.save(promotion);
			return "{\"success\": true}";
		} catch (Exception e) {
			System.out.println(e);
			return "{\"success\": false}";
		}
	}
	
	/**
	 * Search promotion.
	 *
	 * @param promotionSearchModel the promotion search model
	 * @return the list
	 */
	public List<PromotionModel> searchPromotion(PromotionSearchModel promotionSearchModel){
		
//		Date startDate= Convert.parseToDate(promotionSearchModel.getStartDate().trim());
//		Date endDate= Convert.parseToDate(promotionSearchModel.getEndDate().trim());

		String name = promotionSearchModel.getPromotionName().trim();
		String startDate = promotionSearchModel.getStartDate().trim();
		String endDate = promotionSearchModel.getEndDate().trim();

		List<Promotion> lst = promotionDao.findPromotions(name,startDate,endDate);
		List<PromotionModel> prmtModelList = new ArrayList<PromotionModel>();

		prmtModelList = Convert.convertToPromotionModel(lst);
	
		return prmtModelList;
	}
	
    public List<PromotionDetailModel> getPromotionDetail(Integer id){
		
   		Promotion promotion = promotionDao.findOne(id);
		List<PromotionDetailModel> promotionDetailModels = new ArrayList<>();
		if(promotion != null){ 
		    Set<PromotionDetail> promotionDetailSet = promotion.getPromotionDetails();
			List<PromotionDetail> promotionDetailList = new ArrayList<>(promotionDetailSet);
			promotionDetailModels = Convert.convertToPromotionDetailModel(promotionDetailList);
		}
		
		return promotionDetailModels;
	}
}
