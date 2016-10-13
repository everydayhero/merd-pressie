import React from 'react'
import * as styles from './styles'
import { classes } from '../../classes'

class Grid extends React.Component {
  getChildContext () {
    return {
      spacing: this.props.spacing
    }
  }

  render () {
    const {
      spacing,
      children
    } = this.props

    const classNames = classes(
      styles.base,
      styles[spacing]
    )

    return (
      <div className={classNames}>
        {children}
      </div>
    )
  }
}

Grid.childContextTypes = {
  spacing: React.PropTypes.string
}

Grid.defaultProps = {
  spacing: 'standard'
}

export default Grid
