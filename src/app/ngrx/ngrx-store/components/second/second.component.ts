import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectAppUser, selectUserActive} from '../../store/selectors/app.user.selector';
import {AppState} from '../../store/state/app.state';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  appUser$ = this.store.pipe(select(selectAppUser));
  appUserStatus$ = this.store.pipe(select(selectUserActive));

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }
}
