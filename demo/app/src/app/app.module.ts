// core
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// providers
import { Users, Reviews } from '../providers/providers';
// pages
import { HomePage, UsersPage, UserDetailsPage, ReposPage, OrganisationsPage, AddReviewPage } from '../pages/pages';
// components
import { App } from './app.component';

@NgModule({
    declarations: [
        App,
        HomePage,
        UsersPage,
        UserDetailsPage,
        ReposPage, 
        OrganisationsPage,
        AddReviewPage
    ],
    imports: [
        IonicModule.forRoot(App)
    ],
    bootstrap: [ IonicApp ],
    entryComponents: [
        App,
        HomePage,
        UsersPage,
        UserDetailsPage,
        ReposPage, 
        OrganisationsPage,
        AddReviewPage
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        Users,
        Reviews
    ]
})
export class AppModule { }