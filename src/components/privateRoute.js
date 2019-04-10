import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useStore } from '../state';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state, dispatch] = useStore();
  if (state.isAuthenticated) {
    return <Route {...rest} component={Component} />;
  } else {
    return <Redirect to='/login' />;
  }
};
