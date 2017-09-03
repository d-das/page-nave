import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public paramsForSecondPage = {
    firstParamName: 'firstParamValue',
    secondParamName: 'secondParamValue'
  };

  constructor(public navCtrl: NavController) {
  }

  gotToSecondPage() {
    this.navCtrl.push(SecondPage, {
      firstParamName: 'firstParamValue',
      secondParamName: 'secondParamValue'
    });
  }


}
