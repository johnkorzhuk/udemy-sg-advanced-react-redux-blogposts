// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, NewPost } from './containers/index'

const Routes = () => (
  <Switch>
    <Route path='/posts/new' exact component={NewPost} />
    <Route path='/' exact component={Home} />
  </Switch>
)

export default Routes
