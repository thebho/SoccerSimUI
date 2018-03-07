import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

import initialState from '../reducers/initialState';

const configureStore = () => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}

export default configureStore;
