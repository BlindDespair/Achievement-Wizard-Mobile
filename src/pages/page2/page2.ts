import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {CategoryGroup} from "../../app/shared/achievements.model";
import {Page3} from "../page3/page3";

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  categoryGroup: CategoryGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.categoryGroup = navParams.get('categoryGroup');
  }

  openCategory(category) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page3, {
      category: category
    });
  }
}
