import { UserActionTypes } from './user.types';

export const setCurrenctUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});