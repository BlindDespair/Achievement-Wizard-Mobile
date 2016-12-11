import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CategoryGroup} from "../../../shared/achievements.model";

@Component({
  selector: 'app-category-group-item',
  templateUrl: 'category-group-item.component.html'
})
export class CategoryGroupItemComponent implements OnInit {

  @Input() categoryGroup: CategoryGroup;
  @Output() categoryGroupOpened: EventEmitter<CategoryGroup>;

  constructor() {
    this.categoryGroupOpened = new EventEmitter<CategoryGroup>();
  }

  ngOnInit() {
  }

  listToggle(){
    this.categoryGroupOpened.emit(this.categoryGroup);
  }
}
