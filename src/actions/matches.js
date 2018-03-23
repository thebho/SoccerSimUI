// @flow
import MatchesAPI from '../api/matchesapi';
import * as types from './actionTypes';

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
