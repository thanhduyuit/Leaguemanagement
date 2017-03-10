package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Store;
import com.fsoft.coffeesystem.model.StoreModel;

public interface StoreDao extends JpaRepository<Store, Integer> {

	@Query("SELECT s FROM Store s, StoreAccount a  WHERE a.store.id=s.id AND a.account.id=:myid AND s.isDelete=0")
	List<Store> getStoreByAccountID(@Param("myid") int id);
	
	@Query("SELECT s FROM Store s, StoreAccount a  WHERE a.store.id=s.id AND a.account.accountName=:accountName AND s.isDelete=0")
	List<Store> getStoreByAccountName(@Param("accountName") String accountName);
}
