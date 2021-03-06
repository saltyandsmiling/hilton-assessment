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
    case types.TOGGLE_ROOM: {
      const ind = action.payload;
      const bool = !roomStateCopy[ind].ability;
      // toggles room instance state based on user selections
      if (!bool) {
        for (let i = ind; i > 0; i -= 1) {
          roomStateCopy[i].ability = bool;
        }
      } else {
        for (let i = ind; i < roomStateCopy.length; i += 1) {
          roomStateCopy[i].ability = bool;
          roomStateCopy[i].adults = 1;
          roomStateCopy[i].children = 0;
        }
      }
      return stateCopy;
    }

    case types.HANDLE_CHANGE: {
      const { ind, person, val } = action.payload;
      roomStateCopy[ind][person] = val;
      return stateCopy;
    }

    default:
      return state;
  }
};

export default reducer;
