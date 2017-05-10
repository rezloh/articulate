// REACT/REDUX
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// STORE/COMPONENTS
import store from './store.jsx';
import App from './components/app.jsx';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);
