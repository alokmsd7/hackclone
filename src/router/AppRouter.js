import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';
import LoginForm from '../auth/login';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
      
        <Switch>
          <Route path="/logina" component={LoginForm} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!['top', 'new', 'best'].includes(type)) {
                return <Redirect to="/" />;
              }
              return <ShowStories type={type} />  ;
            }}
          />
          <Route path="/" render={() => <Redirect to="/logina"/>} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
