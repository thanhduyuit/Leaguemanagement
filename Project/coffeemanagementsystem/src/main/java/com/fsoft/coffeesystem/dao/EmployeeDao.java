package com.fsoft.coffeesystem.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Employee;

// TODO: Auto-generated Javadoc
/**
 * The Interface EmployeeDao.
 */
public interface EmployeeDao extends JpaRepository<Employee, Integer> {
	
	/**
	 * Search employee.
	 *
	 * @param name the name
	 * @param address the address
	 * @param idCard the id card
	 * @param phone the phone
	 * @param position the position
	 * @param minSalary the min salary
	 * @param maxSalary the max salary
	 * @param city the city
	 * @param district the district
	 * @param ward the ward
	 * @param gender the gender
	 * @param fromDate the from date
	 * @param toDate the to date
	 * @param birthday the birthday
	 * @param birthmonth the birthmonth
	 * @param birthyear the birthyear
	 * @return the list
	 */
	@Query("select e from Employee e where " + "e.name LIKE '%'||:name||'%' and "
			+ "e.address LIKE '%' || :address || '%' and " 
			+ "e.idCard LIKE '%'||:idCard||'%' and "
			+ "e.position LIKE '%' || :position || '%' and " 
			+ "e.phone LIKE '%' || :phone || '%' and "
			+ "( :minSalary is null or e.salary > :minSalary ) and "
			+ "( :maxSalary is null or e.salary < :maxSalary ) and "
			+ "( :city is null or e.ward.district.city.id = :city ) and "
			+ "( :district is null or e.ward.district.id = :district ) and "
			+ "( :ward is null or e.ward.id = :ward ) and " 
			+ "( :gender is null or e.gender = :gender ) and "
			+ "( :birthday is null or DAY(e.birthday) = :birthday ) and "
			+ "( :birthmonth is null or MONTH(e.birthday) = :birthmonth ) and "
			+ "( :birthyear is null or YEAR(e.birthday) = :birthyear ) and "
			+ "e.isDetele = false"
//			+ "( case when :fromDate is null then true else  "
//			+ "		 case when e.startDate > :fromDate then true else false end"
//			+ "	 end  = true and "
//			+ "  case when :toDate is null then true else "
//			+ "		 case when e.startDate < :toDate then true else false end"
//			+ "  end  = true ) and "
//			+ "( case when e.endDate is null then true else"
//			+ "      case when :fromDate is null then true else"
//			+ "		  	 case when e.endDate > :fromDate then true else false"
//			+ "			 end"
//			+ "		 end"
//			+ "  end  = true and"
//			+ "  case when e.endDate is null then true else"
//			+ "      case when :toDate is null then true else"
//			+ "		  	 case when e.endDate < :toDate then true else false"
//			+ "			 end"
//			+ "		 end"
//			+ "  end  = true ) and"
			) 
	List<Employee> searchEmployee(@Param("name") String name, @Param("address") String address,
			@Param("idCard") String idCard, @Param("phone") String phone, @Param("position") String position,
			@Param("minSalary") Integer minSalary, @Param("maxSalary") Integer maxSalary, @Param("city") Integer city,
			@Param("district") Integer district, @Param("ward") Integer ward, @Param("gender") Boolean gender,
			/*@Param("fromDate") Date fromDate, @Param("toDate") Date toDate,*/ @Param("birthday") Integer birthday,
			@Param("birthmonth") Integer birthmonth, @Param("birthyear") Integer birthyear);

}
