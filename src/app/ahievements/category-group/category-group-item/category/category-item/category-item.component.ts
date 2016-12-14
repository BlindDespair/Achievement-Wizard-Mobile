import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Category} from "../../../../../shared/achievements.model";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-category-item',
  templateUrl: 'category-item.component.html'
})
export class CategoryItemComponent implements OnInit {

  @Output() categoryOpened: EventEmitter<Category>;
  @Input() category: Category;
  iconUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.categoryOpened = new EventEmitter<Category>();
  }

  ngOnInit() {
    let url = this.category.icon;
    this.iconUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openCategory(){
    this.categoryOpened.emit(this.category);
  }
}
