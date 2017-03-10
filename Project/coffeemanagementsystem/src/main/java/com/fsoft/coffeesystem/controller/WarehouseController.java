package com.fsoft.coffeesystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.coffeesystem.model.MaterialTypeModel;
import com.fsoft.coffeesystem.model.SearchWarehouseModel;
import com.fsoft.coffeesystem.model.WarehouseElementModel;
import com.fsoft.coffeesystem.model.WarehouseModel;
import com.fsoft.coffeesystem.service.MaterialTypeService;
import com.fsoft.coffeesystem.service.WarehouseService;

// TODO: Auto-generated Javadoc
/**
 * The Class WarehouseController.
 */
@RestController
@RequestMapping("/")
public class WarehouseController {

	/** The warehouse service. */
	@Autowired
	WarehouseService warehouseService;

	/** The material type service. */
	@Autowired
	MaterialTypeService materialTypeService;

	/**
	 * redirect to warehouse.jsp
	 *
	 * @return the warehouse
	 */
	@RequestMapping(value = "/warehouse", method = RequestMethod.GET)
	public ModelAndView getWarehouse() {
		return new ModelAndView("warehouse");
	}

	/**
	 * 
	 * get warehouse follow WarehouseModel (id,name,... )
	 *
	 * @param waModel
	 *            the wa model
	 * @return the list WH
	 */
	@RequestMapping(value = "/listWarehouse", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<WarehouseModel> getListWH(@RequestBody SearchWarehouseModel waModel) {
		List<WarehouseModel> list = warehouseService.searchWarehouse(waModel);
		return list;
	}

	/**
	 * Adds the warehouse.
	 *
	 * @param warehouseModel
	 *            the warehouse model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/addWarehouse", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean addWarehouse(@RequestBody WarehouseModel warehouseModel) {
		return warehouseService.addWarehouse(warehouseModel);
	}

	/**
	 * update isDelete of Warehouse = 1.
	 *
	 * @param waModel
	 *            the wa model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/deleteWarehouse", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean deleteWH(@RequestBody WarehouseModel waModel) {
		return warehouseService.deleteWarehouse(waModel);
	}

	/**
	 * Load material type.
	 *
	 * @return the list
	 */
	@RequestMapping(value = "/getAllMaterialType", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<MaterialTypeModel> loadMaterialType() {
		return materialTypeService.getAllMaterialType();
	}

	/**
	 * View detail WH controller.
	 *
	 * @param warehouseElementModel
	 *            the warehouse element model
	 * @return the warehouse element model
	 */
	// Controller này xử lý cho việc truy vấn về thông tin chi tiết của một mặt
	// hàng bất kỳ.
	// Nó nhận request theo phương thức POST (Client gửi yêu cầu đến Server).
	// Và kết quả gửi về client được mô tả dưới dạng chuỗi JSON.
	@RequestMapping(value = "/viewDetailWH", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public WarehouseElementModel viewDetailWHController(@RequestBody WarehouseElementModel warehouseElementModel) {

		// Controller gọi đến Service để xử lý truy vấn này.
		// Đối số warehouseElementModel sẽ mang theo thông tin về ID của mặt
		// hàng.
		return warehouseService.searchWarehouseByID(warehouseElementModel);
	}

	/**
	 * Update WH.
	 *
	 * @param warehouseModel
	 *            the warehouse model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/updateWarehouse", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean updateWH(@RequestBody WarehouseModel warehouseModel) {
		return warehouseService.updateWarehouse(warehouseModel);
	}

	/**
	 * Adds the material type.
	 *
	 * @param materialTypeModel
	 *            the material type model
	 * @return true, if successful
	 */
	@RequestMapping(value = "/addDataMaterialType", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean addMaterialType(@RequestBody MaterialTypeModel materialTypeModel) {
		return materialTypeService.addMaterialType(materialTypeModel);
	}
}
