import React from 'react'
import { render } from 'react-dom'
import { createClient } from 'boiler-room-runner'

import { basepath } from './shared'
import routes from './routes'

const App = createClient({
  routes,
  basepath
})

render(<App />, document.getElementById('app'))
