import {GetServerSidePropsContext} from 'next/types';

import {Routes} from '~/constants';
import {CookiesService} from '~/services';
import {CookieNameEnum} from '~/services/cookies/types';

import {EmptyProps, GetProtectedServerSidePropsOptions} from './types';

const getProtectedServerSideProps = <T extends EmptyProps = EmptyProps>(
  options: GetProtectedServerSidePropsOptions = {},
  getServerSidePropsFunc?: (ctx: GetServerSidePropsContext) => Promise<T>,
) => {
  return async (ctx: GetServerSidePropsContext): Promise<{props: T['props']}> => {
    const token = CookiesService.getServerSideCookie(ctx, CookieNameEnum.Token);

    if (options.authenticatedPage && !token) {
      return {
        redirect: {
          destination: Routes.StartCourse,
          permanent: false,
        },
      } as unknown as {props: T['props']};
    } else if (!options.authenticatedPage && token) {
      return {
        redirect: {
          destination: Routes.Dashboard,
          permanent: false,
        },
      } as unknown as {props: T['props']};
    }

    if (getServerSidePropsFunc) {
      return {
        props: {
          ...((await getServerSidePropsFunc(ctx)).props || {}),
        },
      };
    }

    return {
      props: {},
    };
  };
};

export default getProtectedServerSideProps;
