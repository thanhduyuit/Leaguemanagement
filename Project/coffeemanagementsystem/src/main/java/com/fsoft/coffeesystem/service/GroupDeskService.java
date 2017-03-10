/*
 * Jan 18, 2017
 * @author NhanNN
 */
package com.fsoft.coffeesystem.service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fsoft.coffeesystem.dao.GroupDeskDao;
import com.fsoft.coffeesystem.entity.GroupDesk;
import com.fsoft.coffeesystem.model.GroupDeskModel;


// TODO: Auto-generated Javadoc
/**
 * The Class GroupDeskService.
 */
@Service("groupDeskService")
public class GroupDeskService {
	
	/** The group desk dao. */
	@Autowired
	private GroupDeskDao groupDeskDao;
	
	/**
	 * List group desks.
	 *
	 * @return the list
	 */
	public List<GroupDeskModel> listGroupDesks() {
		List<GroupDesk> groupDesks = groupDeskDao.listGroupDesks();
		List<GroupDeskModel> groupDeskModels = new ArrayList<>();
		//GroupDeskModel groupDeskModel;
		for (GroupDesk groupDesk : groupDesks) {
			GroupDeskModel groupDeskModel = new GroupDeskModel();
			groupDeskModel.setId((groupDesk.getId()));
			groupDeskModel.setName(groupDesk.getName());
			groupDeskModel.setCost(groupDesk.getCost());
			groupDeskModel.setDescription(groupDesk.getDescription());
		//	groupDeskModel.setIsDelete(groupDesk.getIsDelete());
			groupDeskModels.add(groupDeskModel);
		}
		return groupDeskModels;
	}
	
	/**
	 * Adds the group desk.
	 *
	 * @param groupDeskModel the group desk model
	 */
	public void addGroupDesk(GroupDeskModel groupDeskModel) {
		GroupDesk groupDesk = new GroupDesk();
		groupDesk.setName(groupDeskModel.getName());
		groupDesk.setCost(groupDeskModel.getCost());
		groupDesk.setDescription(groupDeskModel.getDescription());
		groupDesk.setIsDelete(false);
		groupDeskDao.save(groupDesk);
	}
	
	/**
	 * Delete.
	 *
	 * @param groupDeskModel the group desk model
	 */
	public void delete(GroupDeskModel groupDeskModel) {
		GroupDesk groupDesk = groupDeskDao.findOne(groupDeskModel.getId());
		groupDesk.setIsDelete(true);
		groupDeskDao.save(groupDesk);
	}
	
	/**
	 * Update.
	 *
	 * @param groupDeskModel the group desk model
	 */
	public void update(GroupDeskModel groupDeskModel) {
		GroupDesk groupDesk = groupDeskDao.findOne(groupDeskModel.getId());
		System.out.println(groupDesk.getId());
		groupDesk.setName(groupDeskModel.getName());
		groupDesk.setCost(groupDeskModel.getCost());
		groupDesk.setDescription(groupDeskModel.getDescription());
		groupDesk.setIsDelete(false);
		groupDeskDao.save(groupDesk);
	}
	
	
	/**
	 * Checks if is id group name.
	 *
	 * @param groupDeskModel the group desk model
	 * @return the int
	 */
	public int isIdGroupName(GroupDeskModel groupDeskModel){
		GroupDesk groupDesk = groupDeskDao.isGroupName(groupDeskModel.getName());
		if (groupDesk==null) {
			return 0;
		}
		return groupDesk.getId();
	}
}
