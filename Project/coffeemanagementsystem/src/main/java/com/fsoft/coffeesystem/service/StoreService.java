package com.fsoft.coffeesystem.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.StoreDao;
import com.fsoft.coffeesystem.entity.Store;
import com.fsoft.coffeesystem.model.AccountModel;
import com.fsoft.coffeesystem.model.StoreModel;

@Service("storeService")
public class StoreService {
	@Autowired
	StoreDao storeDao;

	public List<Store> getStoreByAccountID(int id) {
		return storeDao.getStoreByAccountID(id);
	}
	public List<StoreModel> getStoreByAccountName(AccountModel accountmodel) {
		List<Store> storeList= storeDao.getStoreByAccountName(accountmodel.getAccountName());
		List<StoreModel> storeModelList= new ArrayList<StoreModel>();
		StoreModel model = new StoreModel();
			for( int i = 0; i<storeList.size(); i++){
				model.setId(storeList.get(i).getId());
				model.setName(storeList.get(i).getName());
				model.setDiscription(storeList.get(i).getDescription());
				storeModelList.add(model);
			}
		if(storeModelList != null) return storeModelList;
		else return null;
	}
}

	