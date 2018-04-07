//@flow
import * as types from '../actions/actionTypes';
import type { Action } from '../model';
import initialState from './initialState';

const season = (
  state: Object = initialState.season,
  action: Action
): Object => {
  console.log(state);
  switch (action.type) {
    case types.NEW_SEASON_STARTED:
      return Object.assign({}, state, {
        season: {
          name: action.season.name,
          matchWeek: action.season.matchWeek,
        },
        weekComplete: false,
      });
    case types.ADVANCE_WEEK:
      return Object.assign({}, state, {
        weekComplete: false,
        season: {
          matchWeek: action.season.matchWeek,
          name: state.season.name,
        },
      });
    case types.SIM_WEEK_SUCCESS:
      return Object.assign({}, state, {
        weekComplete: true,
      });
    case types.INIT:
      return state;
    default:
      return state;
  }
};

export default season;
