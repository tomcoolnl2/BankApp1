// core
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// interfaces
import { User } from '../../models/models';
// providers
import { Users } from '../../providers/providers';
// pages
import { UserDetailsPage } from '../../pages/pages';

@Component({
    selector: 'page-users',
    templateUrl: 'users.page.html'
})
export class UsersPage {

    users: User[];
    originalUsers: User[];

    constructor(public navCtrl: NavController, private _users: Users) {
        _users.load().subscribe(users => {
            this.users = users;
            this.originalUsers = users;
        });
    }

    goToDetails(login: string) {
        this.navCtrl.push(UserDetailsPage, { login });
    }

    search($event) {
        const term = $event.target.value;
        // We will only perform the search if we have 3 or more characters
        if (term.trim() === '' || term.trim().length < 3) {
            // Load cached users
            this.users = this.originalUsers;
        } else {
            // Get the searched users from github
            this._users.searchUsers(term).subscribe(users => {
                this.users = users
            });
        }
    }

    ionViewDidLoad() {
        console.log('Hello Users Page');
    }
}