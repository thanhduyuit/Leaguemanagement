/*
 * Jan 18, 2017
 * @author NhanNN
 */
package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.GroupDesk;

// TODO: Auto-generated Javadoc
/**
* The Interface GroupDeskDao.
*/
public interface GroupDeskDao extends JpaRepository<GroupDesk, Integer> {
	
	/**
	 * views group desk.
	 *
	 * @return the list
	 */
	@Query("select g from GroupDesk g where g.isDelete='false'")
	//@Query("select g from GroupDesk g")
    List<GroupDesk> listGroupDesks();
	
	/**
	 * Checks if is group name.
	 *
	 * @param groupDeskName the group desk name
	 * @return the group desk
	 */
	@Query("select g from GroupDesk g where g.name=:groupDeskName")
    GroupDesk isGroupName(@Param("groupDeskName") String groupDeskName);
}
