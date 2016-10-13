import React from 'react'

import { classes } from '../classes'
import * as styles from '../components/Slides/styles'

export default () => (
  <div style={{
    backgroundImage: 'url(http://static1.gamespot.com/uploads/original/1550/15507091/2844642-1530281363-giphy.gif)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%'
  }} className={classes(styles.title)}>
    <div className={classes(styles.titleText)}>
      <h1 className={classes(styles.heading, { margin: 0 })}>Merd ... </h1>
    </div>
  </div>
)
