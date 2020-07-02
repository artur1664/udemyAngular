import {Action} from '@ngrx/store';

// each action will have class that extends Action and type filed will have value from enum
export enum AppUserActions {
  RandomUser = '[User] generate random data'
}

export class GetRandomUser implements Action {
  public readonly type = AppUserActions.RandomUser;
}

export type UserActions = GetRandomUser;
