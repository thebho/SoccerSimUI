// @flow
import React, { Component } from 'react';
import './App.css';
import type { Team } from './model';
import TeamsTable from './components/TeamsTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const teamsTable: Array<Team> = [
  {
    name: 'Arsenal',
    gamesWon: 0,
    gamesLost: 0,
    gamesDrawn: 0,
    goalsScored: 0,
    goalsAllowed: 0,
  },
  {
    name: 'Sp*rs',
    gamesWon: 0,
    gamesLost: 0,
    gamesDrawn: 0,
    goalsScored: 0,
    goalsAllowed: 0,
  },
];

class App extends Component<*> {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mock English Football League</h1>
        </header>
        <TeamsTable teams={teamsTable} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
