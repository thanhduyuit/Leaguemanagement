package com.fsoft.coffeesystem.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.coffeesystem.model.AccountModel;

@RestController
@RequestMapping("/")
public class HomePageController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView initForm(HttpServletRequest request) {
		AccountModel accountModel=null;
		accountModel = (AccountModel) request.getSession()
				.getAttribute("account");
		if (accountModel == null) {
			return new ModelAndView("login");
		}else{
			if(accountModel.getisAdmin()){
				return new ModelAndView("templateadmin");
			}
			return new ModelAndView("index");
		}
	}

}
