import React from 'react'

import Grid from '../Grid'
import GridItem from '../Grid/Item'
import { classes } from '../../classes'
import * as styles from './styles'

import alex from './assets/alex.jpg'
import kanika from './assets/kanika.jpg'
import keiran from './assets/keiran.jpg'
import brad from './assets/brad.jpg'

const Who = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h1 className={classes(styles.heading)}>Who's merd?</h1>

      <Grid>
        <GridItem span={2}>
          <p><strong>Alex</strong></p>
          <img className={classes(styles.avatar)} src={alex} />
        </GridItem>

        <GridItem span={2}>
          <p><strong>Dan</strong></p>
          <img className={classes(styles.avatar)} src={alex} />
        </GridItem>

        <GridItem span={2}>
          <p><strong>Kanika</strong></p>
          <img className={classes(styles.avatar)} src={kanika} />
        </GridItem>

        <GridItem span={2}>
          <p><strong>Keiran</strong></p>
          <img className={classes(styles.avatar)} src={keiran} />
        </GridItem>

        <GridItem span={2}>
          <p><strong>Me (Brad)</strong></p>
          <img className={classes(styles.avatar)} src={brad} />
        </GridItem>
      </Grid>
    </div>
  </div>
)

export default [
  Who
]
