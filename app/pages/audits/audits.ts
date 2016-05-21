import {Page, NavController} from 'ionic-angular';
import {WaterAuditLandingPage} from '../wateraudit-landing/wateraudit-landing';

/*
  Generated class for the DiscoverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/audits/audits.html',
})
export class AuditsPage {

  public items: any;

  constructor(public nav: NavController) {
    this.nav = nav;

  }

    openWaterAuditLandingPage() {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      // let nav = this.app.getComponent('nav');
      // console.log('Nav is: ', this.nav);
      this.nav.push(WaterAuditLandingPage);
    }
}
