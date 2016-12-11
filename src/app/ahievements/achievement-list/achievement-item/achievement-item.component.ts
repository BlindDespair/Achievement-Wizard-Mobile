import {Component, OnInit, Input} from '@angular/core';
import {Achievement, AccountAchievement, Tier} from "../../../shared/achievements.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-achievement-item',
  templateUrl: 'achievement-item.component.html'
})
export class AchievementItemComponent implements OnInit {

  @Input() achievement: Achievement;
  @Input() accountAchievements: AccountAchievement[];
  accountAchievement: AccountAchievement;
  currentTier: Tier;
  accountAchievementCount: number;

  constructor() {}

  ngOnInit() {
    Observable.from(this.accountAchievements)
      .filter(res => res.id === this.achievement.id)
      .subscribe(
        res => {
          this.accountAchievement = res;
          this.accountAchievementCount = res.current;
          return console.log(this.accountAchievement)
        },
        () => {},
        () => {
          if(this.accountAchievement === undefined){
            this.accountAchievementCount = 0;
          }
          return Observable.from(this.achievement.tiers)
            .filter(res => this.accountAchievementCount <= res.count)
            .subscribe(
              res => this.currentTier = res,
              () => {},
              () => console.log(this.currentTier, this.accountAchievementCount)
            )
        });
  }

}
