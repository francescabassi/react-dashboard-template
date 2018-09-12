import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form/immutable';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import networkMiddleware from './middleware/network';

import * as modules from 'redux/modules'

const history = createHistory({
  basename: '/'
});

const configureStore = () => {
  const logger = createLogger();
  const initialState = new Map();

  const rootReducer = combineReducers({
    form: formReducer,
    routing: routerReducer,
    ...modules
  });

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      logger,
      networkMiddleware,
      routerMiddleware(history)
    )
  );
};

const store = configureStore();

export { store, history };