package com.fsoft.coffeesystem.dao;


import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Promotion;




public interface PromotionDao extends JpaRepository<Promotion, Integer>{
	@Query(value= " select pm.id, pm.name, pm.startDate, pm.endDate, pm.description, pm.isDelete, pm.storeId from Promotion pm " + 
			" where ( pm.name like '%'+( case when (:name) is '' then null else (:name) end )+'%') " + 
			" and ( pm.startDate >= ( case when (:startDate) is '' then (SELECT MIN(p.startDate) FROM promotion p) else (:startDate) end )) " + 
			" and ( pm.endDate <= ( case when (:endDate) is '' then (SELECT MAX(pmt.endDate) FROM promotion pmt) else (:endDate) end )) ", nativeQuery=true)
     List<Promotion> searchPromotions(@Param("name") String promotionName,@Param("startDate") Date startDate,@Param("endDate") Date endDate);
	
	@Query("select pm from Promotion pm "
			+" where ( (:name) is '' or pm.name like '%' || (:name) || '%')"
			+" and ( (:startDate) is '' or pm.startDate >= (:startDate) ) "
			+ " and ( (:endDate) is '' or pm.endDate <= (:endDate) ) ")
	List<Promotion> findPromotions(@Param("name") String promotionName,@Param("startDate") String startDate,@Param("endDate") String endDate);
	
	@Query(" select pm from Promotion pm where pm.id = :id ")
	Promotion getPromotionById(@Param("id") Integer id);
}




