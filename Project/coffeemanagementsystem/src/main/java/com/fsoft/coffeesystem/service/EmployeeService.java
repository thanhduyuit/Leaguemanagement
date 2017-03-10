package com.fsoft.coffeesystem.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.EmployeeDao;
import com.fsoft.coffeesystem.dao.WardDao;
import com.fsoft.coffeesystem.entity.City;
import com.fsoft.coffeesystem.entity.District;
import com.fsoft.coffeesystem.entity.Employee;
import com.fsoft.coffeesystem.entity.Ward;
import com.fsoft.coffeesystem.model.EmployeeModel;
import com.fsoft.coffeesystem.model.SearchEmployeeModel;
import com.fsoft.coffeesystem.model.UpdateEmployeeModel;
import com.fsoft.coffeesystem.utilites.Convert;
import com.fsoft.coffeesystem.utilites.ValidateEmployee;

@Service("employeeService")
public class EmployeeService {

	@Autowired
	private EmployeeDao employeeDao;

	@Autowired
	private WardDao wardDao;

	public void addEmployees(EmployeeModel employeeModel) {
		Employee emp = new Employee();
		emp.setName(employeeModel.getName());
		emp.setAddress(employeeModel.getAddress());
		emp.setBirthday(employeeModel.getBirthday());
		emp.setDescription(employeeModel.getDescription());
		emp.setEndDate(employeeModel.getEndDate());
		emp.setGender(employeeModel.isGender());
		emp.setIdCard(employeeModel.getIdCard());
		emp.setPhone(employeeModel.getPhone());
		emp.setPosition(employeeModel.getPosition());
		emp.setSalary(employeeModel.getSalary());
		emp.setStartDate(employeeModel.getStartDate());
		Ward wardId = wardDao.findOne(employeeModel.getWardId());
		emp.setWard(wardId);
		emp.setIsDetele(false);
		employeeDao.save(emp);
	}

	public boolean updateEmployees(UpdateEmployeeModel updateEmployeeModel) {
		Employee emp = employeeDao.findOne(updateEmployeeModel.getId());
		if (emp == null)
			return false;
		Date birthday = Convert.parseToDate(updateEmployeeModel.getBirthday());
		Date startDate = Convert.parseToDate(updateEmployeeModel.getStartDate());
		Date endDate = Convert.parseToDate(updateEmployeeModel.getEndDate());
		emp.setName(updateEmployeeModel.getName());
		emp.setAddress(updateEmployeeModel.getAddress());
		emp.setBirthday(birthday);
		emp.setDescription(updateEmployeeModel.getDescription());
		emp.setEndDate(endDate);
		emp.setGender(updateEmployeeModel.isGender());
		emp.setIdCard(updateEmployeeModel.getIdCard());
		emp.setPhone(updateEmployeeModel.getPhone());
		emp.setPosition(updateEmployeeModel.getPosition());
		emp.setSalary(updateEmployeeModel.getSalary());
		emp.setStartDate(startDate);
		Ward wardId = wardDao.findOne(updateEmployeeModel.getWardId());
		emp.setWard(wardId);
		employeeDao.save(emp);
		return true;
	}

	public UpdateEmployeeModel getUpdateEmployeeById(Integer id) {
		UpdateEmployeeModel upEM = new UpdateEmployeeModel();
		Employee emp = employeeDao.findOne(id);
		upEM.setId(emp.getId());
		upEM.setAddress(emp.getAddress());
		upEM.setBirthday(emp.getBirthday().toString());
		upEM.setDescription(emp.getDescription());
		Ward w = emp.getWard();
		upEM.setWardId(w.getId());
		District dis = w.getDistrict();
		upEM.setDistrictId(dis.getId());
		City city = dis.getCity();
		upEM.setCityId(city.getId());
		String endDate = (emp.getEndDate() == null) ? "" : emp.getEndDate().toString();
		upEM.setEndDate(endDate);
		upEM.setGender(emp.isGender());
		upEM.setIdCard(emp.getIdCard());
		upEM.setName(emp.getName());
		upEM.setPhone(emp.getPhone());
		upEM.setPosition(emp.getPosition());
		upEM.setSalary(emp.getSalary());
		upEM.setStartDate(emp.getStartDate().toString());
		return upEM;
	}

