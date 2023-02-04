import types from './types';

const newstate = {
  perData: {},
};

const PersonReducer = (state = newstate, action) => {
  switch (action.type) {
    case types.perFound:
      console.log('Data in My Reducer', action);
      return {
        ...state,
        perData: action.payload.resposejson,
      };

    case types.perNotFound:
      return {
        perData: action.payload.responseJson,
      };

    default:
      return state;
  }
};
export default PersonReducer;
