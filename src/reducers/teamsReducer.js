//@flow
import * as types from '../actions/actionTypes';
import type { Action } from '../model';
import initialState from './initialState';

const teamsReducer = (state: Object = initialState.teams, action: Action) => {
  console.log(state)
  switch (action.type) {
    case types.LOAD_TEAMS_SUCCESS:
      console.log('Requesting teams')
      return action.teams;
    default:
      console.log('Unknown action type ' + action.type)
      return state;
  }
}

export default teamsReducer;
