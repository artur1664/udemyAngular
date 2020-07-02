import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {FirstComponentComponent} from './components/first-component/first-component.component';
import {appReducers} from './store/reducers/app.reducer';
import {SecondComponent} from './components/second/second.component';


@NgModule({
  declarations: [FirstComponentComponent, SecondComponent],
  exports: [
    FirstComponentComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducers)]
})

export class NgrxStoreModule {
}
