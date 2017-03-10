/*
* CustomerController
*
* 16-01-2017
*
* Copyright notice
*
* Modification Logs:
* DATE 			AUTHOR 		DESCRIPTION
* --------------------------------------------------------
* 16-Jan-2016 	KienTX2 	Create
* 
*/
package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Customer;

public interface CustomerDao extends JpaRepository<Customer, Long> {
	
	/* Advance Search */
	@Query("SELECT cust FROM Customer cust"
			+ " WHERE cust.name LIKE '%'|| :name ||'%' AND"
			+ " cust.phoneNumber LIKE '%'|| :phoneNumber ||'%' AND"
			+ " (cust.point = :point OR :point IS NULL) AND"
			+ " (cust.gender = :gender OR :gender IS NULL) AND"
			+ " cust.isDelete = 0")
	List<Customer> search(@Param("name") String name, 
			@Param("phoneNumber") String phone, @Param("point") Long point,
			@Param("gender") Byte gender);
	
	/*
	 * Check phone exist in database
	 */
	@Query("SELECT cust FROM Customer cust"
			+ " WHERE cust.phoneNumber LIKE :phoneNumber AND cust.id != :id")
	List<Customer> searchPhone(@Param("phoneNumber") String phone, @Param("id") Long id);
	
	/*
	 * Check email exist in database
	 */
	@Query("SELECT cust FROM Customer cust "
			+ " WHERE cust.email LIKE :email AND cust.id != :id")
	List<Customer> searchMail(@Param("email") String email, @Param("id") Long id);
}