	public List<EmployeeModel> searchEmployee(SearchEmployeeModel employeeModel) throws Exception {
		// list EmployeeModel result.
		List<EmployeeModel> listEmployeeModel = new ArrayList<EmployeeModel>();

		// declare search parameters.
		String name = null, address = null, position = null, idCard = null, phone = null;
		Integer minSalary = null, maxSalary = null, ward = null, district = null, city = null, birthday = null,
				birthmonth = null, birthyear = null;
		Boolean gender = null;

		// put value to search parameters from employeeModel.
		name = employeeModel.getName();
		address = employeeModel.getAddress();
		position = employeeModel.getPosition();
		idCard = employeeModel.getIdCard();
		phone = employeeModel.getPhone();
		if (!employeeModel.getMinSalary().isEmpty()) {
			minSalary = Integer.parseInt(employeeModel.getMinSalary());
		}
		if (!employeeModel.getMaxSalary().isEmpty()) {
			maxSalary = Integer.parseInt(employeeModel.getMaxSalary());
		}
		if (!employeeModel.getWard().isEmpty()) {
			ward = Integer.parseInt(employeeModel.getWard());
		}
		if (!employeeModel.getDistrict().isEmpty()) {
			district = Integer.parseInt(employeeModel.getDistrict());
		}
		if (!employeeModel.getCity().isEmpty()) {
			city = Integer.parseInt(employeeModel.getCity());
		}
		if (!employeeModel.getGender().isEmpty()) {
			gender = new Boolean(employeeModel.getGender());
		}
		if (!employeeModel.getBirthday().isEmpty()) {
			birthday = Integer.parseInt(employeeModel.getBirthday());
		}
		if (!employeeModel.getBirthmonth().isEmpty()) {
			birthmonth = Integer.parseInt(employeeModel.getBirthmonth());
		}
		if (!employeeModel.getBirthyear().isEmpty()) {
			birthyear = Integer.parseInt(employeeModel.getBirthyear());
		}

		// use employee dao to search employee from search parameter
		List<Employee> listEmployee = employeeDao.searchEmployee(name, address, idCard, phone, position, minSalary,
				maxSalary, city, district, ward, gender, birthday, birthmonth, birthyear);

		// convert employees to employee model
		listEmployeeModel = convertToEmployeeModel(listEmployee, employeeModel.getStartDate(),
				employeeModel.getEndDate());

		// return result
		return listEmployeeModel;
	}

	public List<EmployeeModel> convertToEmployeeModel(List<Employee> employee, String startDate, String endDate)
			throws Exception {
		List<EmployeeModel> listEmployeeModel = new ArrayList<>();
		EmployeeModel model;
		for (Employee emp : employee) {
			if (ValidateEmployee.checkStartEndDate(emp.getStartDate(), emp.getEndDate(), startDate, endDate)) {
				// create employee model from employee entity
				model = new EmployeeModel();
				model.setId(emp.getId());
				model.setName(emp.getName());
				model.setPhone(emp.getPhone());
				model.setIdCard(emp.getIdCard());
				model.setSalary(emp.getSalary());
				model.setPosition(emp.getPosition());
				model.setAddress(emp.getAddress());
				model.setDescription(emp.getDescription());
				model.setGender(emp.isGender());
				model.setStartDate(emp.getStartDate());
				model.setEndDate(emp.getEndDate());
				model.setBirthday(emp.getBirthday());

				// add to list
				listEmployeeModel.add(model);
			}
		}
		return listEmployeeModel;
	}

	public boolean deleteEmployee(int id) {
		try {
			Employee e = employeeDao.findOne(id);
			e.setIsDetele(true);
			employeeDao.save(e);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
