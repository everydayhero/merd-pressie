import 'leaflet'
import './vendor.scss'

import React from 'react'
import { render } from 'react-dom'
import createClientApp from 'boiler-room-runner/client'

import routes from './routes'

const App = createClientApp({
  routes
})

render(<App />, document.getElementById('app'))
