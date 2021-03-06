class TeamsAPI {
  static getAllTeams(season: string) {
    let seasonRequest = 'http://localhost:8000/seasons/' + season;
    return fetch(seasonRequest).then(response => {
      return response.json();
    });
  }
}

export default TeamsAPI;
