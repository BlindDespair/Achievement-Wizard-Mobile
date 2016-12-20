import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Category, AccountAchievement, Achievement} from "../../shared/achievements.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html'
})
export class AchievementListComponent implements OnInit {

  @Input() currentlyOpenedCategory: Category;
  @Input() accountAchievements: AccountAchievement[];
  @Input() achievements: Achievement[];
  @Output() achievementOpened: EventEmitter<any>;

  constructor() {
    this.achievementOpened = new EventEmitter();
  }

  ngOnInit() {
  }

  get sortedAchievements(){
    return this.achievements
      .map(achievement => achievement)
      .sort((a, b) => {
        let currentAchievementCountA = 0;
        let currentAchievementCountB = 0;
        Observable.from(this.accountAchievements)
          .filter(accountAchievement => accountAchievement.id === a.id)
          .subscribe(res => currentAchievementCountA = res.current);
        Observable.from(this.accountAchievements)
          .filter(accountAchievement => accountAchievement.id === b.id)
          .subscribe(res => currentAchievementCountB = res.current);
        if(currentAchievementCountA/a.tiers[a.tiers.length-1].count > currentAchievementCountB/b.tiers[b.tiers.length-1].count) return -1;
        else if(currentAchievementCountA/a.tiers[a.tiers.length-1].count < currentAchievementCountB/b.tiers[b.tiers.length-1].count) return 1;
        else return 0;
      })
  }

  openAchievement(achievementData){
    this.achievementOpened.emit({achievement: achievementData.achievement, accountAchievementCount: achievementData.accountAchievementCount, currentTier: achievementData.currentTier});
  }
}
