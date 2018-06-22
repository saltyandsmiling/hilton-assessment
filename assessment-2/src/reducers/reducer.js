import * as types from '../constants/actionTypes';

const initialState = {
  ability: [true, true, true],
};

const reducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  let abilityCopy;

  switch (action.type) {
    case types.TOGGLE_ROOM:
      const ind = action.payload;
      abilityCopy = state.ability.slice();
      stateCopy.ability = abilityCopy;
      const boolState = !abilityCopy[ind];
      if (!boolState) {
        for (let i = ind; i >= 0; i -= 1) {
          abilityCopy[i] = boolState;
        }
      } else {
        for (let i = ind; i < abilityCopy.length; i += 1) {
          abilityCopy[i] = boolState;
        }
      }

      return stateCopy;

    default:
      return state;
  }
};

export default reducer;
