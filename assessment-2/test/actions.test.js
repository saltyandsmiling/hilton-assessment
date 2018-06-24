import * as actions from '../src/actions/actions';
import * as types from '../src/constants/actionTypes';

describe('actions', () => {
  it('should create an action to toggle room state', () => {
    const ind = 0;
    const expectedAction = {
      type: types.TOGGLE_ROOM,
      payload: ind,
    };
    expect(actions.toggleRoom(ind)).toEqual(expectedAction);
  });

  it('should create an action to handle state changes to room instance', () => {
    const ind = 0;
    const val = 0;
    const person = 'adult';
    const payload = { ind, val, person };
    const expectedAction = {
      type: types.HANDLE_CHANGE,
      payload: payload,
    };
    expect(actions.handleChange(ind, val, person)).toEqual(expectedAction);
  });
});
