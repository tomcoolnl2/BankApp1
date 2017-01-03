// core
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// interfaces
import { User } from '../../models/models';
// providers
import { Users } from '../../providers/providers';

@Component({
    selector: 'page-user-details',
    templateUrl: 'user-details.page.html'
})
export class UserDetailsPage {
    user: User;
    login: string;

    constructor(public navCtrl: NavController, private navParams: NavParams, private _users: Users) {
        
        this.login = navParams.get('login');
        
        _users.loadDetails(this.login).subscribe(user => {
            this.user = user;
        })
    }
}
