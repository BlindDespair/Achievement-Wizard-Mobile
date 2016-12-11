import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {CategoryGroup} from "../../shared/achievements.model";

@Component({
  selector: 'app-category-group',
  templateUrl: 'category-group.component.html'
})
export class CategoryGroupComponent implements OnInit {

  @Output() loadCategoryGroupData:EventEmitter<any>;
  @Output() categoryGroupOpened: EventEmitter<CategoryGroup>;
  @Input() categoryGroups:CategoryGroup[];

  constructor() {
    this.loadCategoryGroupData = new EventEmitter();
    this.categoryGroupOpened = new EventEmitter<CategoryGroup>();
  }

  ngOnInit() {
    this.loadCategoryGroupData.emit();
  }

  openCategoryGroup(categoryGroup: CategoryGroup){
    this.categoryGroupOpened.emit(categoryGroup);
  }
}
