import * as types from '../constants/actionTypes';

const initialState = {
  ability: true,
};

const reducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case types.TOGGLE_ROOM:
      stateCopy.ability = !stateCopy.ability;
      return stateCopy;

    default:
      return state;
  }
};

export default reducer;
