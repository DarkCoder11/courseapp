import {createSelector} from '@reduxjs/toolkit';

import {UserState} from '~/redux/slices/user/types';
import {RootState} from '~/redux/types';

const selectUser = (state: RootState): UserState => state.user;

export const selectUserData = createSelector(selectUser, (user) => user?.data);
