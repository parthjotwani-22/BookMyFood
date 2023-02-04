import types from './types';

export const perFound = resposejson => {
  //console.log('Data in Action', resposejson);
  return dispatch => {
    dispatch({type: types.perFound, payload: {resposejson}});
  };
};

export const perNotFound = responseJson => {
  //console.log('No movie Exsist', responseJson);
  return dispatch => {
    dispatch({type: types.perNotFound, payload});
  };
};
