/**
 * Created by Иван on 12.12.2016.
 */
import {Component, Input} from "@angular/core";
import {Achievement, Tier} from "../../shared/achievements.model";
@Component({
  selector: 'app-achievement-stats',
  templateUrl: 'achievement-stats.component.html'
})
export class AchievementStatsComponent{

  @Input() achievement: Achievement;
  @Input() currentTier: Tier;
  @Input() accountAchievementCount: number;
  totalAchievementPoints: number;
  totalAchievementPointsEarned: number;

  constructor(){
    this.totalAchievementPoints = 0;
    this.totalAchievementPointsEarned = 0;
  }

  ngOnInit() {
    this.achievement.tiers.map(tier => {
      if(this.accountAchievementCount >= tier.count )
        this.totalAchievementPointsEarned += tier.points
      return this.totalAchievementPoints += tier.points;
    })
  }
}
