import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message} from "../../model/message";
import {NgRedux} from "ng2-redux";
import {MyAppState} from "../../store";

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit, OnDestroy {

  message: Message;
  private reduxSubscription;

  constructor(private ngRedux: NgRedux<MyAppState>) { }

  ngOnInit(): void {
    this.reduxSubscription = this.ngRedux.subscribe(() => {
      let store = this.ngRedux.getState();
      this.message = store.message;
    });
  }

  ngOnDestroy(): void {
    this.reduxSubscription.unsubscribe;
  }

}
