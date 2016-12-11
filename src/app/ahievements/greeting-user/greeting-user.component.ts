import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Account} from "../../shared/achievements.model";

@Component({
  selector: 'app-greeting-user',
  templateUrl: 'greeting-user.component.html'
})
export class GreetingUserComponent implements OnInit {

  @Input() account: Account;
  @Output() greeting: EventEmitter<any>;
  @Output() logedout: EventEmitter<any>;

  constructor() {
    this.greeting = new EventEmitter();
    this.logedout = new EventEmitter();
  }

  ngOnInit() {
    this.greeting.emit();
  }

  logout(){
    this.logedout.emit();
  }
}
