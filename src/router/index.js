import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Church from '../views/church';
import Homepage from '../views/homepage';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/church" component={Church} />
      </Switch>
    </Router>
  );
};

export default Routing;
