import React from 'react';
import firebasebObject from './components/firebase';

import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const initialAppState = {};
export const store = createStore(appReducers, initialAppState, applyMiddleware(thunk));

 const Routes = (
   <Provider store={store}>

  </Provider>
);

export default Routes;