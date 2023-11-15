import {AxiosError} from 'axios';

import {IErrorResponse} from '~/types';

const getErrorsResponse = (err: unknown): IErrorResponse => {
  return (err as AxiosError).response?.data as IErrorResponse;
};

export default getErrorsResponse;
