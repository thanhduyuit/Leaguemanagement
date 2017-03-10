/*
 * Package name: com.fsoft.coffeesystem.service
 * Project name: coffeemanagementsystem
 * File: DeviceService.java
 * Author: TamNM4
 * Date created: Jan 18, 2017
 */
package com.fsoft.coffeesystem.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.DeviceDao;
import com.fsoft.coffeesystem.entity.Device;
import com.fsoft.coffeesystem.model.DeviceModel;

// TODO: Auto-generated Javadoc
/**
 * The Class DeviceService.
 */
@Service("deviceService")
public class DeviceService {
	
	/** The device dao. */
	@Autowired
	private DeviceDao deviceDao;
	
	/**
	 * List devices.
	 *
	 * @return the list
	 */
	public List<DeviceModel> listDevices(){
		List<Device> groupDevices = deviceDao.listDevices();
		List<DeviceModel> groupDevicesModels = new ArrayList<>();
		
		for (Device device : groupDevices) {
			DeviceModel deviceModel = new DeviceModel();
			deviceModel.setId((device.getId()));
			deviceModel.setName(device.getName());
			deviceModel.setDescription(device.getDescription());
			groupDevicesModels.add(deviceModel);
		}
		return groupDevicesModels;
	}
}
