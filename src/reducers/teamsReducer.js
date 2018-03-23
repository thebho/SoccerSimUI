//@flow
import * as types from '../actions/actionTypes';
import type { Action } from '../model';
import initialState from './initialState';

const teamsReducer = (state: Object = initialState.teams, action: Action) => {
  switch (action.type) {
    case types.LOAD_TEAMS_SUCCESS:
      return Object.assign({}, state, {
        teams: action.teams,
      });
    case types.LOAD_TEAMS_FAILURE:
      return Object.assign({}, state, {
        teams: [],
      });
    case types.INIT:
      return state;
    default:
      return state;
  }
};

export default teamsReducer;
