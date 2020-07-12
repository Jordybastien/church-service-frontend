import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../views/homepage';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  );
};

export default Routing;
