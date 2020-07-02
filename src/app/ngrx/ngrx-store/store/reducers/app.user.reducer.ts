import {AppUserActions, UserActions} from '../actions/app.user.actions';
import {AppUserState, initialUserState} from '../state/app.user.state';
import {AppUser} from '../../model/app-user';

export const appUserReducer = (state = initialUserState, action: UserActions): AppUserState => {
  switch (action.type) {
    // each case should merge old state and new value and return result
    case AppUserActions.RandomUser:
      // perform pure function actions
      console.log('state in reducer ', state);
      return generateRandomState(state);
    default:
      console.log('returning default');
      return state;
  }
};

function generateRandomState(actualState: AppUserState): AppUserState {
  const appUser = new AppUser();
  appUser.userLogin = Math.random().toString(36).substring(10);
  appUser.userNickName = Math.random().toString(36).substring(10);
  appUser.userUuid = Math.random().toString(36).substring(10);
  const result: AppUserState = JSON.parse(JSON.stringify(actualState));
  result.appUser = appUser;
  result.isActive = !actualState.isActive;
  return result;
}
