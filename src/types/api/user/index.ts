import {IDbRecord} from '~/types';

// Response interfaces
export interface IStartCourseResponse {
  user: IUser;
  token: string;
}

// Entity interfaces
export interface IUser extends IDbRecord {
  email: string;
  fullName: string;
  updatesViaEmail: boolean;
}
