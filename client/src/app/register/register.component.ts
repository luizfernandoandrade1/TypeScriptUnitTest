import { PersonService } from './../person/person.service';
import { Person } from '../person/person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  providers: [PersonService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private personService: PersonService) { }
  personName: string;
  person: Person;
  
  ngOnInit() {
    this.person = new Person();
  }

  saveUser() {
    console.log(this.person);
    console.log(this.personName);
    console.log('Hi there!! ',this.personService.savePerson())
  }

}
