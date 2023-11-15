import {AxiosRequestConfig} from 'axios';

import {CookiesService} from '~/services';
import {CookieNameEnum} from '~/services/cookies/types';
import {PartialNextContext} from '~/types';

const getAuthHeaders = (ctx?: PartialNextContext): AxiosRequestConfig['headers'] => {
  const tokenValue = CookiesService.getFlexibleCookie(ctx, CookieNameEnum.Token);

  return tokenValue
    ? {
        Authorization: `Bearer ${tokenValue}`,
      }
    : {};
};

export default getAuthHeaders;
