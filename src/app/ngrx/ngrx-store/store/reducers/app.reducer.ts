import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {appUserReducer} from './app.user.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  appUserState: appUserReducer
};
