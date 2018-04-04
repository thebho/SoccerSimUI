import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
// import { loadTeams } from './actions/teams';
// import { loadMatches } from './actions/matches';
import { startNewSeason } from './actions/season';

// Initiate redux store
const store = configureStore();
const date = new Date();
const initialSeason = 'Season ' + (date.getMonth()+1) +'-' +  date.getDate() + ' ' + date.getMilliseconds()

// Start initial season
store.dispatch(startNewSeason(initialSeason));
//
// // Load current teams from backend
// store.dispatch(loadTeams(initialSeason));
// // Load first weeks matches
// store.dispatch(loadMatches('1', initialSeason))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
