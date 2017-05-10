// REDUX DEPENDENCIES
import { createStore, combineReducers } from 'redux';

// REDUCERS
import articles from './reducers/articles.jsx';
import current from './reducers/current.jsx';
import submission from './reducers/submit.jsx';

const reducers = combineReducers({
  articles,
  current,
  submission
});

const store = createStore(
  reducers,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
