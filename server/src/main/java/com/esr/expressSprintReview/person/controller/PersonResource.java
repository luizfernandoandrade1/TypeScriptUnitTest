package com.esr.expressSprintReview.person.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/person")
public class PersonResource {
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<?> add() {
        return ResponseEntity.ok("{name: andre, idade:25}");
    }

}
