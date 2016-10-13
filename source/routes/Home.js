import React from 'react'

import { classes } from '../classes'
import * as styles from '../components/Slides/styles'

export default () => (
  <div style={{
    backgroundImage: 'url(http://static1.gamespot.com/uploads/original/1550/15507091/2844642-1530281363-giphy.gif)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%'
  }} className={styles.title}>
    <div className={classes(styles.titleText)}>
      <h1 className={classes(styles.heading)}>Merd ... </h1>
    </div>
  </div>
)
