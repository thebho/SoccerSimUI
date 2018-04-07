// @flow
import * as types from './actionTypes';
import type { Season } from '../model';
import MatchesAPI from '../api/matchesapi';
import { loadMatches } from './matches';
import { loadTeams } from './teams';

export const startNewSeason = (seasonName: string) => {
  return (dispatch: Function) => {
    return MatchesAPI.startNewSeason(seasonName)
      .then((response: Object) => {
        dispatch(loadMatches('1', seasonName));
        dispatch(loadTeams(seasonName));
        return dispatch(dispatchNewSeason({ name: seasonName, matchWeek: 1 }));
      })
      .catch((error: Object) => {
        console.error(error);
      });
  };
};

export const dispatchNewSeason = (season: Season): Object => {
  return {
    type: types.NEW_SEASON_STARTED,
    season,
  };
};

export const dispatchAdvanceWeek = (matchWeek: number): Object => {
  return {
    type: types.ADVANCE_WEEK,
    season: {
      matchWeek,
    },
  };
};

export const advanceWeek = (matchWeek: number, seasonName: string): Object => {
  return (dispatch: Function) => {
    dispatch(loadMatches(matchWeek.toString(), seasonName));
    return dispatch(dispatchAdvanceWeek(matchWeek));
  };
};
