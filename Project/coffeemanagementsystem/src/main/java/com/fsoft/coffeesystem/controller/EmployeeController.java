package com.fsoft.coffeesystem.controller;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.coffeesystem.entity.Employee;
import com.fsoft.coffeesystem.model.EmployeeModel;
import com.fsoft.coffeesystem.model.SearchEmployeeModel;
import com.fsoft.coffeesystem.model.UpdateEmployeeModel;
import com.fsoft.coffeesystem.service.EmployeeService;

// TODO: Auto-generated Javadoc
/**
 * The Class EmployeeController.
 */
@RestController
@RequestMapping("/")
public class EmployeeController {
	
	/** The Constant log. */
	static final Logger log = Logger.getLogger(EmployeeController.class.getName());
	
	/** The employee service. */
	@Autowired
	private EmployeeService employeeService;
	
	/**
	 * Home add employee.
	 *
	 * @return the model and view
	 */
	@RequestMapping(value="/homeAddEmployees")
	public ModelAndView homeAddEmployee() {
		return new ModelAndView("addEmployees");
	}

	/**
	 * Adds the employees.
	 *
	 * @param employeeModel the employee model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/addEmployees", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean addEmployees(@RequestBody EmployeeModel employeeModel){
		try {
			employeeService.addEmployees(employeeModel);
			return true;
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(), e);
			return false;
		}
	}
	
	/**
	 * Update employees.
	 *
	 * @param employeeModel the employee model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/updateEmployees", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean updateEmployees(@RequestBody UpdateEmployeeModel updateEmployeeModel){
		try {
			return employeeService.updateEmployees(updateEmployeeModel);
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(), e);
			return false;
		}
	}
	
	/**
	 * get employees.
	 *
	 * @param integer id
	 * @return UpdateEmployeeModel
	 */
	@RequestMapping(value = "/getEmployees", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public UpdateEmployeeModel getEmployees(@RequestBody Employee employee){
		UpdateEmployeeModel emp = employeeService.getUpdateEmployeeById(employee.getId());
		return emp;
	}
	
	/**
	 * Inits the employee.
	 *
	 * @return the model and view
	 */
	@RequestMapping(value="/employee")
	public ModelAndView initEmployee() {
		return new ModelAndView("listemployee");
	}
	
	/**
	 * Search employee.
	 *
	 * @param employeeModel the employee model
	 * @return the list
	 */
	@RequestMapping(value="/searchemployee")
	public List<EmployeeModel> searchEmployee(@RequestBody SearchEmployeeModel employeeModel) {
		List<EmployeeModel> employeeModels = null;
		try {
			employeeModels = employeeService.searchEmployee(employeeModel);
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(),e);
		}
		return employeeModels;
	}

	/**
	 * Delete employee.
	 *
	 * @param id the id
	 * @return true, if successful
	 */
	@RequestMapping(value = "/deleteEmployee", method = RequestMethod.GET)
	public boolean deleteEmployee(@RequestParam int id) {
		try {
			return employeeService.deleteEmployee(id);
		} catch (Exception e) {
			log.log(Level.INFO, e.getMessage(), e);
			return false;
		}
	}
}
