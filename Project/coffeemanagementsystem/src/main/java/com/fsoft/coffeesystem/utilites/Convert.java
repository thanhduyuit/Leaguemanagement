package com.fsoft.coffeesystem.utilites;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fsoft.coffeesystem.entity.Accounts;
import com.fsoft.coffeesystem.entity.Customer;
import com.fsoft.coffeesystem.entity.Desk;
import com.fsoft.coffeesystem.entity.OrderDetail;
import com.fsoft.coffeesystem.entity.Orders;
import com.fsoft.coffeesystem.entity.Product;
import com.fsoft.coffeesystem.entity.Promotion;
import com.fsoft.coffeesystem.entity.PromotionDetail;
import com.fsoft.coffeesystem.entity.Store;
import com.fsoft.coffeesystem.entity.Ward;
import com.fsoft.coffeesystem.entity.Warehouse;
import com.fsoft.coffeesystem.model.AccountModel;
import com.fsoft.coffeesystem.model.AddressModel;
import com.fsoft.coffeesystem.model.CustomerModel;
import com.fsoft.coffeesystem.model.DeskModel;
import com.fsoft.coffeesystem.model.OrderDetailModel;
import com.fsoft.coffeesystem.model.OrdersModel;
import com.fsoft.coffeesystem.model.ProductGroup;
import com.fsoft.coffeesystem.model.ProductGroupDetail;
import com.fsoft.coffeesystem.model.ProductModel;
import com.fsoft.coffeesystem.model.PromotionDetailModel;
import com.fsoft.coffeesystem.model.PromotionModel;
import com.fsoft.coffeesystem.model.StoreModel;
import com.fsoft.coffeesystem.model.WarehouseElementModel;
import com.fsoft.coffeesystem.model.WarehouseModel;

// TODO: Auto-generated Javadoc
/**
 * The Class Convert.
 */
public class Convert {

