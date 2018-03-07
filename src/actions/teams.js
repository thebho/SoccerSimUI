// @flow
import TeamsAPI from '../api/teamsapi';
import * as types from './actionTypes';


export const loadTeams = () => {
  return (dispatch: Function) => {
    return TeamsAPI.getAllTeams()
      .then(teams => {
        dispatch(loadTeamsSuccess(teams));
      })
      .catch(error =>{
        throw(error);
      });
  };
};

export const loadTeamsSuccess = (teams: Object): Object => {
  return {
    type: types.LOAD_TEAMS_SUCCESS,
    teams,
  };
};
