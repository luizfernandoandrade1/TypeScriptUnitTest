import { UUID } from 'angular2-uuid';

export class Person {
    
    id?: string;
    name?: string;
    userName?: string;
    password?: string;

    constructor () {
        this.id = UUID.UUID();
    }

    
}