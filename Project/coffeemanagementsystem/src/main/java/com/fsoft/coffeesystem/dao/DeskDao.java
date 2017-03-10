/*
 * Package name: com.fsoft.coffeesystem.dao
 * Project name: coffeemanagementsystem
 * File: DeskDao.java
 * Author: TamNM4
 * Date created: Jan 18, 2017
 */
package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Desk;

// TODO: Auto-generated Javadoc
/**
 * The Interface DeskDao.
 */
public interface DeskDao extends JpaRepository<Desk, Integer> {

	/**
	 * Search desks.
	 *
	 * @param storeid the storeid
	 * @param id the id
	 * @param name the name
	 * @param groupid the groupid
	 * @param quantity the quantity
	 * @return the list
	 */
	@Query("SELECT d"
			+ " FROM Desk d WHERE d.store.id = :sid AND (d.id = :id OR :id < 0) AND d.name LIKE '%'||:name||'%'"
			+ " AND (d.groupDesk.id = :gid OR :gid < 0)"
			+ " AND (d.quantityOfSeats = :quan OR :quan < 0) AND d.isDelete ='FALSE'")
	List<Desk> searchDesks(@Param("sid") Integer storeid, @Param("id") Integer id, @Param("name") String name,
			@Param("gid") Integer groupid, @Param("quan") Integer quantity);
	
	/**
	 * Search desk by name.
	 *
	 * @param deskName the desk name
	 * @return the list
	 */
	@Query("SELECT dk FROM Desk dk WHERE dk.name LIKE :name")
	List<Desk> searchDeskByName(@Param("name") String deskName);
}
