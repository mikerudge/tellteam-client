import React from 'react';
import { AppProvider } from '@8base/react-sdk';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import AuthClient from './shared/auth';
import AppState from './shared/components/AppState';
const workspaceEndpoint = process.env.REACT_APP_WORKSPACE_ENDPOINT;

class Application extends React.PureComponent {
  onRequestSuccess = ({ operation }) => {
    const message = operation.getContext();

    if (message) {
      // eslint-disable-next-line no-console
      console.log(message);
    }
  };

  onRequestError = ({ graphQLErrors }) => {
    const hasGraphQLErrors = Array.isArray(graphQLErrors) && graphQLErrors.length > 0;

    if (hasGraphQLErrors) {
      graphQLErrors.forEach(error => {
        // eslint-disable-next-line no-console
        console.error('eeeee', error.message);
      });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <AppProvider
          uri={workspaceEndpoint}
          authClient={AuthClient}
          onRequestSuccess={this.onRequestSuccess}
          onRequestError={this.onRequestError}
        >
          <Routes />
        </AppProvider>
      </BrowserRouter>
    );
  }
}

export { Application };
