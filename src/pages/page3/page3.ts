import { Component } from '@angular/core';

import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {Category, AccountAchievement} from "../../app/shared/achievements.model";
import {AchievementsApiService} from "../../app/shared/achievements-api.service";

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  category: Category;
  accountAchievemetns: AccountAchievement[];
  loader;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController, private achievementsApiService: AchievementsApiService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.category = navParams.get('category');
    this.achievementsApiService = achievementsApiService;
  }

  ngOnInit(){
    this.loader = this.loadingController.create();
    this.loader.present();
    this.achievementsApiService.getAccountAchievements(localStorage.getItem('api_key')).subscribe(res =>
    {
      this.accountAchievemetns = res;
      return this.loader.dismiss();
    });
  }

}
