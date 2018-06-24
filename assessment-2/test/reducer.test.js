import * as types from '../src/constants/actionTypes';
import reducer from '../src/reducers/reducer';

const initialStateTestDefault = {
  roomState: [
    {
      ability: true,
      adults: 1,
      children: 0,
    },
    {
      ability: true,
      adults: 1,
      children: 0,
    },
    {
      ability: true,
      adults: 1,
      children: 0,
    },
    {
      ability: true,
      adults: 1,
      children: 0,
    },
  ],
};

const initialStateTestWithFalse = {
  roomState: [
    {
      ability: true,
      adults: 1,
      children: 0,
    },
    {
      ability: false,
      adults: 1,
      children: 0,
    },
    {
      ability: false,
      adults: 1,
      children: 0,
    },
    {
      ability: true,
      adults: 1,
      children: 0,
    },
  ],
};

describe('reducers', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialStateTestDefault);
  });
})

describe('TOGGLE_ROOM', () => {
  it('should toggle ability to from true to false for given index and prior indexes, not' +
    ' including index 0', () => {
    expect(reducer(initialStateTestDefault, {
      type: types.TOGGLE_ROOM,
      payload: 2,
    })).toEqual(initialStateTestWithFalse);
  });

  it('should toggle ability from false to true for all instances after the index provided', () => {
    expect(reducer(initialStateTestWithFalse, {
      type: types.TOGGLE_ROOM,
      payload: 1,
    })).toEqual(initialStateTestDefault);
  });

  it('should reset defaults when room is disabled for selected room and all room instances after', () => {
    expect(
      reducer({
        roomState: [
          {
            ability: true,
            adults: 1,
            children: 0,
          },
          {
            ability: false,
            adults: 2,
            children: 3,
          },
          {
            ability: false,
            adults: 2,
            children: 3,
          },
          {
            ability: true,
            adults: 1,
            children: 0,
          },
        ],
      }, {
        type: types.TOGGLE_ROOM,
        payload: 1,
      })).toEqual(initialStateTestDefault);
  });
});

describe('HANDLE_CHANGE', () => {
  it('should update roomState based on user selection', () => {
    expect(reducer(initialStateTestDefault, {
      type: types.HANDLE_CHANGE,
      payload: {
        ind: 0,
        person: 'children',
        val: 3,
      },
    })).toEqual({
      roomState: [
        {
          ability: true,
          adults: 1,
          children: 3,
        },
        {
          ability: true,
          adults: 1,
          children: 0,
        },
        {
          ability: true,
          adults: 1,
          children: 0,
        },
        {
          ability: true,
          adults: 1,
          children: 0,
        },
      ],
    });
  });
});
