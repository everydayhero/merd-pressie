import React from 'react'
import { VelocityTransitionGroup } from 'velocity-react'

const freeze = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
}

export default ({ children }) => (
  <VelocityTransitionGroup
    enter={{
      animation: { translateX: '0' },
      style: {
        ...freeze,
        translateX: '100vw'
      }
    }}
    leave={{
      animation: { translateX: '-100vw' },
      style: {
        translateX: '0'
      }
    }}
  >
    {children}
  </VelocityTransitionGroup>
)
