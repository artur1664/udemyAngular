import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgrxStoreModule} from './ngrx/ngrx-store/ngrx-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgrxStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
