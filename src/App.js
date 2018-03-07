// @flow
import React, { Component } from 'react';
import './App.css';
import type { Team } from './model';
import TeamsTable from './components/TeamsTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component<*> {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Mock English Football League</h1>
          </header>
          <TeamsTable />
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
