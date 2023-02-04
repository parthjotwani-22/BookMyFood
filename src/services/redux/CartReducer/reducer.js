import types from './types';

const newstate = {
  crtData: [],
};

const CartReducer = (state = newstate, action) => {
  switch (action.type) {
    case types.crtFound:
      console.log('Data in My Reducer', action);
      return {
        ...state,
        crtData: action.payload.resposejson,
      };

    case types.crtNotFound:
      return {
        crtData: action.payload.responseJson,
      };

    default:
      return state;
  }
};
export default CartReducer;
