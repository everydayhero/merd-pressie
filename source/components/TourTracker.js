import React from 'react'
import thunk from 'redux-thunk'
import { renderToStaticMarkup } from 'react-dom/server'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import createConnected from 'tour-tracker/dist/container'
import reducer from 'tour-tracker/dist/reducer'
import { selectTourer } from 'tour-tracker/dist/actions'
import { Pin } from './Pin'

const TourTracker = createConnected()

const WAYPOINTS = [
  [-27.465245, 153.028644],
  [-31.953573, 115.857006]
]

const INITIAL_STATE = {
  routes: [
    { waypoints: WAYPOINTS }
  ]
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  applyMiddleware(thunk)
)

const tourerIcon = ({ data } = {}) => ({
  iconSize: [60, 60],
  iconAnchor: [30, 60],
  className: '',
  html: renderToStaticMarkup(<Pin image={data.image} color='coral' />)
})

const assignIcon = (tourer) => ({
  ...tourer,
  icon: tourerIcon(tourer)
})

const mapDispatch = (dispatch) => ({
  selectTourer: (id) => dispatch(selectTourer(id))
})
const mapState = ({ selected }) => ({ selected })

const Selectable = ({
  tourers = [],
  selectTourer
}) => {
  const decoratedTourers = tourers.map(assignIcon)

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TourTracker
        tourers={decoratedTourers}
      />
    </div>
  )
}

const Example = connect(
  mapState,
  mapDispatch
)(Selectable)

export default ({ tourers }) => (
  <Provider store={store}>
    <Example
      tourers={tourers}
    />
  </Provider>
)
