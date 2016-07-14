import React from 'react'
import styles from './styles.css'
import { merge } from 'lodash/object'

export default merge(({ divisions = [], children }, { spacing }) => {
  const divisionClasses = divisions.map((division) => {
    return styles[division]
  })
  const classNames = [
    ...divisionClasses,
    styles[`padding-${spacing}`]
  ].join(' ')

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}, {
  contextTypes: {
    spacing: React.PropTypes.string
  }
})
