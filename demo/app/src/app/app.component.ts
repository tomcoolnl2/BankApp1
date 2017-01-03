// core
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
// interfaces
import { Page } from '../models/models';
// pages
import { HomePage, UsersPage, ReposPage, OrganisationsPage } from '../pages/pages';

@Component({
    templateUrl: 'app.component.html'
})

export class App {

    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;
    pages: Array<Page>;

    constructor(public platform: Platform, public menu: MenuController) {
        this.initializeApp();

        this.pages = [
            { title: HomePage.title, component: HomePage },
            { title: 'Users', component: UsersPage },
            { title: 'Repos', component: ReposPage },
            { title: 'Organisations', component: OrganisationsPage }
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    }
}
