package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Ward;


// TODO: Auto-generated Javadoc
/**
 * The Interface WardDao.
 */
public interface WardDao extends JpaRepository<Ward, Integer>{
	
	/**
	 * Search wards.
	 *
	 * @param wardName the ward name
	 * @return the list
	 */
	@Query("select w from Ward w where w.name LIKE '%'||:wardName||'%'")
    List<Ward> searchWards(@Param("wardName") String wardName);
	
	

}
