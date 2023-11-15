import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {toast} from 'react-toastify';

import {ApiService, CookiesService} from '~/services';
import {CookieNameEnum} from '~/services/cookies/types';
import {getErrorsResponse} from '~/utils';

import {StartCourseFormShape} from './../../../components/forms/StartCourseForm/types';
import {UserActionPrefixes} from './constants';
import {userActions} from './slice';

export const startCourse = createAsyncThunk(
  UserActionPrefixes.StartCourse,
  async (
    startCourseUserInfo: StartCourseFormShape,
    {dispatch, rejectWithValue, fulfillWithValue},
  ) => {
    try {
      const {user, token} = await ApiService.startCourse(startCourseUserInfo);

      dispatch(userActions.setUserData(user));
      CookiesService.set(CookieNameEnum.Token, token);

      return fulfillWithValue(user);
    } catch (err) {
      const data = getErrorsResponse(err);

      toast.error(data.errors[0] || (err as AxiosError).message);

      return rejectWithValue(data);
    }
  },
);
