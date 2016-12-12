import {OnInit, Component, Input} from "@angular/core";
import {Achievement, Tier} from "../../shared/achievements.model";

@Component({
  selector: 'app-achievement-page-content',
  templateUrl: 'achievement-page-content.component.html'
})
export class AchievementPageContentComponent implements OnInit {

  @Input() achievement: Achievement;
  @Input() accountAchievementCount: number;
  @Input() currentTier: Tier;

  constructor(){}

  ngOnInit(){}

}
