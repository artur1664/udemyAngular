import {AppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {AppUserState} from '../state/app.user.state';

const selectUser = (state: AppState) => state.appUserState;

export const selectAppUser = createSelector(
  selectUser,
  (state: AppUserState) => state.appUser
);

export const selectUserActive = createSelector(
  selectUser,
  (state: AppUserState) => state.isActive
);
