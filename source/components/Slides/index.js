import React from 'react'

import Grid from '../Grid'
import GridItem from '../Grid/Item'
import { classes } from '../../classes'
import * as styles from './styles'

import alex from './assets/alex.jpg'
import dan from './assets/dan.jpg'
import kanika from './assets/kanika.jpg'
import keiran from './assets/keiran.jpg'
import brad from './assets/brad.jpg'

import classic from './assets/145-classic.png'
import bikesForBibles from './assets/bikes-for-bibles.png'
import sydneyToSurfers from './assets/sydney-to-surfers.png'
import stAndrews from './assets/st-andrews.png'

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
          <img className={classes(styles.avatar)} src={dan} />
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

const RobotEmma = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h1 className={classes(styles.heading)}>
        Robot Emma
      </h1>
    </div>
  </div>
)

const BoilerRoomBuilder = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h1 className={classes(styles.heading)}>
        BRB
      </h1>
    </div>
  </div>
)

const EventbriteLaunch = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h1 className={classes(styles.heading)}>
        <em>Eventbrite Integration</em> for legacy regions launched on September the 12th
      </h1>
    </div>
  </div>
)

const EventbriteUsage = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h1 className={classes(styles.heading)}>Since launch we have 4 integrations in the wild</h1>
      <Grid>
        <GridItem span={3}>
          <img src={classic} className={classes(styles.avatar)} />
        </GridItem>
        <GridItem span={3}>
          <img src={bikesForBibles} className={classes(styles.avatar)} />
        </GridItem>
        <GridItem span={3}>
          <img src={sydneyToSurfers} className={classes(styles.avatar)} />
        </GridItem>
        <GridItem span={3}>
          <img src={stAndrews} className={classes(styles.avatar)} />
        </GridItem>
      </Grid>
    </div>
  </div>
)

export default [
  Who,
  BoilerRoomBuilder,
  RobotEmma,
  EventbriteLaunch,
  EventbriteUsage
]
