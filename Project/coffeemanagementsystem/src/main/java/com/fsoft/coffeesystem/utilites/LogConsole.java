package com.fsoft.coffeesystem.utilites;

import java.util.logging.Level;
import java.util.logging.Logger;


public class LogConsole {
	private static final Logger log = Logger.getLogger(LogConsole.class.getName());
	public static void LogException(Exception e){
		log.log(Level.INFO, e.getMessage(),e);
	}
	public static void LogString(String e){
		log.log(Level.INFO,e);
	}

}
