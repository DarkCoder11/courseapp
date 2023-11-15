import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Reducer} from '~/redux/types';
import {CookiesService} from '~/services';
import {CookieNameEnum} from '~/services/cookies/types';
import {IUser} from '~/types';

import * as userThunks from './thunks';
import {UserState} from './types';

const persistedUser = CookiesService.get(CookieNameEnum.User);
const initialUserState: UserState = {
  data: persistedUser ? JSON.parse(persistedUser) : null,
} as const;

const userSlice = createSlice({
  name: Reducer.User,
  initialState: initialUserState,
  reducers: {
    setUserData(state, action: PayloadAction<IUser | null>) {
      state.data = action.payload;
      CookiesService.set(CookieNameEnum.User, JSON.stringify(action.payload));
    },
    logout(state) {
      CookiesService.remove(CookieNameEnum.Token);
      state.data = null;
    },
  },
});

export const userActions = {
  ...userThunks,
  ...userSlice.actions,
};

export default userSlice.reducer;
