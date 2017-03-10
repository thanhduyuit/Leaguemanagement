package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Orders;

// TODO: Auto-generated Javadoc
/**
 * The Interface OrdersDao.
 */
public interface OrdersDao extends JpaRepository<Orders, Integer> {
	/**
	 * Search orders.
	 *
	 * @param name
	 *            the name
	 * @return the list
	 */
	@Query("select o from Orders o where " + "o.customer.name LIKE '%'|| :name ||'%' AND "
			+ "o.customer.phoneNumber LIKE '%'|| :phoneNumber ||'%' AND "
			+ "o.desk.name LIKE '%'|| :deskName ||'%' AND " + "o.isDelete = 0 AND "
			+ "(:totalBill = 0 or o.totalBill = :totalBill)")
	List<Orders> searchOrders(@Param("name") String name, @Param("phoneNumber") String phoneNumber,
			@Param("deskName") String deskName, @Param("totalBill") Integer totalBill);
}
