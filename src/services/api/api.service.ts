import axios, {AxiosRequestConfig} from 'axios';

import {getAuthHeaders} from '~/utils';

import * as Requests from './requests';
import {RequestOptions} from './types';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
});

const ApiService = {
  get: async <T>(
    path: string,
    config?: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> => {
    const headers = getAuthHeaders(options?.ctx);
    const {data} = await axiosInstance.get<T>(path, {headers, ...config});

    return data;
  },
  post: async <T>(path: string, body: object = {}, options?: RequestOptions): Promise<T> => {
    const headers = getAuthHeaders(options?.ctx);
    const {data} = await axiosInstance.post<T>(path, body, {headers});

    return data;
  },
  put: async <T>(path: string, body: object = {}, options?: RequestOptions): Promise<T> => {
    const headers = getAuthHeaders(options?.ctx);
    const {data} = await axiosInstance.put<T>(path, body, {headers});

    return data;
  },
  patch: async <T>(path: string, body: object = {}): Promise<T> => {
    const headers = getAuthHeaders();
    const {data} = await axiosInstance.patch<T>(path, body, {headers});

    return data;
  },
  delete: async <T>(path: string, config?: AxiosRequestConfig): Promise<T> => {
    const headers = getAuthHeaders();
    const {data} = await axiosInstance.delete<T>(path, {headers, ...config});

    return data;
  },
  ...Requests.UserRequests,
};

export default ApiService;
