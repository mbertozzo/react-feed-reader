import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './../feed';
import About from './../about';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Feed} />
      <Route path='/about' component={About} />
    </Switch>
  </main>
)

export default Main;