import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadTeams } from './actions/teams';
import { loadMatches } from './actions/matches';
import { startNewSeason } from './actions/season';

// Initiate redux store
const store = configureStore();
const initialSeason = '2017/18'

// Start initial season
store.dispatch(startNewSeason(initialSeason));

// Load current teams from backend
store.dispatch(loadTeams());
// Load first weeks matches
store.dispatch(loadMatches(store.getState().seasonReducer.season.matchWeek, store.getState().seasonReducer.season.name))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
