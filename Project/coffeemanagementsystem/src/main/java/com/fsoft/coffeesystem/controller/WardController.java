package com.fsoft.coffeesystem.controller;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.fsoft.coffeesystem.entity.Ward;
import com.fsoft.coffeesystem.model.AddressModel;
import com.fsoft.coffeesystem.model.WardModel;
import com.fsoft.coffeesystem.service.WardService;

// TODO: Auto-generated Javadoc
/**
 * The Class WardController.
 */
@RestController
@RequestMapping("/")
public class WardController {
	
	/** The ward service. */
	@Autowired
	WardService wardService;
	
	/** The Constant log. */
	static final Logger log = Logger.getLogger(WardController.class.getName());

	/**
	 * Inits the form.
	 *
	 * @return the model and view
	 */
	@RequestMapping(value = "/wards", method = RequestMethod.GET)
	public ModelAndView initForm() {
		return new ModelAndView("listwards");
	}
	
	/**
	 * Search.
	 *
	 * @param ward the ward
	 * @return the list
	 */
	@RequestMapping(value = "/searchwards", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<AddressModel> search(@RequestBody Ward ward) {
		List<AddressModel> listAddress= wardService.searchWards(ward);
		return listAddress;
	}
	
	/**
	 * Search ward by district id.
	 *
	 * @param id the id
	 * @return the list
	 */
	/*
	 * search a list of the ward by the district code 
	 * @param id of districts
	 * @return list
	 */
	@RequestMapping(value="/searchWardByDistrictId", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<WardModel> searchWardByDistrictId(@RequestParam("id") int id){
		return wardService.searchWardByDistrictId(id);
	}
}
