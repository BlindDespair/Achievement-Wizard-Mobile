import {Component} from '@angular/core';

import {NavController, LoadingController, Loading} from 'ionic-angular';
import {CategoryGroup, Account} from "../../app/shared/achievements.model";
import {Page2} from "../page2/page2";
import {AchievementsApiService} from "../../app/shared/achievements-api.service";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  isAuthorized: boolean;
  account: Account;
  achievementsApiService: AchievementsApiService;
  error: any;
  categoryGroups: CategoryGroup[];
  loader: Loading;
  accountLoaded: boolean;
  dataLoaded: boolean;
  isLoaderDismissed: boolean;



  constructor(public navCtrl: NavController, public loadingController: LoadingController, achievementsApiService: AchievementsApiService) {
    this.isAuthorized = false;
    this.accountLoaded = false;
    this.dataLoaded = false;
    this.isLoaderDismissed = true;
    this.achievementsApiService = achievementsApiService;

  }


  ngOnInit() {
    if(localStorage.getItem('api_key')){
      this.isAuthorized = true;
    }
    if(this.isAuthorized){
      this.loader = this.loadingController.create();
      this.loader.present();
      this.isLoaderDismissed = false;
    }
  }

  onAutorized(apiKey: string){
    this.error = undefined;
    this.loader = this.loadingController.create();
    this.loader.present();
    this.isLoaderDismissed = false;
    this.achievementsApiService.getAccount(apiKey).subscribe(
      () => {},
      err => {
        this.error = err;
        this.dismissLoader(err);
        return console.log(this.error);},
      () => {
        this.isAuthorized = true;
        localStorage.setItem('api_key', apiKey);
        return console.log('done');
      });
  }

  onLogout(){
    localStorage.removeItem('api_key');
    this.isAuthorized = false;
    this.accountLoaded = false;
    this.dataLoaded = false;
  }

  onGreeting(){
    this.achievementsApiService.getAccount(localStorage.getItem('api_key')).subscribe(
      res => {
        this.account = res;
        this.accountLoaded = true;
        return this.dismissLoader();
      },
      err =>{
        return this.dismissLoader(err);
      });
  }

  onLoadData(){
    this.achievementsApiService.getAchievements().subscribe(
      res => {
        this.categoryGroups = res;
        this.dataLoaded = true;
        return this.dismissLoader();
      },
      err => {
        return this.dismissLoader(err);
      });
  }

  dismissLoader(error?){
    if(this.accountLoaded && this.dataLoaded || error && !this.isLoaderDismissed){
      this.loader.dismiss();
      this.isLoaderDismissed = true;
      if(this.isAuthorized && error){
        alert("Connection problems");
      }
    }
  }
  retry(){
    this.onGreeting();
    this.onLoadData();
  }

  navToCategoryGroup(categoryGroup: CategoryGroup){
    console.log(categoryGroup);
    this.navCtrl.push(Page2,
      {
        categoryGroup: categoryGroup
      });
  }
}
