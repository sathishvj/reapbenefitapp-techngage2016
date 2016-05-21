import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the DiscoverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/addevent/addevent.html',
})
export class AddEventPage {

  public items: any;

  constructor(public nav: NavController) {
    this.nav = nav;

  }
}
