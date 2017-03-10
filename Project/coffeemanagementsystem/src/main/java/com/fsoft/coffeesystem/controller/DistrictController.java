package com.fsoft.coffeesystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fsoft.coffeesystem.entity.District;
import com.fsoft.coffeesystem.model.DistrictModel;
import com.fsoft.coffeesystem.model.WardModel;
import com.fsoft.coffeesystem.service.DistrictService;

// TODO: Auto-generated Javadoc
/**
 * The Class DistrictController.
 */
@RestController
@RequestMapping("/")
public class DistrictController {
	
	/** The district service. */
	@Autowired
	private DistrictService districtService;
	
	/**
	 * Gets the list district.
	 *
	 * @return the list district
	 */
	@RequestMapping(value = "/getListDistrict", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<DistrictModel> getListDistrict(){
		return districtService.getListDistrict();
	}
	
	/**
	 * Gets the list ward by id.
	 *
	 * @param district the district
	 * @return the list ward by id
	 */
	@RequestMapping(value = "/getListWardById", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<WardModel> getListWardById(@RequestBody District district){
		return districtService.getListWardById(district);
	}

}
