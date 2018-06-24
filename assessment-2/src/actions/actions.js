import * as types from '../constants/actionTypes';

export const toggleRoom = ind => ({
  type: types.TOGGLE_ROOM,
  payload: ind,
});

export const handleChange = (ind, val, person) => ({
  type: types.HANDLE_CHANGE,
  payload: { ind, val, person },
});
