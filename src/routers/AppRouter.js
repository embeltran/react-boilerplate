import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import creatHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute'; //uses authentication to determine is route is to be shown
import PublicRoute from './PublicRoute'; //uses authentication to determine is route is to be shown

export const history = creatHistory(); 

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
// <PrivateRoute path="/create" component={AddExpensePage} /><PrivateRoute path="/edit/:id" component={EditExpensePage} />
export default AppRouter;
