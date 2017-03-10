package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Accounts;

// TODO: Auto-generated Javadoc
/**
 * The Interface AccountDAO.
 */
public interface AccountDAO extends JpaRepository<Accounts, Integer>{
	
	
	/**
	 * Gets the all account.
	 *
	 * @return the all account
	 */
	@Query("SELECT a FROM Accounts a WHERE a.isDelete=0")
	List<Accounts> getAllAccount();
	
	/**
	 * Gets the account of username.
	 *
	 * @param accountName the account name
	 * @return the account of username
	 */
	@Query("SELECT a FROM Accounts a WHERE a.accountName LIKE :myaccount AND a.isDelete=0")
	Accounts getAccountOfUsername(@Param("myaccount") String accountName);
	
	/**
	 * Search account of username.
	 *
	 * @param accountName the account name
	 * @param name the name
	 * @return the list
	 */
	@Query("SELECT a FROM Accounts a WHERE (a.accountName LIKE :myaccount OR a.name LIKE '%'|| :myname ||'%') AND a.isDelete=0")
	List<Accounts> searchAccountOfUsername(@Param("myaccount") String accountName,@Param("myname") String name);
	
	/**
	 * Search account of name.
	 *
	 * @param name the name
	 * @return the list
	 */
	@Query("SELECT a FROM Accounts a WHERE a.name LIKE '%'|| :myname ||'%' AND a.isDelete=0")
	List<Accounts> searchAccountOfName(@Param("myname") String name);
	
	/**
	 * Search account of ID card.
	 *
	 * @param idCard the id card
	 * @param name the name
	 * @return the list
	 */
	@Query("SELECT a FROM Accounts a WHERE (a.idCard LIKE :myidcard OR a.name LIKE '%'|| :myname ||'%') AND a.isDelete=0")
	List<Accounts> searchAccountOfIDCard(@Param("myidcard") String idCard,@Param("myname") String name);
	
	/**
	 * Search account of ID card and username.
	 *
	 * @param idCard the id card
	 * @param username the username
	 * @param name the name
	 * @return the list
	 */
	@Query("SELECT a FROM Accounts a WHERE (a.idCard LIKE :myidcard OR a.accountName LIKE :myaccount OR a.name LIKE '%'|| :myname ||'%') AND a.isDelete=0")
	List<Accounts> searchAccountOfIDCardAndUsername(@Param("myidcard") String idCard,@Param("myaccount") String username ,@Param("myname") String name);
	
}
