import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-display-firebase-data',
  templateUrl: './display-firebase-data.component.html',
  styleUrls: ['./display-firebase-data.component.scss']
})
export class DisplayFirebaseDataComponent implements OnInit, OnDestroy {

  fields$;
  fields: any[];

  destroy$ = new Subject();

  constructor(private db: AngularFirestore) {
  }

  ngOnInit(): void {
    this.db.collection('testColl').valueChanges().pipe(takeUntil(this.destroy$)).subscribe(value => {
      console.log('values from collection: ', value);
      this.fields = value;
    });

    this.fields$ = this.db.collection('testColl').valueChanges();

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addNew() {
    this.db.collection('testColl').add({
      field1: Math.random().toString(36).substring(7),
      field2: Math.random().toString(36).substring(7)
    }).then(value => {
      console.log('promise after add new ', value);
    });
  }
}
