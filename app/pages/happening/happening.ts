import {Page, NavController} from 'ionic-angular';
import {AddEventPage} from '../addevent/addevent';

/*
  Generated class for the DiscoverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/happening/happening.html',
})
export class HappeningPage {

  public items: any;

  constructor(public nav: NavController) {
    this.nav = nav;

    this.items = [
        {
          name: "BWSSB",
          phone: ["123456", "78905"],
          notes: "For water problems, give them a call and say h20."
        },
        {
          name: "KSRTC",
          phone: ["+12 123456", "+12 78905"],
          notes: "For bus problems, give them a call and say vroom vroom."
        }
    ];
  }


  openAddEventPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // let nav = this.app.getComponent('nav');
    // console.log('Nav is: ', this.nav);
    this.nav.push(AddEventPage);
  }
}
