import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class Users {

    endpoint = 'https://api.github.com';

    constructor(public http: Http) { }

    load(): Observable<User[]> {
        return this.http.get(`${this.endpoint}/users`)
            .map(result => <User[]>result.json());
    }

    loadDetails(login: string): Observable<User> {
        return this.http.get(`${this.endpoint}/users/${login}`)
            .map(result => <User>result.json());
    }

    searchUsers(param: string): Observable<User[]> {
        return this.http.get(`${this.endpoint}/search/users?q=${param}`)
            .map(result => <User[]>result.json().items);
    }
}