package com.spring;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/xyz")
public class HelloController{
 
   @RequestMapping(value="/hi",method = RequestMethod.GET)
   public String aaaa(ModelMap model) {
      model.addAttribute("message", "Hello Spring MVC Framework!aaaaaaaaaaaaaaaa");
      return "hello";
   }
   
   @RequestMapping(value="/xyz",method = RequestMethod.GET)
   public String printHello2(ModelMap model) {
      model.addAttribute("message", "Hello Spring MVC Frameworkádssssssssssssssss!");
      return "demo1";
   }

}