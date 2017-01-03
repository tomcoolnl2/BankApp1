import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-organizations',
    templateUrl: 'organisations.page.html'
})
export class OrganisationsPage {

    static readonly title: string = 'Organisations';

    constructor(public navCtrl: NavController) { }

    ionViewDidLoad() {
        console.log('Hello Organisations Page');
    }
}