import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Category} from "../../../../../shared/achievements.model";

@Component({
  selector: 'app-category-item',
  templateUrl: 'category-item.component.html'
})
export class CategoryItemComponent implements OnInit {

  @Output() categoryOpened: EventEmitter<Category>;
  @Input() category: Category;
  constructor() {
    this.categoryOpened = new EventEmitter<Category>();
  }

  ngOnInit() {
  }

  openCategory(){
    this.categoryOpened.emit(this.category);
  }
}
