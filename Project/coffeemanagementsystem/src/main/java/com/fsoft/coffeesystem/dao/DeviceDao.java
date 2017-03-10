/*
 * Package name: com.fsoft.coffeesystem.dao
 * Project name: coffeemanagementsystem
 * File: DeviceDao.java
 * Author: TamNM4
 * Date created: Jan 18, 2017
 */
package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fsoft.coffeesystem.entity.Device;

// TODO: Auto-generated Javadoc
/**
 * The Interface DeviceDao.
 */
public interface DeviceDao extends JpaRepository<Device, Integer>{
	
	/**
	 * List devices.
	 *
	 * @return the list
	 */
	@Query("select d from Device d where d.isDelete='false'")
	List<Device> listDevices();
}
