import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgRedux} from "ng2-redux";
import {MyAppState} from "../../store";
import {INCREMENT, SET_REQUIRED, UPDATE_VALUES} from "../../actions";
import {Message} from "../../model/message";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit, OnDestroy {

  //@select form redux will return observable that can be used in async pipe
  //select looks for variable name inside store
  //this shitty select is not working!...
  // @select() counter;
  counter2: number;
  message: Message;
  private reduxSubscription;

  constructor(private ngRedux: NgRedux<MyAppState>) {

    //implementation below requires unsubscribe to prevent memory leak!
    // better way to get observable and use async pipe in html
    this.reduxSubscription = ngRedux.subscribe(() => {
      let store = ngRedux.getState();
      this.counter2 = store.counter;
      this.message = store.message;
    });

    //better way to use redux is to use async pipe so code above wont be needed! - but shitty select decorator doesnt work
  }

  ngOnInit(): void {
  }

  increment() {
    //if action has extra date dispatch action object may contain body
    //this code only save state to store
    this.ngRedux.dispatch({type: INCREMENT});

    //read state from store
  }

  setRequired() {
    this.ngRedux.dispatch({type: SET_REQUIRED});
  }

  update() {
    let newValues = {
      text: Math.random().toString(36).substring(7),
      options: {
        level: 'DEBUG',
        required: !this.message.options.required
      }
    };
    this.ngRedux.dispatch({type: UPDATE_VALUES, body: newValues});
  }

  ngOnDestroy(): void {
    this.reduxSubscription.unsubscribe;
  }


}
