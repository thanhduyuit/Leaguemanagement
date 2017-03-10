package com.fsoft.coffeesystem.utilites;

import java.util.Random;
/**
 *Random password 
 * */
public class RandomPassword {
	/**
	 * Random password.
	 *
	 * @return password string
	 */
	public String randomPassword() {
		Random random = new Random();
		int hight = 999999;
		int low = 100000;
		long res = random.nextInt(hight - low) + low;
		return String.valueOf(res);
	}
}
