import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './../feed';
import Headlines from './../headlines';
import About from './../about';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Feed} />
      <Route exact path='/headlines' component={Headlines} />
      <Route path='/about' component={About} />
    </Switch>
  </main>
)

export default Main;