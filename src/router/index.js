import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Church from '../views/church';
import Homepage from '../views/homepage';
import NotFound from '../views/NotFound';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/:slug" component={Church} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routing;
