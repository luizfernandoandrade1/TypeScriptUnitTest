import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

    constructor (private http: Http) {}

    savePerson() {
        this.http.get('http://localhost:8080/person')
        .subscribe(
            (res: Response) => {
                console.log(res.text());
            }
        )
    }
}