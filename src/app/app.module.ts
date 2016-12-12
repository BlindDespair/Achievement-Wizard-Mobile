import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SignInFormComponent } from './ahievements/sign-in-form/sign-in-form.component';
import { GreetingUserComponent } from './ahievements/greeting-user/greeting-user.component';
import {AchievementsApiService} from "./shared/achievements-api.service";
import { CategoryGroupComponent } from './ahievements/category-group/category-group.component';
import { CategoryGroupItemComponent } from './ahievements/category-group/category-group-item/category-group-item.component';
import { CategoryComponent } from './ahievements/category-group/category-group-item/category/category.component';
import { CategoryItemComponent } from './ahievements/category-group/category-group-item/category/category-item/category-item.component';
import {Page3} from "../pages/page3/page3";
import {AchievementListComponent} from "./ahievements/achievement-list/achievement-list.component";
import {AchievementItemComponent} from "./ahievements/achievement-list/achievement-item/achievement-item.component";
import {AchievementPage} from "../pages/achievement-page/achievement-page";
import {AchievementPageContentComponent} from "./ahievements/achievement-page-content/achievement-page-content.component";
import {AchievementStatsComponent} from "./ahievements/achievement-stats/achievement-stats.component";

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    AchievementPage,
    SignInFormComponent,
    GreetingUserComponent,
    CategoryGroupComponent,
    CategoryGroupItemComponent,
    CategoryComponent,
    CategoryItemComponent,
    AchievementListComponent,
    AchievementItemComponent,
    AchievementPageContentComponent,
    AchievementStatsComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    AchievementPage
  ],
  providers: [AchievementsApiService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
