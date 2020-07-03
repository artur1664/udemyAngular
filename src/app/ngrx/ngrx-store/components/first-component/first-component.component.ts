import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {GetRandomUser, SetUserData} from '../../store/actions/app.user.actions';
import {AppState} from '../../store/state/app.state';
import {selectAppUser} from '../../store/selectors/app.user.selector';
import {AppUser} from '../../model/app-user';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit, OnDestroy {

  appUser$ = this.store.pipe(select(selectAppUser));

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
  }

  randomUser() {
    this.store.dispatch(new GetRandomUser());
  }

  setUserData() {
    const newAppUser = new AppUser();
    newAppUser.userLogin = 'new login';
    newAppUser.userNickName = 'new nick';
    newAppUser.userUuid = 'test uuid';
    newAppUser.authorities = [{deprecated: true, authority: 'ROLE_ADMIN'}];
    this.store.dispatch(new SetUserData(newAppUser));
  }

  ngOnDestroy(): void {
  }

}
