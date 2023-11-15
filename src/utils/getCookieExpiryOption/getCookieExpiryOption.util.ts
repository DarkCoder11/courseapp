import {CookieAttributes} from 'js-cookie';

import {IsBrowser, OneDayMilliseconds} from '~/constants';

const getCookieExpiryOption = (days: number): CookieAttributes => {
  const clientOption = {
    expires: days,
  };
  const serverOption = {
    maxAge: OneDayMilliseconds * days,
  };

  return IsBrowser ? clientOption : serverOption;
};

export default getCookieExpiryOption;
