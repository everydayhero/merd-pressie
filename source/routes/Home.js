import React from 'react'

import { classes } from '../classes'
import * as styles from '../components/Slides/styles'

export default () => (
  <div style={{
    backgroundImage: 'url(https://hd.unsplash.com/photo-1431660370894-11a187f8cf92)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%'
  }} className={classes(styles.title)}>
    <div className={classes(styles.titleText)}>
      <h1 className={classes(styles.heading, { margin: 0 })}>Merd</h1>
    </div>
  </div>
)
