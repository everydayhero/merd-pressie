import Home from './Home'
import InternalError from './InternalError'
import NotFound from './NotFound'
import React from 'react'
import Slide from './Slide'
import Main from '../layouts/Main'

import { Route, IndexRoute } from 'react-router'

export default (
  <Route path={process.env.BASE_PATH || '/'} component={Main}>
    <IndexRoute component={Home} />
    <Route path='slides/:number' component={Slide} />
    <Route path='404' component={NotFound} />
    <Route path='500' component={InternalError} />
    <Route path='**' component={NotFound} />
  </Route>
)
