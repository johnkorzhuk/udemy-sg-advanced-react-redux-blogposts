import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, NewPost, ShowPost } from './containers/index'

const Routes = () => (
  <Switch>
    <Route path='/posts/new' exact component={NewPost} />
    <Route path='/posts/:id' exact component={ShowPost} />
    <Route path='/' exact component={Home} />
  </Switch>
)

export default Routes
