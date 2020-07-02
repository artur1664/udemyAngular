import {AppUserState, initialUserState} from './app.user.state';

export interface AppState {
  appUserState: AppUserState;
}

export const initialAppState: AppState = {
  appUserState: initialUserState
};

export function getInitialAppState(): AppState {
  return initialAppState;
}
