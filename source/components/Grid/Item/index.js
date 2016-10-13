import React from 'react'
import * as styles from './styles'
import { merge } from 'lodash/object'
import { classes } from '../../../classes'

export default merge(({ span = 6, columns = 12, children }, { spacing }) => {
  const classNames = classes(
    styles.division(span, columns),
    styles[spacing]
  )

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
