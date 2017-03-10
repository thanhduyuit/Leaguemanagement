package com.fsoft.coffeesystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.MaterialDao;
import com.fsoft.coffeesystem.dao.MaterialTypeDao;
import com.fsoft.coffeesystem.dao.WareHouseDao;
import com.fsoft.coffeesystem.entity.Material;
import com.fsoft.coffeesystem.entity.MaterialType;
import com.fsoft.coffeesystem.entity.Warehouse;
import com.fsoft.coffeesystem.model.SearchWarehouseModel;
import com.fsoft.coffeesystem.model.WarehouseElementModel;
import com.fsoft.coffeesystem.model.WarehouseModel;
import com.fsoft.coffeesystem.utilites.Convert;

// TODO: Auto-generated Javadoc
/**
 * The Class WarehouseService.
 */
@Service("warehouseService")
public class WarehouseService {

	/** The wa dao. */
	@Autowired
	private WareHouseDao waDao;
	
	/** The mtt dao. */
	@Autowired
	private MaterialTypeDao mttDao;
	
	/** The material dao. */
	@Autowired
	private MaterialDao materialDao;

	/**
	 * define field in Warehouse model which you want to search.
	 *
	 * @param warehouseModel the warehouse model
	 * @return the list
	 */
	public List<WarehouseModel> searchWarehouse(SearchWarehouseModel searchWhModel) {
		String material = searchWhModel.getName() != "" ? searchWhModel.getName() : "";
		String materialType = searchWhModel.getMaterialType() != "" ? searchWhModel.getMaterialType() : "";
		int priceFrom =Integer.parseInt(searchWhModel.getPriceFrom()!= "" ? searchWhModel.getPriceFrom().replaceAll(",", "") : "0" );
		int priceTo =Integer.parseInt(searchWhModel.getPriceTo()!= "" ? searchWhModel.getPriceTo().replaceAll(",", "") : "0" );
		List<Warehouse> listWH = waDao.searchWareHouse(material, materialType,priceFrom,priceTo);
		List<WarehouseModel> listWHModel = Convert.convertWarehouse(listWH);
		return listWHModel;
	}

	/**
	 * Search warehouse by ID.
	 *
	 * @param item the item
	 * @return the warehouse element model
	 */
	// Truy vấn một mặt hàng bất kỳ, thông qua ID
	public WarehouseElementModel searchWarehouseByID(WarehouseElementModel item) {
		// Truy vấn trả về một đối tượng có id = item.getId()
		Warehouse warehouse = waDao.findOne(item.getId());

		// Trả về một đối tượng Model mang những thông tin cần thiết cho
		// Controller
		return Convert.convertToWarehouseElement(warehouse);
	}

	/**
	 * Delete warehouse.
	 *
	 * @param waModel the wa model
	 * @return true, if successful
	 */
	public boolean deleteWarehouse(WarehouseModel waModel) {
		Warehouse wahouse = waDao.findOne(waModel.getId());
		wahouse.setIsDelete(true);

		try {
			waDao.save(wahouse);
		} catch (Exception e) {
			return false;
		}

		return true;
	}

	/**
	 * Adds the warehouse.
	 *
	 * @param warehouseModel
	 *            the warehouse model
	 * @return true, if successful
	 */
	public boolean addWarehouse(WarehouseModel warehouseModel) {
		try {
			Material s = materialDao.findMaterial(warehouseModel.getName());
			if (s == null) {
				s = new Material();
				s.setName(warehouseModel.getName());
				s.setPrice(warehouseModel.getPrice());
				MaterialType m = mttDao.findOne(Integer.parseInt(warehouseModel.getMaterialType()));
				s.setMaterialType(m);
				s.setIsDelete(false);
				s.setDescription(warehouseModel.getDescription());
				materialDao.save(s);
			} else {
				s.setPrice(warehouseModel.getPrice());
				s.setDescription(warehouseModel.getDescription());
				materialDao.save(s);
			}
			Warehouse w = waDao.findMaterialInWarehouse(s.getId());
			if (w == null) {
				w = new Warehouse();
				w.setMaterial(s);
				w.setQuantity(warehouseModel.getQuantity());
				w.setIsDelete(false);
				waDao.save(w);
			} else {
				w.setQuantity(warehouseModel.getQuantity());
				w.setIsDelete(false);
				waDao.save(w);
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	/**
	 * Update warehouse.
	 *
	 * @param warehouseModel the warehouse model
	 * @return true, if successful
	 */
	public boolean updateWarehouse(WarehouseModel warehouseModel) {
		Warehouse wahouse = waDao.findOne(warehouseModel.getId());
		System.out.println(warehouseModel.getMaterialType());
		MaterialType mtt = mttDao.findOne(Integer.parseInt(warehouseModel.getMaterialType()));
		Material material = wahouse.getMaterial();
		material.setName(warehouseModel.getName());
		material.setPrice(warehouseModel.getPrice());
		material.setMaterialType(mtt);
		wahouse.setQuantity(warehouseModel.getQuantity());

		try {
			materialDao.save(material);
			waDao.save(wahouse);
		} catch (Exception e) {
			return false;
		}

		return true;
	}
}
