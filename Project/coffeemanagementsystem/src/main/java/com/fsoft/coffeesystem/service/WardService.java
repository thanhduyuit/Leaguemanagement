package com.fsoft.coffeesystem.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.WardDao;
import com.fsoft.coffeesystem.entity.Ward;
import com.fsoft.coffeesystem.model.AddressModel;
import com.fsoft.coffeesystem.model.WardModel;
import com.fsoft.coffeesystem.utilites.Convert;

// TODO: Auto-generated Javadoc
/**
 * The Class WardService.
 */
@Service("wardService")
public class WardService {
	
	/** The ward dao. */
	@Autowired
	private WardDao wardDao;
	
	/**
	 * Search wards.
	 *
	 * @param ward the ward
	 * @return the list
	 */
	public List<AddressModel> searchWards(Ward ward){
		List<Ward> listWards=wardDao.searchWards(ward.getName()==null?"":ward.getName());
		List<AddressModel> listAddress= Convert.convertToAddress(listWards);
		return listAddress;
	}
	
	/*
	 * search a list of the ward by the district code 
	 * @param id of districts
	 * @return list
	 */
	public List<WardModel> searchWardByDistrictId(Integer id){
		List<Ward> list = wardDao.findAll();
		List<WardModel> getList = new ArrayList<>();
		for (Ward ward : list) {
			if(ward.getDistrict().getId()==id){
				WardModel w = new WardModel();
				w.setId(ward.getId());
				w.setName(ward.getName());
				getList.add(w);
			}
		}
		return getList;
	}

	public List<WardModel> searchDistrictByCityId(int id) {
		List<Ward> list = wardDao.findAll();
		List<WardModel> getList = new ArrayList<>();
		for (Ward ward : list) {
			if(ward.getDistrict().getId()==id){
				WardModel w = new WardModel();
				w.setId(ward.getId());
				w.setName(ward.getName());
				getList.add(w);
			}
		}
		return getList;
	}

}
