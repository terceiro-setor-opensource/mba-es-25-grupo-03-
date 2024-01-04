import React from 'react';
import {AuthRoutes} from './auth.routes';
import {useAuth} from '~/app/hooks';
import {HomeRoutes} from './home.routes';

export function Routes() {
  const {usuario} = useAuth();

  return usuario ? <HomeRoutes /> : <AuthRoutes />;
}