	/**
	 * Convert to address.
	 *
	 * @param listWards
	 *            the list wards
	 * @return the list
	 */
	public static List<AddressModel> convertToAddress(List<Ward> listWards) {
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
	 * Convert to desk model.
	 *
	 * @param listDesks the list desks
	 * @return the list
	 */
	public static List<DeskModel> convertToDeskModel(List<Desk> listDesks) {
		List<DeskModel> listDesk = new ArrayList<>();
		DeskModel deskModel;
		for (Desk deskEntity : listDesks) {
				deskModel = new DeskModel();
				deskModel.setDeskId(deskEntity.getId());
				deskModel.setGroupDeskId(deskEntity.getGroupDesk().getId());
				deskModel.setGroupDeskName(deskEntity.getGroupDesk().getName());
				deskModel.setQuantityOfSeats(deskEntity.getQuantityOfSeats());
				deskModel.setDeskName(deskEntity.getName());
				deskModel.setDescription(deskEntity.getDescription() == null ? "" : deskEntity.getDescription());
				listDesk.add(deskModel);
		
		}
		return listDesk;
	} 

	/**
	 * Convert to product group.
	 *
	 * @param list
	 *            the list
	 * @return the list
	 */
	public static List<ProductGroup> convertToProductGroup(List<com.fsoft.coffeesystem.entity.ProductGroup> list) {
		List<ProductGroup> result = new ArrayList<>();
		for (com.fsoft.coffeesystem.entity.ProductGroup pg : list) {
			
				result.add(new ProductGroup(pg.getId(), pg.getName()));
		}
		return result;
	}
	
	/**
	 * Convert to product group detail.
	 *
	 * @param list
	 *            the list
	 * @return the list
	 */
	public static List<ProductGroupDetail> convertToProductGroupDetail(
			List<com.fsoft.coffeesystem.entity.ProductGroup> list) {
		List<ProductGroupDetail> result = new ArrayList<>();
		for (com.fsoft.coffeesystem.entity.ProductGroup pg : list) {
			
				result.add(new ProductGroupDetail(pg.getId(), pg.getName(), pg.getDescription()));
		}
		
		return result;
	}

	/**
	 * Convert to customer.
	 *
	 * @param customer the customer
	 * @return the list
	 */
	public static List<CustomerModel> convertCustomer(List<Customer> customer) {
		List<CustomerModel> listCustomer = new ArrayList<>();
		for (Customer cust : customer) {
			CustomerModel customerModel = new CustomerModel();
			customerModel.setId(cust.getId());
			customerModel.setName(cust.getName());
			customerModel.setPhoneNumber(cust.getPhoneNumber());
			customerModel.setBirthday(cust.getBirthday());
			customerModel.setEmail(cust.getEmail());
			customerModel.setGender(cust.getGender());
			customerModel.setPoint(cust.getPoint());
			listCustomer.add(customerModel);
		}
		return listCustomer;
	}

	/**
	 * Convert to product model.
	 *
	 * @param listProduct the list product
	 * @return the list
	 */
	public static List<ProductModel> convertToProductModel(List<Product> listProduct) {
		List<ProductModel> listProductModel = new ArrayList<>();
		ProductModel product;
		for (Product productEntity : listProduct) {
			if(productEntity.getIsDelete())continue;
			product = new ProductModel();
			product.setId(productEntity.getId());
			product.setName(productEntity.getName());
			product.setProductGroupName((productEntity.getProductGroup().getName()));
			product.setProductGroupId(productEntity.getProductGroup().getId());
			product.setStatus(productEntity.isStatus());
			product.setDescription(productEntity.getDescription() == null ? "" : productEntity.getDescription());
			product.setPrice(productEntity.getPrice());
			listProductModel.add(product);
		}
		return listProductModel;
	}
	
	/**
	 * Convert warehouse.
	 *
	 * @param warehouses the warehouses
	 * @return the list
	 */
	/* 
	 * covert warehouse to WarehouseModel
	 * */
	public static List<WarehouseModel> convertWarehouse(List<Warehouse> warehouses) {
		List<WarehouseModel> listWHModel = new ArrayList<>();
		for (Warehouse wh : warehouses) {
			WarehouseModel whModel = new WarehouseModel();
			whModel.setId(wh.getId());
			whModel.setName(wh.getMaterial().getName());
			whModel.setMaterialType(wh.getMaterial().getMaterialType().getName());
			whModel.setPrice(wh.getMaterial().getPrice());
			whModel.setQuantity(wh.getQuantity());
			listWHModel.add(whModel);
		}
		return listWHModel;
	}

	/**
	 * Convert to order model.
	 *
	 * @param listOrder the list order
	 * @return the list ordermodel
	 */
	public static List<OrdersModel> convertToOrderModel(List<Orders> listOrder) {
		List<OrdersModel> list = new ArrayList<>();
		OrdersModel orderModel;
		CustomerModel customerModel;
		ProductModel productModel;
		Product product;
		OrderDetailModel orderDetailModel;
		Customer c;
		int quantity;
		int tmpQuantity;
		Set<OrderDetail> orderDetails;
		Set<OrderDetailModel> orderDetailModels;
		for (Orders item : listOrder) {
			orderModel = new OrdersModel();
			customerModel = new CustomerModel();
			orderModel.setId(item.getId());
			c = item.getCustomer();
			customerModel.setId(c.getId());
			customerModel.setName(c.getName());
			customerModel.setBirthday(c.getBirthday());
			customerModel.setEmail(c.getEmail());
			customerModel.setGender(c.getGender());
			customerModel.setPhoneNumber(c.getPhoneNumber());
			customerModel.setPoint(c.getPoint());
			orderModel.setCustomerModel(customerModel);
			orderModel.setDate(item.getDate());
			orderModel.setTotalBill(item.getTotalBill());
			orderModel.setDesk(item.getDesk().getName());
			orderDetails = item.getOrderDetails();
			quantity = 0;
			orderDetailModels = new HashSet<OrderDetailModel>(0);
			for (OrderDetail orderDetail : orderDetails) {
				orderDetailModel = new OrderDetailModel();
				tmpQuantity = orderDetail.getQuantity();
				orderDetailModel.setQuantity(tmpQuantity);
				quantity += tmpQuantity;
				productModel = new ProductModel();
				product = orderDetail.getProduct();
				productModel.setId(product.getId());
				productModel.setPrice(product.getPrice());
				productModel.setName(product.getName());
				orderDetailModel.setProductModel(productModel);
				orderDetailModels.add(orderDetailModel);
				tmpQuantity = 0;
			}
			orderModel.setQuantityProduct(quantity);
			orderModel.setOrderDetailsModel(orderDetailModels);
			list.add(orderModel);
		}
		return list;
	}
	
	/**
	 * Parses the to date.
	 *
	 * @param input the input
	 * @return the date
	 */
	/* Parse String input to Date type
	 *  return a date*/
	public static Date parseToDate(String input) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try {
			date = format.parse(input);
			return date;
		} catch (ParseException e) {
			e.printStackTrace();
			return date;
		}
	}
	
