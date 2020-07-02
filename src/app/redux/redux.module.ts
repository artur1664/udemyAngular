import {isDevMode, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevToolsExtension, NgRedux, NgReduxModule} from "ng2-redux";
import {INITIAL_STATE, MyAppState, rootReducer} from "./store";
import {FirstComponentComponent} from './components/first-component/first-component.component';
import {SecondComponentComponent} from './components/second-component/second-component.component';


@NgModule({
  declarations: [FirstComponentComponent, SecondComponentComponent],
  exports: [
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    CommonModule,
    NgReduxModule
  ]
})
export class ReduxModule {

  constructor(ngRedux: NgRedux<MyAppState>, devTools: DevToolsExtension) {
    let enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
