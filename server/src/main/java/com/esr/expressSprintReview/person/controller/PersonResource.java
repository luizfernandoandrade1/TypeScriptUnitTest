package com.esr.expressSprintReview.person.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.esr.expressSprintReview.person.model.Person;
import com.esr.expressSprintReview.person.repository.PersonRepository;

@RestController
@CrossOrigin
@RequestMapping("/person")
public class PersonResource {
	
	@Autowired
	private PersonRepository repository;
	
	@RequestMapping(value="/save", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> add(@RequestBody Person person) {
		repository.save(person);
        return ResponseEntity.ok("Every thing is ok!");
    }

}
