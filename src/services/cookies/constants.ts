import {getCookieExpiryOption} from '~/utils/getCookieExpiryOption';

import {CookieNameEnum, CookieOptionsType} from './types';

export const CookieOptions: CookieOptionsType = {
  [CookieNameEnum.Token]: {
    ...getCookieExpiryOption(7),
    httpOnly: false,
  },
};
