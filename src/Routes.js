// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, NewPost } from './containers/index'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/posts/new' exact component={NewPost} />
  </Switch>
)

export default Routes
