//import 'es6-shim';
import {App, Platform, IonicApp} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {HappeningPage} from './pages/happening/happening';
import {AddEventPage} from './pages/addevent/addevent';
import {ProfilePage} from './pages/profile/profile';
import {ContactsPage} from './pages/contacts/contacts';
import {WaterAuditLandingPage} from './pages/wateraudit-landing/wateraudit-landing';
import {AuditsPage} from './pages/audits/audits';
import {AnalyticsPage} from './pages/analytics/analytics';
import {AboutPage} from './pages/about/about';

import {
    FIREBASE_PROVIDERS, defaultFirebase,
    AngularFire, firebaseAuthConfig, AuthProviders,
    AuthMethods
} from 'angularfire2';

@App({
    // template: '<ion-nav [root]="rootPage"></ion-nav>',
    templateUrl: 'build/app.html',
    providers: [
        FIREBASE_PROVIDERS,
        defaultFirebase('https://clearlyinnovative-firebasestarterapp.firebaseio.com/'),
        firebaseAuthConfig({
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
            remember: 'default',
            scope: ['email']
        })
    ],
    queries: {
      nav: new ViewChild('content')
    },
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
    // rootPage: any = HappeningPage;
    rootPage: any;
    nav: NavController;
    pages: Array<{title: string, component: any}>;

    constructor(private app: IonicApp, platform: Platform) {
      // used for an example of ngFor and navigation
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });

      this.pages = [
        // { title: 'Getting Started', component: GettingStartedPage },
        // { title: 'List', component: ListPage },
        { title: 'Home', component: HappeningPage},
        { title: 'Civic Authorities', component: ContactsPage},
        { title: 'Audits', component: AuditsPage},
        { title: 'Add Event', component: AddEventPage},
        { title: 'Analytics Dashboard', component: AnalyticsPage},
        { title: 'Profile', component: ProfilePage},
        { title: 'Contact Us', component: AboutPage},
      ];

      this.rootPage = HappeningPage;
    }

    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      // let nav = this.app.getComponent('nav');
      // console.log('Nav is: ', this.nav);
      this.nav.push(page.component);
    }
}
