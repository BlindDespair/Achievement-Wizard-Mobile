import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Account, CategoryGroup, AccountAchievement} from "./achievements.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AchievementsApiService {

  constructor(private http: Http) {
  }

  getAccount(apiKey: string): Observable<Account> {
    return this.getAccountJson(apiKey);
  }

  handleError(err: any) {
    return Observable.throw(err.message || err);
  }

  getAchievements(): Observable<CategoryGroup[]>{
    return this.getAchievementsJson();
  }

  getAccountAchievements(apiKey): Observable<AccountAchievement[]>{
    return this.getAccountAchievementsJson(apiKey);
  }

  private getAchievementsJson(): Observable<CategoryGroup[]>{
    return this.http.get('https://api.gw2efficiency.com/achievements?ids=all',)
      .map(res => res.json())
      .do(res => console.log(res))
      .catch(this.handleError);
  }
  private getAccountJson(apiKey: string): Observable<Account> {
    return this.http.get(`https://api.guildwars2.com/v2/account?access_token=${apiKey}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private getAccountAchievementsJson(apiKey):Observable<AccountAchievement[]>{
    return this.http.get(`https://api.guildwars2.com/v2/account/achievements?access_token=${apiKey}`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
