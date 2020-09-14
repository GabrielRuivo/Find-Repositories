/* eslint-disable no-use-before-define */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// eslint-disable-next-line no-lone-blocks
{
  /* Switch => garante que apenas uma rota seja exibida e nao todas ao mesmo tempo */
}

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
