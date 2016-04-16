import {Page,NavController} from 'ionic-angular';
// import {ItemDetailsPage} from '../item-details/item-details';

import {TremClass} from '../trems/trems';
import {Login} from '../login/login';

@Page({
  templateUrl: 'build/pages/contact/contact.html'
})
export class Contact {
  
  constructor(public nav: NavController){}
 goTrems(){
   this.nav.push(TremClass)
 }
 
}
