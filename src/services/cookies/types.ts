import {CookieAttributes} from 'js-cookie';

export enum CookieNameEnum {
  Token = 'token',
  User = 'user',
}

export type CookieValue = string | null;

export type CookieOptionsType = {[key: string]: CookieAttributes};
