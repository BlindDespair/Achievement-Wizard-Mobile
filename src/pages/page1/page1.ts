import {Component, ViewChild, ElementRef} from '@angular/core';

import {NavController, LoadingController, Loading} from 'ionic-angular';
import {CategoryGroup, Account, AccountAchievement} from "../../app/shared/achievements.model";
import {Page2} from "../page2/page2";
import {AchievementsApiService} from "../../app/shared/achievements-api.service";
import {Observable} from "rxjs";
import {AchievementPage} from "../achievement-page/achievement-page";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  @ViewChild('searchRequest') searchInput: ElementRef;
  isAuthorized: boolean;
  account: Account;
  achievementsApiService: AchievementsApiService;
  error: any;
  categoryGroups: CategoryGroup[];
  accountAchievements: AccountAchievement[];
  loader: Loading;
  accountLoaded: boolean;
  dataLoaded: boolean;
  isLoaderDismissed: boolean;
  isSearching: boolean;
  searching: Observable<any>;



  constructor(public navCtrl: NavController, public loadingController: LoadingController, achievementsApiService: AchievementsApiService) {
    this.isAuthorized = false;
    this.accountLoaded = false;
    this.dataLoaded = false;
    this.isLoaderDismissed = true;
    this.isSearching = false;
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
  loadAccountAchievements(){
    this.achievementsApiService.getAccountAchievements(localStorage.getItem('api_key')).subscribe(
      res => {
        this.accountAchievements = res;
      },
      err => {
      });
  }

  openSearch(){
    this.isSearching = true;
    this.searching = Observable.fromEvent(this.searchInput.nativeElement, 'keyup');
    console.log(this.searching);
  }
  closeSearch(value: string){
    if(value.length === 0){
      this.isSearching = false;
    }
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
  navToAchievementPage(achievementData: any){
    console.log(achievementData.achievement, achievementData.accountAchievementCount, achievementData.currentTier);
    this.navCtrl.push(AchievementPage,{
      achievement: achievementData.achievement,
      accountAchievementCount: achievementData.accountAchievementCount,
      currentTier: achievementData.currentTier
    })
  }
}
