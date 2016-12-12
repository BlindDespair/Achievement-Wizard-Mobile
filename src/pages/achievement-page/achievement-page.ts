import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {Achievement, Tier} from "../../app/shared/achievements.model";

@Component({
  selector: 'achievement-page',
  templateUrl: 'achievement-page.html'
})
export class AchievementPage {
  achievement: Achievement;
  accountAchievementCount: number;
  currentTier: Tier;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.achievement = navParams.get('achievement');
    this.accountAchievementCount = navParams.get('accountAchievementCount');
    this.currentTier = navParams.get('currentTier');
  }

  ngOnInit(){}

}

