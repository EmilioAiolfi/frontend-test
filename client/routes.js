'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import CathoTemplate from './templates/Catho';

import HomeContainer from './containers/HomeContainer';
import ChatContainer from './containers/ChatContainer';

const routes = (
  <Route path="/site/home/chat" component={ CathoTemplate }>
    <IndexRoute component={ HomeContainer } />
    <Route path='section1' component={ChatContainer} />
  </Route>
);

export default routes;
