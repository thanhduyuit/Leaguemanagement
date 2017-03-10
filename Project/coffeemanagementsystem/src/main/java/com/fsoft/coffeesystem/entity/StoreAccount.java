package com.fsoft.coffeesystem.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "storeAccount")
public class StoreAccount implements Serializable {
	private int id;
	private Store store;
	private Accounts account;
	
	public StoreAccount() {
	}
	public StoreAccount(int id){
		this.id = id;
	}
	public StoreAccount(int id, Store store, Accounts account) {
		super();
		this.id = id;
		this.store = store;
		this.account = account;
	}
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@ManyToOne
	@JoinColumn(name = "storeId", nullable = false)
	public Store getStore() {
		return store;
	}
	
	public void setStore(Store store) {
		this.store = store;
	}
	@ManyToOne
	@JoinColumn(name = "accountId", nullable = false)
	public Accounts getAccount() {
		return account;
	}
	public void setAccount(Accounts account) {
		this.account = account;
	}
	
}
