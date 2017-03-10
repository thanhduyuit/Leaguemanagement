/*
 * Package name: com.fsoft.coffeesystem.controller
 * Project name: coffeemanagementsystem
 * File: DeskController.java
 * Author: TamNM4
 * Date created: Jan 18, 2017
 */
package com.fsoft.coffeesystem.controller;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.coffeesystem.model.DeskModel;
import com.fsoft.coffeesystem.model.SearchDeskModel;
import com.fsoft.coffeesystem.service.DeskService;

// TODO: Auto-generated Javadoc
/**
 * The Class DeskController.
 */
@RestController
@RequestMapping("/desk")
public class DeskController {
	
	/** The desk service. */
	@Autowired
	DeskService deskService;
	
	
	/** The Constant log. */
	static final Logger log = Logger.getLogger(DeskController.class.getName());

	/**
	 * Inits the form.
	 *
	 * @return the model and view
	 */
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ModelAndView initForm() {
		return new ModelAndView("listdesks");
	}

	/**
	 * Search.
	 *
	 * @param id the id
	 * @param desk the desk
	 * @return the list
	 */
	@RequestMapping(value = "/searchdesks/{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<DeskModel> search(@PathVariable int id, @RequestBody SearchDeskModel desk) {
		log.info(desk.getDeskId()+ "," + desk.getDeskName() + "," + desk.getGroupDeskName() + "," + desk.getQuantityOfSeats());
	
		List<DeskModel> listDesks= deskService.searchDesks(desk,id);
		return listDesks;
	}
	
	/**
	 * Adds the desk.
	 *
	 * @param deskModel function call function addDesk() at deskServer 
	 * @return view listDesk
	 */
	
	@RequestMapping(value="/addDesk",method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean addDesk(@RequestBody DeskModel deskModel){		
		deskService.addDesk(deskModel);
		return true;		
	}
	
	
	/**
	 * Gets the all desk name.
	 *
	 * @return the all desk name
	 */
	@RequestMapping(value = "/getalldeskname", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<String> getAllDeskName() {
		return deskService.findAllDesk();
	}
	
	/**
	 * Delete product.
	 *
	 * @param id the id
	 * @return true, if successful
	 */
	@RequestMapping(value = "/deleteDesk", method = RequestMethod.GET)
	public boolean deleteProduct(@RequestParam int id) {
		try {
			return deskService.deleteDesk(id);
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(), e);
			return false;
		}
	}
	
	/**
	 * Show desk info by id.
	 *
	 * @param id the id
	 * @return the desk model
	 */
	@RequestMapping(value = "/showDeskInfo/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public DeskModel showDeskInfoById(@PathVariable int id) {
		DeskModel deskModel = deskService.searchDeskModelById(id);
		return deskModel;
	}
	
	/**
	 * Save update desk.
	 *
	 * @param deskModel the desk model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/saveUpdateDesk", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public boolean saveUpdateDesk(@RequestBody DeskModel deskModel){
		deskService.saveUpdateDesk(deskModel);
		return true;
	}
	
	
	/**
	 * Search desk by name.
	 *
	 * @param deskModel the desk model
	 * @return true, if successful
	 */
	@RequestMapping(value="searchDeskByName", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public boolean searchDeskByName(@RequestBody DeskModel deskModel){
		return deskService.searchDeskByNam(deskModel.getDeskName());
	}
}
