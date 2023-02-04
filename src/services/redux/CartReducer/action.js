import types from './types';

export const crtFound = resposejson => {
  //console.log('Data in Action', resposejson);
  return dispatch => {
    dispatch({type: types.crtFound, payload: {resposejson}});
  };
};

export const crtNotFound = responseJson => {
  //console.log('No movie Exsist', responseJson);
  return dispatch => {
    dispatch({type: types.crtNotFound, payload});
  };
};
