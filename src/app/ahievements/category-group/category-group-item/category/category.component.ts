import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Category} from "../../../../shared/achievements.model";

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html'
})
export class CategoryComponent implements OnInit {

  @Output() categoryOpened: EventEmitter<Category>;
  @Input() categories: Category[];

  constructor() {
    this.categoryOpened = new EventEmitter<Category>();
  }

  ngOnInit() {
  }

  openCategory(category: Category){
    this.categoryOpened.emit(category);
  }

}
