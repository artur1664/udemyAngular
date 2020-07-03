import {AppUserActions, UserActions} from '../actions/app.user.actions';
import {AppUserState, initialUserState} from '../state/app.user.state';
import {cloneDeep} from 'lodash';
import {AppUser} from '../../model/app-user';


export const appUserReducer = (state = initialUserState, action: UserActions): AppUserState => {
  switch (action.type) {
    // each case should merge old state and new value and return result
    case AppUserActions.RandomUser:
      // perform pure function actions
      return generateRandomState(state);
    case AppUserActions.SetUserData:
      // ... returns new object by merging actual and new data but ... performs only shallow copy!!
      // return {...state, appUser: action.payload};
      return updateUserData(state, action.payload);
    default:
      console.log('returning default');
      return state;
  }
};

function generateRandomState(actualState: AppUserState): AppUserState {
  const cloned = cloneDeep(actualState);
  cloned.appUser.userLogin = Math.random().toString(36).substring(10);
  cloned.appUser.userNickName = Math.random().toString(36).substring(10);
  cloned.appUser.userUuid = Math.random().toString(36).substring(10);
  cloned.isActive = !actualState.isActive;
  return cloned;
}

function updateUserData(actualState: AppUserState, payload: AppUser): AppUserState {
  const cloned = cloneDeep(actualState);
  cloned.appUser = payload;
  console.log('are equal ', actualState === cloned);
  return cloned;
}

// **********************************************************************************
// ********************************* important note when not use JSON to copy objects
// **********************************************************************************
// If you do not use Dates, functions, undefined, Infinity, [NaN], RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays
// Typed Arrays or other complex types within your object, a very simple one liner to deep clone an object is:
// JSON.parse(JSON.stringify(object))
