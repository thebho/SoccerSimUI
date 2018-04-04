// @flow
import TeamsAPI from '../api/teamsapi';
import * as types from './actionTypes';

export const loadTeams = (season: string) => {
  return (dispatch: Function) => {
    return TeamsAPI.getAllTeams(season)
      .then(teams => {
        dispatch(loadTeamsSuccess(teams));
      })
      .catch(error => {
        console.error('Load Teams: ' + error);
        dispatch(loadTeamsFailure());
      });
  };
};

export const loadTeamsSuccess = (teams: Object): Object => {
  return {
    type: types.LOAD_TEAMS_SUCCESS,
    teams,
  };
};

export const loadTeamsFailure = (): Object => {
  return {
    type: types.LOAD_TEAMS_FAILURE,
  };
};
