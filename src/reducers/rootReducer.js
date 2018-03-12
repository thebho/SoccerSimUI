import { combineReducers } from 'redux';
import teamsReducer from './teamsReducer';
import matchesReducer from './matchesReducer';
import seasonReducer from './seasonReducer';

const rootReducer = combineReducers({
  teamsReducer,
  matchesReducer,
  seasonReducer
});

export default rootReducer;
