//@flow
import * as types from '../actions/actionTypes';
import type { Action } from '../model';
import initialState from './initialState';

const matches = (
  state: Object = initialState.matches,
  action: Action
): Object => {
  switch (action.type) {
    case types.LOAD_MATCHES_SUCCESS:
      return Object.assign({}, state, {
        matches: action.matches,
      });
    case types.LOAD_MATCHES_FAILURE:
      return Object.assign({}, state, {
        matches: [],
      });
    case types.INIT:
      return state;
    default:
      return state;
  }
};

export default matches;
