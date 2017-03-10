package com.fsoft.coffeesystem.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.coffeesystem.dao.MaterialTypeDao;
import com.fsoft.coffeesystem.entity.MaterialType;
import com.fsoft.coffeesystem.model.MaterialTypeModel;

@Service("materialType")
public class MaterialTypeService {
	
	@Autowired
	MaterialTypeDao materialTypeDao;
	
	public List<MaterialTypeModel> getAllMaterialType(){
		List<MaterialType> lisMaterTypeEntity = materialTypeDao.findAllMaterialType();
		List<MaterialTypeModel> listMaterTypeModels = new ArrayList<>();
		MaterialTypeModel materialTypeModel;
		for (MaterialType materialType : lisMaterTypeEntity) {
			materialTypeModel = new MaterialTypeModel();
			materialTypeModel.setId(materialType.getId());
			materialTypeModel.setName(materialType.getName());
			materialTypeModel.setDescription(materialType.getDescription());
			listMaterTypeModels.add(materialTypeModel);
		}
		return listMaterTypeModels;
	}
	
	/**
	 * Adds the material type.
	 *
	 * @param materialTypeModel the material type model
	 * @return true, if successful
	 */
	public boolean addMaterialType(MaterialTypeModel materialTypeModel){
		try {
			MaterialType materialType= new MaterialType();
			materialType.setName(materialTypeModel.getName());
			materialType.setIsDelete(false);
			materialType.setDescription(materialTypeModel.getDescription());
			materialTypeDao.save(materialType);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
