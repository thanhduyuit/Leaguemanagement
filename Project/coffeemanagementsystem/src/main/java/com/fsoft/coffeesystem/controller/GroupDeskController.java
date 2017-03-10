/*
 * Jan 18, 2017
 * @author NhanNN
 */
package com.fsoft.coffeesystem.controller;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.fsoft.coffeesystem.model.GroupDeskModel;
import com.fsoft.coffeesystem.service.GroupDeskService;
// TODO: Auto-generated Javadoc
/**
 * The Class GroupDeskController.
 */
@RestController
@RequestMapping("/")
public class GroupDeskController {
	
	/** The Constant log. */
	static final Logger log = Logger.getLogger(ProductController.class.getName());
	
	/** The group desk service. */
	@Autowired
	GroupDeskService groupDeskService;
	
	/**
	 * Inits the form.
	 *
	 * @return the model and view
	 */
	@RequestMapping(value = "/listgroupdesk", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ModelAndView initForm() {
		
		ModelAndView modelAndView = new ModelAndView("listgroupdesks");
		//modelAndView.addObject("data",groupDeskService.listGroupDesks());
		return modelAndView;
	}
	
	/**
	 * Gets the list.
	 *
	 * @return the list
	 */
	@RequestMapping(value = "/getlistgroupdesk", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<GroupDeskModel> getList() {
		return groupDeskService.listGroupDesks();
	}
	
	/**
	 * Adds the group desk.
	 *
	 * @param groupDeskModel the group desk model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/addgroupdesk", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public int addGroupDesk(@RequestBody GroupDeskModel groupDeskModel) {
		int id = groupDeskService.isIdGroupName(groupDeskModel);
		if (id!=0){
			return id;
		}
		try { 
			groupDeskService.addGroupDesk(groupDeskModel);
			return 0;
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(), e);
			return 0;
		}
	}
	
	/**
	 * Delete group desk.
	 *
	 * @param groupDeskModel the group desk model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/deletegroupdesk", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean deleteGroupDesk(@RequestBody GroupDeskModel groupDeskModel) {
		try { 
			groupDeskService.delete(groupDeskModel);
			return true;
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(), e);
			return false;
		}
	}
	
	/**
	 * Update group desk.
	 *
	 * @param groupDeskModel the group desk model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/updategroupdesk", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean updateGroupDesk(@RequestBody GroupDeskModel groupDeskModel) {
		try { 
			groupDeskService.update(groupDeskModel);;
			return true;
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(), e);
			return false;
		}
	}
}
