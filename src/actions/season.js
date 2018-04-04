// @flow
import * as types from './actionTypes';
import type { Season } from '../model';
import MatchesAPI from '../api/matchesapi';
import { loadMatches } from './matches';
import { loadTeams } from './teams';


export const startNewSeason = (seasonName: string) => {
  console.log('starting');
  return (dispatch: Function) => {
    return MatchesAPI.startNewSeason(seasonName)
      .then((response: Object) => {
        console.log(response);
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
