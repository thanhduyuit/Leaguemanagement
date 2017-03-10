package com.fsoft.coffeesystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fsoft.coffeesystem.entity.City;
import com.fsoft.coffeesystem.model.CityModel;
import com.fsoft.coffeesystem.model.DistrictModel;
import com.fsoft.coffeesystem.service.CityService;

// TODO: Auto-generated Javadoc
/**
 * The Class CityController.
 */
@RestController
@RequestMapping("/city")
public class CityController {
	
	/** The city service. */
	@Autowired
	private CityService cityService;
	
	/**
	 * Gets the list city.
	 *
	 * @return the list city
	 */
	@RequestMapping(value = "/getListCity", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<CityModel> getListCity(){
		return cityService.getListCity();
	}
	
	/**
	 * Gets the list district by id.
	 *
	 * @param city the city
	 * @return the list district by id
	 */
	@RequestMapping(value = "/getListDistrictById", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<DistrictModel> getListDistrictById(@RequestBody City city){
		return cityService.getListDistrictById(city);
	}

}
