// @flow
import MatchesAPI from '../api/matchesapi';
import * as types from './actionTypes';
import { loadTeams } from './teams';

export const loadMatchesSuccess = (matches: Object): Object => {
  return {
    type: types.LOAD_MATCHES_SUCCESS,
    matches,
  };
};

export const loadMatchesFailure = (): Object => {
  return {
    type: types.LOAD_MATCHES_FAILURE,
  };
};

export const simWeekSuccess = (): Object => {
  return {
    type: types.SIM_WEEK_SUCCESS,
  };
};

export const loadMatches = (week: string, seasonName: string) => {
  return (dispatch: Function) => {
    return MatchesAPI.getMatchWeek(week, seasonName)
      .then(matches => {
        dispatch(loadMatchesSuccess(matches));
      })
      .catch(error => {
        console.error('Load Matches: ' + error);
        dispatch(loadMatchesFailure());
      });
  };
};

export const simWeek = (week: number, seasonName: string): Object => {
  return (dispatch: Function) => {
    return MatchesAPI.simMatchWeek(week, seasonName)
      .then((response: Object) => {
        dispatch(loadMatches(week.toString(), seasonName));
        dispatch(loadTeams(seasonName));
        return dispatch(simWeekSuccess());
      })
      .catch(error => {
        console.error('Load Matches: ' + error);
      });
  };
};
