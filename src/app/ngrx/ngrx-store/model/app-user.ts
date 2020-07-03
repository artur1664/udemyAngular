import {AppUserAuthority} from './app-user-authority';

export class AppUser {
  userLogin: string;
  userUuid: string;
  userNickName?: string;
  authorities: AppUserAuthority[];
}
