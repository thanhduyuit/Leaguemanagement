/*
 * Package name: com.fsoft.coffeesystem.service
 * Project name: coffeemanagementsystem
 * File: DeskService.java
 * Author: TamNM4
 * Date created: Jan 18, 2017
 */
package com.fsoft.coffeesystem.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.DeskDao;
import com.fsoft.coffeesystem.dao.GroupDeskDao;
import com.fsoft.coffeesystem.dao.StoreDao;
import com.fsoft.coffeesystem.entity.Desk;
import com.fsoft.coffeesystem.entity.GroupDesk;
import com.fsoft.coffeesystem.entity.Store;
import com.fsoft.coffeesystem.model.DeskModel;
import com.fsoft.coffeesystem.model.SearchDeskModel;
import com.fsoft.coffeesystem.utilites.Convert;

// TODO: Auto-generated Javadoc
/**
 * The Class DeskService.
 */
@Service("deskService")
public class DeskService {
	/** The desk dao. */
	@Autowired
	private DeskDao deskDao;

	/** The group desk dao. */
	@Autowired
	private GroupDeskDao groupDeskDao;
	
	@Autowired 
	private StoreDao storeDao;
	
	/**
	 * Search desks.
	 *
	 * @param desk            the desk
	 * @param storeId the store id
	 * @return the list
	 */

	public List<DeskModel> searchDesks(SearchDeskModel desk, int storeId) {
		List<Desk> listDesks = new ArrayList<Desk>();
		listDesks = deskDao.searchDesks(storeId,
						Integer.parseInt(desk.getDeskId().isEmpty() ? "-1" : desk.getDeskId()),
								desk.getDeskName().isEmpty() ? "" : desk.getDeskName(),
						Integer.parseInt(desk.getGroupDeskName().equals("rong") ? "-1"
								: desk.getGroupDeskName()),
						Integer.parseInt(desk.getQuantityOfSeats().isEmpty() ? "-1"
								: desk.getQuantityOfSeats()
								));

		List<DeskModel> list = Convert.convertToDeskModel(listDesks);
		return list;
	}

	/**
	 * Adds the desk.
	 *
	 * @param deskModel
	 *            the desk model
	 * @return true if add ok return true
	 */
	public boolean addDesk(DeskModel deskModel) {
		try {
			GroupDesk groupDesk = groupDeskDao.findOne(deskModel.getGroupDeskId());
			Store store = storeDao.findOne(deskModel.getStoreId());
			Desk desk = new Desk();
			desk.setGroupDesk(groupDesk);
			desk.setName(deskModel.getDeskName());
			desk.setQuantityOfSeats(deskModel.getQuantityOfSeats());
			desk.setDescription(deskModel.getDescription());
			desk.setStore(store);
			desk.setIsDelete(false);
			deskDao.save(desk);
			return true;	
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	/**
	 * Search desk model by id.
	 *
	 * @param id the id
	 * @return the desk model
	 */
	public DeskModel searchDeskModelById(int id) {
		DeskModel deskModel = null;
		try {
			Desk desk = deskDao.findOne(id);
			deskModel = new DeskModel(id, desk.getName(), desk.getGroupDesk().getName(),
					desk.getGroupDesk().getId(), desk.getQuantityOfSeats(), desk.getDescription());
			return deskModel;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deskModel;
	}

	/**
	 * Save update desk.
	 *
	 * @param deskModel the desk model
	 * @return true, if successful
	 */
	public boolean saveUpdateDesk(DeskModel deskModel) {
		try {
			GroupDesk groupDesk = groupDeskDao.findOne(deskModel.getGroupDeskId());
			Desk desk = new Desk();
			Store store = storeDao.findOne(deskModel.getStoreId());
			desk.setId(deskModel.getDeskId());
			desk.setGroupDesk(groupDesk);
			desk.setName(deskModel.getDeskName());
			desk.setQuantityOfSeats(deskModel.getQuantityOfSeats());
			desk.setDescription(deskModel.getDescription());
			desk.setStore(store);
			desk.setIsDelete(false);

			deskDao.save(desk);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	/**
	 * Find all desk.
	 *
	 * @return the list
	 */
	public List<String> findAllDesk() {
		List<Desk> groupDesks = deskDao.findAll();
		List<String> listDeskName = new ArrayList<>();

		for (Desk desk : groupDesks) {
			String name = desk.getName();
			listDeskName.add(name);
		}
		return listDeskName;
	}

	/**
	 * Delete desk.
	 *
	 * @param id
	 *            the id
	 * @return true, if successful
	 */
	public boolean deleteDesk(int id) {
		try {
			Desk d = deskDao.findOne(id);
			d.setIsDelete(true);
			deskDao.save(d);
			return true;
		} catch (Exception e) {
			return false;
		}
	}


	/**
	 * Search desk by nam.
	 *
	 * @param name the name
	 * @return true, if successful
	 */
	public boolean searchDeskByNam(String name) {
		try {
			List<Desk> listDesk = deskDao.searchDeskByName(name);
			if(listDesk.size()==0)
				return false;
			return true;

		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
}
