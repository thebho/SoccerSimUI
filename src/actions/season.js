// @flow
import * as types from './actionTypes';
import type { Season } from '../model';


export const startNewSeason = (seasonName: string) => {
  console.log('starting')
  return (dispatch: Function) => {
    return dispatch(dispatchNewSeason({name: seasonName, matchWeek: 1}))
  };
};

export const dispatchNewSeason = (season: Season ): Object => {
  return {
    type: types.NEW_SEASON_STARTED,
    season,
  };
};
