// @flow
import React, { Component } from 'react';
import './App.css';
import TeamsTable from './components/TeamsTable';
import MatchWeek from './components/MatchWeek';


class App extends Component<*> {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Mock English Football League</h1>
        </header>
        <div className='App-body'>
          <TeamsTable className='App-teams'/>
          <MatchWeek className='App-schedule'/>
        </div>
      </div>
    );
  }
}

export default App;
