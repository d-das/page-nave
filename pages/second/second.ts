import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThirdPage } from '../third/third';


/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

    private firstParam;
    private secondParam;
    private allParams;


  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.firstParam = this.navParams.get('firstParamName');
    this.secondParam = this.navParams.get('secondParamName');
    this.allParams = this.navParams.data;

  }

  goToThirdPage(){
    this.navCtrl.push(ThirdPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
    document.getElementById("param1").innerHTML=this.firstParam;
  }

}