	/**
	 * Convert to promotion model.
	 *
	 * @param promotion the promotion
	 * @return the list
	 */
	/* Parse list promotion entity to list promotion model
	 * return list promotion model*/
	public static List<PromotionModel> convertToPromotionModel(List<Promotion> promotion){
		List<PromotionModel> promotionModelList = new ArrayList<>();
		
		for (Promotion prmt : promotion) {
			PromotionModel promotionModel = new PromotionModel();
			promotionModel.setId(prmt.getId());
			promotionModel.setName(prmt.getName());
			promotionModel.setStartDate(prmt.getStartDate().toString());
			promotionModel.setEndDate(prmt.getEndDate().toString());
		//	promotionModel.setStoreId(prmt.getStore().getId());
			promotionModelList.add(promotionModel);
		}
		
		return (List<PromotionModel>)promotionModelList;
		
	}
	
/**
	 * Convert to warehouse element.
	 *
	 * @param element the element
	 * @return the warehouse element model
	 */	public static WarehouseElementModel convertToWarehouseElement(Warehouse element)
	{
		
		// Ä�Æ°a cÃ¡c thÃ´ng tin cáº§n thiáº¿t vÃ o model Ä‘á»ƒ gá»­i cho client
		WarehouseElementModel warehouseElementModel = new WarehouseElementModel();
		
		warehouseElementModel.setId(element.getId());
		warehouseElementModel.setMaterialType(element.getMaterial().getMaterialType().getName());
		warehouseElementModel.setName(element.getMaterial().getName());
		warehouseElementModel.setQuantity(element.getQuantity());
		warehouseElementModel.setPrice(element.getMaterial().getPrice());
		warehouseElementModel.setDescription(element.getMaterial().getDescription());
		//warehouseElementModel.setStore(element.getStore().getName());
		
		return warehouseElementModel;
	}
	 
	/**
	 * Convert to AccountModel element.
	 *
	 * @param accounts
	 *            the element
	 * @param storeModelList
	 *            the element
	 * @return list AccountModel element model
	 */
	 public static AccountModel convertToAccountModel(Accounts accounts,List<StoreModel> storeModelList){
		 return new AccountModel(accounts.getId(),accounts.getName(),accounts.getAccountName(),accounts.getIsAdmin(),storeModelList);
	 }
	 
	 /**
 	 * Convert to store model.
 	 *
 	 * @param storeList the store list
 	 * @return the list
 	 */
 	public static List<StoreModel> convertToStoreModel(List<Store> storeList){
		 List<StoreModel> storeModelList=new ArrayList<StoreModel>();
		 StoreModel storeModel=null;
		 for (Store store : storeList) {
			 storeModel=new StoreModel(store.getId(), store.getName());
			 storeModelList.add(storeModel);
		}
		 	 
		 return storeModelList;		 
	 }

	/*
	 * convert promotion detail entity to promotion detail model
	 * 
	 * */
	public static List<PromotionDetailModel> convertToPromotionDetailModel(List<PromotionDetail> promotionDetail){
		
		List<PromotionDetailModel> promotionDetailModelList = new ArrayList<>();
		
		//put data of promotion detail get from database set to promotion detail model
		for (PromotionDetail proDetail : promotionDetail) {
			
			PromotionDetailModel promotionDetailModel = new PromotionDetailModel();
			promotionDetailModel.setId(proDetail.getId());
			promotionDetailModel.setProductId(proDetail.getProduct().getId());
			promotionDetailModel.setProductName(proDetail.getProduct().getName());
			promotionDetailModel.setDiscount(proDetail.getDiscount());
			
			promotionDetailModelList.add(promotionDetailModel);
		}

		return promotionDetailModelList;
	}
}
