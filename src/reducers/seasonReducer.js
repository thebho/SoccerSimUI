//@flow
import * as types from '../actions/actionTypes';
import type { Action } from '../model';
import initialState from './initialState';
import { loadTeams } from '../actions/teams';
import { loadMatches } from '../actions/matches';

const season = (
  state: Object = initialState.season,
  action: Action
): Object => {
  switch (action.type) {
    case types.NEW_SEASON_STARTED:
      
      return Object.assign({}, state, {
        season: {
          name: action.season.name,
          matchWeek: action.season.matchWeek,
        },
      });
    case types.INIT:
      return state;
    default:
      return state;
  }
};

export default season;
