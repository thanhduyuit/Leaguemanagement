package com.fsoft.coffeesystem.utilites;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.fsoft.coffeesystem.entity.Employee;
import com.fsoft.coffeesystem.model.EmployeeModel;

// TODO: Auto-generated Javadoc
/**
 * The Class ValidateEmployee.
 */
public class ValidateEmployee {

	/** The formatter. */
	private static SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

	/**
	 * Check start end date.
	 *
	 * @param startDate
	 *            the start date
	 * @param endDate
	 *            the end date
	 * @param startDate2
	 *            the start date 2
	 * @param endDate2
	 *            the end date 2
	 * @return true, if successful
	 * @throws Exception
	 *             the exception
	 */
	public static boolean checkStartEndDate(Date startDate, Date endDate, String startDate2, String endDate2)
			throws Exception {
		boolean startDateFlag = false, endDateFlag = false;

		if (startDate2.isEmpty()) {
			startDateFlag = true;
		} else {
			if (startDate != null && startDate.after(formatter.parse(startDate2))) {
				startDateFlag = true;
			}
			if (endDate != null && endDate.after(formatter.parse(startDate2))) {
				startDateFlag = true;
			}
		}
		if (endDate2.isEmpty()) {
			endDateFlag = true;
		} else {
			if (startDate != null && startDate.before(formatter.parse(endDate2))) {
				endDateFlag = true;
			}
			if (endDate != null && endDate.before(formatter.parse(endDate2))) {
				endDateFlag = true;
			}
		}
		if (!startDate2.isEmpty() && !endDate2.isEmpty()) {
			if ((startDate != null && startDate.before(formatter.parse(endDate2))
					&& startDate.after(formatter.parse(startDate2)))
					|| (endDate != null && endDate.before(formatter.parse(endDate2))
							&& endDate.after(formatter.parse(startDate2)))) {
				startDateFlag = true;
				endDateFlag = true;
			} else {
				endDateFlag = false;
				startDateFlag = false;
			}
		}
		return startDateFlag && endDateFlag;
	}

	/**
	 * Check birthday.
	 *
	 * @param birthday
	 *            the birthday
	 * @param day
	 *            the day
	 * @param month
	 *            the month
	 * @param year
	 *            the year
	 * @return true, if successful
	 */
	@SuppressWarnings("deprecation")
	public static boolean checkBirthday(Date birthday, String day, String month, String year) {
		boolean dayFlag, yearFlag, monthFlag;
		if (year.equalsIgnoreCase("rong")) {
			yearFlag = true;
		} else {
			if (birthday.getYear() == (Integer.parseInt(year) - 1900)) {
				yearFlag = true;
			} else {
				yearFlag = false;
			}
		}
		if (day.equalsIgnoreCase("rong")) {
			dayFlag = true;
		} else {
			if (birthday.getDate() == Integer.parseInt(day)) {
				dayFlag = true;
			} else {
				dayFlag = false;
			}
		}
		if (month.equalsIgnoreCase("rong")) {
			monthFlag = true;
		} else {
			if (birthday.getMonth() == (Integer.parseInt(month) - 1)) {
				monthFlag = true;
			} else {
				monthFlag = false;
			}
		}
		return dayFlag && yearFlag && monthFlag;
	}

	/**
	 * Convert to model.
	 *
	 * @param employee
	 *            the employee
	 * @return the employee model
	 */
	public static EmployeeModel convertToModel(Employee employee) {
		EmployeeModel model = new EmployeeModel();
		model.setId(employee.getId());
		model.setName(employee.getName());
		model.setPhone(employee.getPhone());
		model.setIdCard(employee.getIdCard());
		model.setSalary(employee.getSalary());
		model.setPosition(employee.getPosition());
		model.setAddress(employee.getAddress());
		model.setDescription(employee.getDescription());
		model.setGender(employee.isGender());
		model.setStartDate(employee.getStartDate());
		model.setEndDate(employee.getEndDate());
		model.setBirthday(employee.getBirthday());
		return model;
	}
}
