import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from '../components/home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const Routes = () => {
  return (
    <Router history={createHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
      </Switch>
    </Router>
  );
};

export default Routes;
