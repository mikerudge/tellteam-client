import React from 'react';
import { ProtectedRoute } from '../shared/components';
import { Redirect, Route, Switch } from 'react-router-dom';

/* Import Route Components */
import { AuthCallback } from './auth';
import HomeScene from '../scenes/Home/Home';
import MainLayout from './MainLayout';
import GroupsScene from '../scenes/GroupsScene';
import MessagesScene from '../scenes/MessagesScene';
import ActionsScene from '../scenes/ActionsScene';
import MembersScene from '../scenes/MembersScene';

export default class Router extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/auth" component={AuthCallback} />
        <Route>
          <MainLayout>
            <Switch>
              <ProtectedRoute exact path="/" component={HomeScene} />
              <ProtectedRoute exact path="/groups" component={GroupsScene} />
              <ProtectedRoute exact path="/messages" component={MessagesScene} />
              <ProtectedRoute exact path="/actions" component={ActionsScene} />
              <ProtectedRoute exact path="/members" component={MembersScene} />
              <Redirect to="/" />
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    );
  }
}
