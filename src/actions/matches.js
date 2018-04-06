// @flow
import MatchesAPI from '../api/matchesapi';
import * as types from './actionTypes';
import { loadTeams } from './teams';

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

export const simWeek = (week: string, seasonName: string): Object => {
  console.log(week);
  return (dispatch: Function) => {
    console.log('Simming Week');
    return MatchesAPI.simMatchWeek(week, seasonName)
      .then((response: Object) => {
        console.log('Sim match week success');
        dispatch(loadMatches(week, seasonName));
        dispatch(loadTeams(seasonName));
        return dispatch(simWeekSuccess());
      })
      .catch(error => {
        console.error('Load Matches: ' + error);
      });
  };
};

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
