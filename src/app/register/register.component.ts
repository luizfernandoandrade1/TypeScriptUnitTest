import { Person } from '../person/person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  personName: string;
  person: Person;
  
  ngOnInit() {
    this.person = new Person();
    console.log(this.person);
  }

  saveUser() {
    console.log(this.person);
    console.log(this.personName);
  }

}
