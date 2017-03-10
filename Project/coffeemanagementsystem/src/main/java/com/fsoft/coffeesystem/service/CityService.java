package com.fsoft.coffeesystem.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.CityDao;
import com.fsoft.coffeesystem.entity.City;
import com.fsoft.coffeesystem.entity.District;
import com.fsoft.coffeesystem.model.CityModel;
import com.fsoft.coffeesystem.model.DistrictModel;

@Service("cityService")
public class CityService {

	@Autowired
	private CityDao cityDao;

	public List<CityModel> getListCity() {
		List<City> list = cityDao.findAll();
		List<CityModel> getList = new ArrayList<>();
		for (City city : list) {
			CityModel cityModel = new CityModel();
			cityModel.setId(city.getId());
			cityModel.setName(city.getName());
			getList.add(cityModel);
		}
		return getList;
	}

	public List<DistrictModel> getListDistrictById(City city) {
		City cityResult= cityDao.findOne(city.getId());
		
		Set<District> list =  cityResult.getDistricts();
		List<DistrictModel> getList = new ArrayList<>();
		for (District district : list) {
			DistrictModel districtModel = new DistrictModel();
			districtModel.setId(district.getId());
			districtModel.setName(district.getName());
			getList.add(districtModel);
		}
		return getList;
	}

}
