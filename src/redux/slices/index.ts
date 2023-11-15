import {combineReducers} from '@reduxjs/toolkit';

import user from './user/slice';

export const slices = combineReducers({
  user,
});

export * from './user';
