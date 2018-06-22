import * as types from '../constants/actionTypes';

export const toggleRoom = (ind) => ({
  type: types.TOGGLE_ROOM,
  payload: ind,
});
