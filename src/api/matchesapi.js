// @flow

import type { Match } from '../model';
class MatchesAPI {
  static getMatchWeek(week: string, seasonName: string): Promise<Match> {
    console.log('calling get matches for matchweek ' + week + ' ' + seasonName);
    var url = new URL('http://localhost:8000/matches');
    url.searchParams.append('season_name', seasonName);
    url.searchParams.append('week', week);
    return fetch(url).then((response: Object) => {
      return response.json();
    });
  }
  static startNewSeason(seasonName: string): Object {
    console.log('Scheduling new season ' + seasonName);
    var url = new URL('http://localhost:8000/season');
    url.searchParams.append('season_name', seasonName);
    return fetch(url, {
      method: 'POST',
    }).then((response: Object) => {
      return;
    });
  }
  static simMatchWeek(week: number, seasonName: string): Object {
    console.log('Simming match week ' + seasonName + ' ' + week);
    var body = JSON.stringify({
      seasonName: seasonName,
      week: week,
      action: 'simWeek',
    });
    console.log(body);
    return fetch('http://localhost:8000/matches', {
      method: 'POST',
      body: body,
    }).then((response: Object) => {
      console.log(response);
    });
  }
}

export default MatchesAPI;
