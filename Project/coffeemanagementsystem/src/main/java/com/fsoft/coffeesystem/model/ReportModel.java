package com.fsoft.coffeesystem.model;





public class ReportModel {
	private String products_name;
	private int sum;
	public ReportModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ReportModel(String products_name, int sum) {
		super();
		this.products_name = products_name;
		this.sum = sum;
	}
	public String getProducts_name() {
		return products_name;
	}
	public void setProducts_name(String products_name) {
		this.products_name = products_name;
	}
	public int getSum() {
		return sum;
	}
	public void setSum(int sum) {
		this.sum = sum;
	}


}

