import {Action} from '@ngrx/store';
import {AppUser} from '../../model/app-user';

// each action will have class that extends Action and type filed will have value from enum
export enum AppUserActions {
  RandomUser = '[User] generate random data',
  SetUserData = '[User] set user data'

}

interface BaseUserAction {
  payload: AppUser;
}

export class GetRandomUser implements Action, BaseUserAction {
  public readonly type = AppUserActions.RandomUser;
  payload: AppUser;
}

export class SetUserData implements Action, BaseUserAction {
  public readonly type = AppUserActions.SetUserData;

  constructor(public payload: AppUser) {
  }

}

export type UserActions = GetRandomUser | SetUserData;
