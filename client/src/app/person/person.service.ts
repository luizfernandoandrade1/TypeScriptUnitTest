import { Person } from './person.model';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

    constructor (private http: Http) {}

    savePerson(person: Person) {
        this.http.post('http://localhost:8080/person/save', person)
        .subscribe();
    }
}