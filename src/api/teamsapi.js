class TeamsAPI {
  static getAllTeams(season: string) {
    console.log(season);
    let seasonRequest = 'http://localhost:8000/seasons/' + season
    return fetch(seasonRequest).then(response => {
      console.log(response)
      return response.json();
    });
  }
}

export default TeamsAPI;
