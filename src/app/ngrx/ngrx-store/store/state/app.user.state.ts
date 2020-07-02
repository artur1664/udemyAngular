import {AppUser} from '../../model/app-user';

export interface AppUserState {
  appUser: AppUser;
  isActive: boolean;
}

export const initialUserState: AppUserState = {
  appUser: {userLogin: 'default', userNickName: 'default', userUuid: 'default'},
  isActive: false
};
