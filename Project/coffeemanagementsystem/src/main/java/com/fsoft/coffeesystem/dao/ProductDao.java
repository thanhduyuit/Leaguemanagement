package com.fsoft.coffeesystem.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.coffeesystem.entity.Product;
import com.fsoft.coffeesystem.entity.ProductGroup;

public interface ProductDao extends JpaRepository<Product, Integer> {
	@Query("select p from Product p where p.name LIKE '%'||:name||'%' and"
			+ " ( :groupid is null or p.productGroup.id = :groupid) and"
			+ " ( :pricefrom is null or p.price > :pricefrom ) and" 
			+ " ( :priceto is null or p.price < :priceto )")
	List<Product> searchProducts(@Param("name") String name, @Param("groupid") Integer groupid,
			@Param("pricefrom") Integer priceFrom, @Param("priceto") Integer priceTo);

	@Query("select p from Product p where p.productGroup like :pg and p.isDelete = false")
	List<Product> getProductWithProductGroup(@Param("pg") ProductGroup pg);

}
