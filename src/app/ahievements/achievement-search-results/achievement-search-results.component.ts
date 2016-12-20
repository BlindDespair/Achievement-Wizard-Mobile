import {Component, Input, Output, EventEmitter, OnDestroy} from "@angular/core";
import {CategoryGroup, AccountAchievement, Achievement} from "../../shared/achievements.model";
import {Observable, Subscription} from "rxjs";
@Component({
  selector: 'app-achievement-search-results',
  templateUrl: 'achievement-search-results.component.html'
})
export class AchievementSearchResultsComponent implements OnDestroy{

  @Output() searchOpened: EventEmitter<any>;
  @Output() achievementOpened: EventEmitter<any>;
  @Input() categoryGroups: CategoryGroup[];
  @Input() accountAchievements: AccountAchievement[];
  @Input() searching: Observable<any>;

  searchingSubscription: Subscription;
  searchingRequest: string;
  foundAchievements: Achievement[];

  constructor(){
    this.searchOpened = new EventEmitter();
    this.achievementOpened = new EventEmitter();
    this.foundAchievements = [];
  }

  ngOnInit() {
    this.searchOpened.emit();
    this.searchingSubscription = this.searching.subscribe(
      e => {
        this.searchingRequest = e.target.value;
        this.foundAchievements = [];
        return Observable.from(this.categoryGroups)
          .subscribe(
            res => {
              return Observable.from(res.categories)
                .subscribe(
                  res => Observable.from(res.achievements)
                    .filter(res => res.name.toLocaleLowerCase().indexOf(this.searchingRequest.toLocaleLowerCase()) !== -1 && this.searchingRequest.length > 2)
                    .subscribe(
                      res => {
                        if(this.foundAchievements.indexOf(res) === -1){
                          this.foundAchievements.push(res)
                        }
                        return console.log(this.foundAchievements);
                      })
                )
            }
          )
      }
    )
  }
  ngOnDestroy(){
    this.searchingSubscription.unsubscribe();
  }
  openAchievement(achievementData){
    this.achievementOpened.emit({achievement: achievementData.achievement, accountAchievementCount: achievementData.accountAchievementCount, currentTier: achievementData.currentTier});
  }
}
