import * as types from '../constants/actionTypes';

const initialState = {
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
  ],
};

const reducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  const roomStateCopy = [];
  stateCopy.roomState.forEach((el) => {
    roomStateCopy.push({ ...el });
  });
  stateCopy.roomState = roomStateCopy;

  switch (action.type) {
    case types.TOGGLE_ROOM:
      const index = action.payload;
      const boolState = !roomStateCopy[index].ability;
      if (!boolState) {
        for (let i = index; i >= 0; i -= 1) {
          roomStateCopy[i].ability = boolState;
        }
      } else {
        for (let i = index; i < roomStateCopy.length; i += 1) {
          roomStateCopy[i].ability = boolState;
        }
      }
      return stateCopy;

    case types.HANDLE_CHANGE:
      const { ind, person, val } = action.payload;
      roomStateCopy[ind][person] = val;
      return stateCopy;

    default:
      return state;
  }
};

export default reducer;
