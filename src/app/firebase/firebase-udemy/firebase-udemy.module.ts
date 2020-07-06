import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {environment} from '../../../environments/environment';
import {DisplayFirebaseDataComponent} from './components/display-firebase-data/display-firebase-data.component';
import {AngularFireModule} from '@angular/fire';


@NgModule({
  declarations: [DisplayFirebaseDataComponent],
  exports: [
    DisplayFirebaseDataComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase)
  ]
})
export class FirebaseUdemyModule {
}
