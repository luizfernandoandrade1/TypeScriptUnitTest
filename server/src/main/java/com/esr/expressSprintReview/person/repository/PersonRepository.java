package com.esr.expressSprintReview.person.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.esr.expressSprintReview.person.model.Person;

public interface PersonRepository extends CrudRepository<Person, Long>{
	
	List<Person> findByName(String name);
}
