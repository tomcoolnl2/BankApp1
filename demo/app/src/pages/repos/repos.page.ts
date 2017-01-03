import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-repos',
    templateUrl: 'repos.page.html'
})
export class ReposPage {

    static readonly title: string = 'Repositories';

    constructor(public navCtrl: NavController) { }

    ionViewDidLoad() {
        console.log('Hello Repos Page');
    }
}