import React from 'react';
import { useTypedSelector } from 'hooks';
import { RoutesPaths } from './RoutesPaths';

import {
  Switch,
  Route,
  Redirect,
  RouteProps,
  useLocation,
} from 'react-router-dom';
import { FadeIn } from 'components';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import RequestCancelation from 'pages/RequestCancelation';

interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
  onlyNotAuth?: boolean;
}

function RouteWrapper(props: RouteWrapperProps) {
  const { isPrivate, onlyNotAuth, exact = true, ...rest } = props;
  const isAuth = useTypedSelector((state) => state.auth.session.isAuth);

  if (onlyNotAuth && isAuth) return <Redirect to={RoutesPaths.dashboard} />;
  if (isPrivate && !isAuth) return <Redirect to={RoutesPaths.login} />;

  return <Route exact={exact} {...rest} />;
}

export default function Routes() {
  const location = useLocation();
  const isAuth = useTypedSelector((state) => state.auth.session.isAuth);

  return (
    <FadeIn transitionKey={location.key}>
      <Switch>
        <RouteWrapper path={RoutesPaths.login} component={Login} onlyNotAuth />
        <RouteWrapper
          path={RoutesPaths.dashboard}
          component={Dashboard}
          isPrivate
        />
        <RouteWrapper
          path={RoutesPaths.requestCancelation}
          component={RequestCancelation}
          isPrivate
        />
        <Redirect to={isAuth ? RoutesPaths.dashboard : RoutesPaths.login} />
      </Switch>
    </FadeIn>
  );
}
