import { environment } from './../../environments/environment';
import { Person } from './person.model';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

    apiUrl = environment.apiUrl; 

    constructor (private http: Http) {}

    savePerson(person: Person) {
        this.http.post(this.apiUrl + '/person/save', person)
        .subscribe();
    }
}