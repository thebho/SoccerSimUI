// @flow

import type { Match } from '../model';
class MatchesAPI {
  static getMatchWeek(week: string, seasonName: string): Promise<Match> {
    var url = new URL('http://localhost:8000/matches');
    url.searchParams.append('season_name', seasonName);
    url.searchParams.append('week', week);
    return fetch(url).then((response: Object) => {
      return response.json();
    });
  }
  static startNewSeason(seasonName: string): Object {
    var url = new URL('http://localhost:8000/season');
    url.searchParams.append('season_name', seasonName);
    return fetch(url, {
      method: 'POST',
    });
  }
  static simMatchWeek(week: number, seasonName: string): Object {
    var body = JSON.stringify({
      seasonName,
      week,
      action: 'simWeek',
    });
    return fetch('http://localhost:8000/matches', {
      method: 'POST',
      body,
    });
  };
}

export default MatchesAPI;
