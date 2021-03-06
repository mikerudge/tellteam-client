import React from 'react';
import { withAuth } from '@8base/react-sdk';

import client from '../../../../shared/api';
import * as gql from '../../../../shared/graphql';
import { Result, Button, Spin } from 'antd';

class CallbackContainer extends React.Component {
  async handleAuthentication({ idToken, email }) {
    /**
     * Auth headers for communicating with the 8base API.
     */

    await client.setIdToken(idToken);

    /**
     * Check if user exists in 8base.
     */
    try {
      await client.request(gql.CURRENT_USER_QUERY);
    } catch {
      /**
       * If user doesn't exist, an error will be
       * thrown, which then the new user can be
       * created using the authResult values.
       */
      try {
        await client.request(gql.USER_SIGN_UP_MUTATION, {
          user: { email: email },
          authProfileId: process.env.REACT_APP_AUTH_PROFILE_ID,
        });
      } catch (e) {
        return (
          <Result status="200" title="We're not taking on anymore users right now" subTitle="Thanks for signing up" />
        );
      }
    }
  }

  async componentDidMount() {
    const { auth, history } = this.props;
    /* Get authResult from auth client after redirect */
    const authResult = await auth.authClient.getAuthorizedData();
    /* Identify or create user record using authenticated details */
    await this.handleAuthentication(authResult);

    /* Add the idToken to the auth state */
    auth.authClient.setState({ token: authResult.idToken });
    /* Redirect user to root path */
    history.replace('/');
  }

  render() {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spin />
      </div>
    );
  }
}
/* withAuth injects 'auth' prop into component */
CallbackContainer = withAuth(CallbackContainer);

export { CallbackContainer };
