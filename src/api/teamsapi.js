class TeamsAPI {
  static getAllTeams() {
    console.log('calling get all teams');
    return fetch('http://localhost:8000/teams')
      .then(response => {
        return response.json();
      })
  };
};

export default TeamsAPI;
