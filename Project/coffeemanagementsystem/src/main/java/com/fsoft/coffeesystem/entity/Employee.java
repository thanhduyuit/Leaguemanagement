package com.fsoft.coffeesystem.entity;

// Generated 11-Jan-2017 22:33:33 by Hibernate Tools 5.2.0.Beta1


import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

// TODO: Auto-generated Javadoc
/**
 * Employee generated by hbm2java.
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "employee", uniqueConstraints = @UniqueConstraint(columnNames = "idCard"))
public class Employee implements java.io.Serializable {

	/** The id. */
	private int id;
	
	/** The store. */
	private Store store;
	
	/** The ward. */
	private Ward ward;
	
	/** The name. */
	private String name;
	
	/** The address. */
	private String address;
	
	/** The id card. */
	private String idCard;
	
	/** The phone. */
	private String phone;
	
	/** The birthday. */
	private Date birthday;
	
	/** The start date. */
	private Date startDate;
	
	/** The end date. */
	private Date endDate;
	
	/** The salary. */
	private BigDecimal salary;
	
	/** The position. */
	private String position;
	
	/** The gender. */
	private boolean gender;
	
	/** The is detele. */
	private Boolean isDetele;
	
	/** The description. */
	private String description;

	/**
	 * Instantiates a new employee.
	 */
	public Employee() {
	}

	/**
	 * Instantiates a new employee.
	 *
	 * @param id the id
	 * @param name the name
	 * @param address the address
	 * @param idCard the id card
	 * @param phone the phone
	 * @param birthday the birthday
	 * @param startDate the start date
	 * @param salary the salary
	 * @param position the position
	 * @param gender the gender
	 */
	public Employee(int id, String name, String address, String idCard, String phone, Date birthday,
			Date startDate, BigDecimal salary, String position, boolean gender) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.idCard = idCard;
		this.phone = phone;
		this.birthday = birthday;
		this.startDate = startDate;
		this.salary = salary;
		this.position = position;
		this.gender = gender;
	}

	/**
	 * Instantiates a new employee.
	 *
	 * @param id the id
	 * @param store the store
	 * @param ward the ward
	 * @param name the name
	 * @param address the address
	 * @param idCard the id card
	 * @param phone the phone
	 * @param birthday the birthday
	 * @param startDate the start date
	 * @param endDate the end date
	 * @param salary the salary
	 * @param position the position
	 * @param gender the gender
	 * @param isDetele the is detele
	 * @param description the description
	 */
	public Employee(int id, Store store, Ward ward, String name, String address, String idCard,
			String phone, Date birthday, Date startDate, Date endDate, BigDecimal salary, String position,
			boolean gender, Boolean isDetele, String description) {
		this.id = id;
		this.store = store;
		this.ward = ward;
		this.name = name;
		this.address = address;
		this.idCard = idCard;
		this.phone = phone;
		this.birthday = birthday;
		this.startDate = startDate;
		this.endDate = endDate;
		this.salary = salary;
		this.position = position;
		this.gender = gender;
		this.isDetele = isDetele;
		this.description = description;
	}

	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return this.id;
	}

	/**
	 * Sets the id.
	 *
	 * @param id the new id
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * Gets the store.
	 *
	 * @return the store
	 */
	@ManyToOne
	@JoinColumn(name = "storeId")
	public Store getStore() {
		return this.store;
	}

	/**
	 * Sets the store.
	 *
	 * @param store the new store
	 */
	public void setStore(Store store) {
		this.store = store;
	}

	/**
	 * Gets the ward.
	 *
	 * @return the ward
	 */
	@ManyToOne
	@JoinColumn(name = "wardID")
	public Ward getWard() {
		return this.ward;
	}

	/**
	 * Sets the ward.
	 *
	 * @param ward the new ward
	 */
	public void setWard(Ward ward) {
		this.ward = ward;
	}

	/**
	 * Gets the name.
	 *
	 * @return the name
	 */
	@Column(name = "name", nullable = false)
	public String getName() {
		return this.name;
	}

	/**
	 * Sets the name.
	 *
	 * @param name the new name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Gets the address.
	 *
	 * @return the address
	 */
	@Column(name = "address", nullable = false)
	public String getAddress() {
		return this.address;
	}

	/**
	 * Sets the address.
	 *
	 * @param address the new address
	 */
	public void setAddress(String address) {
		this.address = address;
	}

	/**
	 * Gets the id card.
	 *
	 * @return the id card
	 */
	@Column(name = "idCard", unique = true, nullable = false)
	public String getIdCard() {
		return this.idCard;
	}

	/**
	 * Sets the id card.
	 *
	 * @param idCard the new id card
	 */
	public void setIdCard(String idCard) {
		this.idCard = idCard;
	}

	/**
	 * Gets the phone.
	 *
	 * @return the phone
	 */
	@Column(name = "phone", nullable = false, length = 11)
	public String getPhone() {
		return this.phone;
	}

	/**
	 * Sets the phone.
	 *
	 * @param phone the new phone
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}

	/**
	 * Gets the birthday.
	 *
	 * @return the birthday
	 */
	@Temporal(TemporalType.DATE)
	@Column(name = "birthday", nullable = false, length = 10)
	public Date getBirthday() {
		return this.birthday;
	}

	/**
	 * Sets the birthday.
	 *
	 * @param birthday the new birthday
	 */
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	/**
	 * Gets the start date.
	 *
	 * @return the start date
	 */
	@Temporal(TemporalType.DATE)
	@Column(name = "startDate", nullable = false, length = 10)
	public Date getStartDate() {
		return this.startDate;
	}

	/**
	 * Sets the start date.
	 *
	 * @param startDate the new start date
	 */
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	/**
	 * Gets the end date.
	 *
	 * @return the end date
	 */
	@Temporal(TemporalType.DATE)
	@Column(name = "endDate", length = 10)
	public Date getEndDate() {
		return this.endDate;
	}

	/**
	 * Sets the end date.
	 *
	 * @param endDate the new end date
	 */
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	/**
	 * Gets the salary.
	 *
	 * @return the salary
	 */
	@Column(name = "salary", nullable = false, scale = 4)
	public BigDecimal getSalary() {
		return this.salary;
	}

	/**
	 * Sets the salary.
	 *
	 * @param salary the new salary
	 */
	public void setSalary(BigDecimal salary) {
		this.salary = salary;
	}

	/**
	 * Gets the position.
	 *
	 * @return the position
	 */
	@Column(name = "position", nullable = false)
	public String getPosition() {
		return this.position;
	}

	/**
	 * Sets the position.
	 *
	 * @param position the new position
	 */
	public void setPosition(String position) {
		this.position = position;
	}

	/**
	 * Checks if is gender.
	 *
	 * @return true, if is gender
	 */
	@Column(name = "gender", nullable = false)
	public boolean isGender() {
		return this.gender;
	}

	/**
	 * Sets the gender.
	 *
	 * @param gender the new gender
	 */
	public void setGender(boolean gender) {
		this.gender = gender;
	}

	/**
	 * Gets the checks if is detele.
	 *
	 * @return the checks if is detele
	 */
	@Column(name = "isDetele")
	public Boolean getIsDetele() {
		return this.isDetele;
	}

	/**
	 * Sets the checks if is detele.
	 *
	 * @param isDetele the new checks if is detele
	 */
	public void setIsDetele(Boolean isDetele) {
		this.isDetele = isDetele;
	}

	/**
	 * Gets the description.
	 *
	 * @return the description
	 */
	@Column(name = "description")
	public String getDescription() {
		return this.description;
	}

	/**
	 * Sets the description.
	 *
	 * @param description the new description
	 */
	public void setDescription(String description) {
		this.description = description;
	}

}
