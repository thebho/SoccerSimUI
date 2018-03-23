// @flow

import type { Match } from '../model';
class MatchesAPI {
  static getMatchWeek(week: string, seasonName: string): Promise<Match> {
    console.log('calling get matches for matchweek ' + week + ' ' + seasonName);
    var url = new URL('http://localhost:8000/matches');
    url.searchParams.append('season_name', seasonName)
    url.searchParams.append('week', week)
    return fetch(url)
      .then((response: Object) => {
        console.log(response)
        return response.json();
      })
  };
  static startNewSeason(seasonName: string) {
    console.log('Scheduling new season ' + seasonName);
    var url = new URL('http://localhost:8000/matches');
    url.searchParams.append('season_name', seasonName)
    return fetch(url, {
      method: 'POST',
    })
      .then((response: Object) => {
        console.log(response)
        return
      })
  };
};

export default MatchesAPI;
