import Cookies from 'cookies';
import JsCookie from 'js-cookie';

import {PartialNextContext} from '~/types';

import {CookieOptions} from './constants';
import {CookieNameEnum, CookieValue} from './types';

const CookiesService = {
  get: (name: CookieNameEnum): CookieValue => {
    return JsCookie.get(name) as CookieValue;
  },
  set: (name: CookieNameEnum, value: string): void => {
    const options = CookieOptions[name];
    JsCookie.set(name, value, options);
  },
  remove: (name: CookieNameEnum): void => {
    const options = CookieOptions[name];
    JsCookie.remove(name, options);
  },
  getServerSideCookie: ({req}: PartialNextContext, name: CookieNameEnum): string | null => {
    return req?.cookies[name] as CookieValue;
  },
  setServerSideCookie: (
    {req, res}: PartialNextContext,
    name: CookieNameEnum,
    value?: string,
  ): void => {
    if (req && res) {
      const cookies = new Cookies(req, res);
      const options = CookieOptions[name] as Cookies.SetOption;
      cookies.set(name, value, options);
    }
  },
  getFlexibleCookie: (ctx: PartialNextContext | undefined, name: CookieNameEnum): string | null => {
    return ctx ? CookiesService.getServerSideCookie(ctx, name) : CookiesService.get(name);
  },
};

export default CookiesService;
