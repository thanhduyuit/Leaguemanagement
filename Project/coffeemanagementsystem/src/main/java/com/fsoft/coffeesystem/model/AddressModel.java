package com.fsoft.coffeesystem.model;

// TODO: Auto-generated Javadoc
/**
 * The Class AddressModel.
 */
public class AddressModel {
	
	/** The ward name. */
	private String wardName;
	
	/** The district name. */
	private String districtName;
	
	/** The city name. */
	private String cityName;
	
	/**
	 * Instantiates a new address model.
	 */
	public AddressModel() {
		super();
	}
	
	/**
	 * Instantiates a new address model.
	 *
	 * @param wardName the ward name
	 * @param districtName the district name
	 * @param cityName the city name
	 */
	public AddressModel(String wardName, String districtName, String cityName) {
		super();
		this.wardName = wardName;
		this.districtName = districtName;
		this.cityName = cityName;
	}
	
	/**
	 * Gets the ward name.
	 *
	 * @return the ward name
	 */
	public String getWardName() {
		return wardName;
	}
	
	/**
	 * Sets the ward name.
	 *
	 * @param wardName the new ward name
	 */
	public void setWardName(String wardName) {
		this.wardName = wardName;
	}
	
	/**
	 * Gets the district name.
	 *
	 * @return the district name
	 */
	public String getDistrictName() {
		return districtName;
	}
	
	/**
	 * Sets the district name.
	 *
	 * @param districtName the new district name
	 */
	public void setDistrictName(String districtName) {
		this.districtName = districtName;
	}
	
	/**
	 * Gets the city name.
	 *
	 * @return the city name
	 */
	public String getCityName() {
		return cityName;
	}
	
	/**
	 * Sets the city name.
	 *
	 * @param cityName the new city name
	 */
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	
}
