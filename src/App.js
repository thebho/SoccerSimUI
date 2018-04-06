// @flow
import React, { Component } from 'react';
import './App.css';
import TeamsTable from './components/TeamsTable';
import MatchWeek from './components/MatchWeek';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component<*> {
  render() {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Mock English Football League</h1>
          </header>
          <div className='App-body'>
            <TeamsTable className='App-teams'/>
            <MatchWeek className='App-schedule' store={this.props.store}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
