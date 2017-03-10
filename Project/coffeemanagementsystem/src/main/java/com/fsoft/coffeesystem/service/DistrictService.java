package com.fsoft.coffeesystem.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.DistrictDao;
import com.fsoft.coffeesystem.entity.District;
import com.fsoft.coffeesystem.entity.Ward;
import com.fsoft.coffeesystem.model.DistrictModel;
import com.fsoft.coffeesystem.model.WardModel;

@Service("districtService")
public class DistrictService {

	@Autowired
	private DistrictDao districtDao;

	/*
	 * get a list of districts 
	 * @return list
	 */
	public List<DistrictModel> getListDistrict(){		List<District> list = districtDao.findAll();
		List<DistrictModel> getList = new ArrayList<>();
		for (District district : list) {
			DistrictModel districtModel = new DistrictModel();
			districtModel.setId(district.getId());
			districtModel.setName(district.getName());
			getList.add(districtModel);
		}
		return getList;
	}

	public List<WardModel> getListWardById(District district) {
		District districtResult = districtDao.findOne(district.getId());

		Set<Ward> list = districtResult.getWards();
		List<WardModel> getList = new ArrayList<>();
		for (Ward ward : list) {
			WardModel wardModel = new WardModel();
			wardModel.setId(ward.getId());
			wardModel.setName(ward.getName());
			getList.add(wardModel);
		}
		return getList;
	}
}
