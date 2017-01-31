'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import NotFoundPage from './components/NotFoundPage';
import CathoTemplate from './templates/Catho';

import HomeContainer from './containers/HomeContainer';
import ChatContainer from './containers/ChatContainer';

const routes = (
  <Route path="/">
    <Route path="/site/home/chat" component={ CathoTemplate }>
      <IndexRoute component={ ChatContainer } />
      <Route path='home' component={ HomeContainer } />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);


export default routes;
