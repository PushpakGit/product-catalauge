
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';
import App from './containers/App';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
