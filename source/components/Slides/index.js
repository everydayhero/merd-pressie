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

import flowOne from './assets/flow-1.png'
import flowTwo from './assets/flow-2.png'
import flowThree from './assets/flow-3.png'
import flowFour from './assets/flow-4.png'
import opgs from './assets/opgs.png'

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

const BoilerRoomBuilder = () => (
  <div className={classes(styles.title)}>
    <div className={classes(styles.titleText)}>
      <h1 className={classes(styles.heading, { margin: 0 })}>
        BRB
      </h1>
    </div>
  </div>
)

const BoilerRoomBuilderUsage = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h2 className={classes(styles.subHeading, { marginBottom: 0 })}>
        A tool which is
      </h2>
      <h1 className={classes(styles.heading, { margin: '0.5em 0' })}>
        Building <em>15</em> apps<br />
        Built by <em>9</em> contributors<br />
        Helping us out
      </h1>
    </div>
  </div>
)

const EventBrite = () => (
  <div className={classes(styles.title)}>
    <div className={classes(styles.titleText)}>
      <h1 className={classes(styles.heading, { margin: 0 })}>
        Eventbrite
      </h1>
    </div>
  </div>
)

const EventbriteLaunch = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h1 className={classes(styles.heading)}>
        Our integration launched<br />
        for legacy regions on <br />
        <em>September the 12th</em><br />
      </h1>
      <h1 className={classes(styles.heading)}>
        🎉
      </h1>
    </div>
  </div>
)

const EventbriteFlow = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h1 className={classes(styles.heading)}>
        It's got a great flow
      </h1>

      <Grid>
        <GridItem span={3}>
          <img src={flowOne} className={classes(styles.avatar)} />
        </GridItem>
        <GridItem span={3}>
          <img src={flowTwo} className={classes(styles.avatar)} />
        </GridItem>
        <GridItem span={3}>
          <img src={flowThree} className={classes(styles.avatar)} />
        </GridItem>
        <GridItem span={3}>
          <img src={flowFour} className={classes(styles.avatar)} />
        </GridItem>
      </Grid>
    </div>
  </div>
)

const EventbriteUsage = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h1 className={classes(styles.heading, { marginBottom: 0 })}>
        It's currently in use by <br />
        4 events
      </h1>
      <h2 className={classes(styles.subHeading)}>
        3 of which are new to the platform
      </h2>
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

const EventbriteFinale = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <img src={opgs} className={classes(styles.fullscreen)} />
    </div>
  </div>
)

const RobotEmma = () => (
  <div className={classes(styles.title)}>
    <div className={classes(styles.titleText)}>
      <h1 className={classes(styles.heading, { margin: 0 })}>
        Robot Emma
      </h1>
    </div>
  </div>
)

const RobotEmmaPurpose = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h1 className={classes(styles.heading)}>
        A robotic extension to human Emma!!!
      </h1>
    </div>
  </div>
)

const NewRegistrationsStatsOne = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h1 className={classes(styles.heading)}>
        Promotes the <br />V3 on-boarding flow
      </h1>
      <Grid>
        <GridItem span={4}>
          <p className={classes({ margin: 0 })}>
            BAT
          </p>
          <h1 className={classes(styles.heading, { margin: 0 })}>
            58%
          </h1>
        </GridItem>
        <GridItem span={4}>
          <p className={classes({ margin: 0 })}>
            V3 API
          </p>
          <h1 className={classes(styles.heading, { margin: 0 })}>
            <em>80%</em>
          </h1>
        </GridItem>
      </Grid>
    </div>
  </div>
)

const NewRegistrationsStatsOneResult = () => (
  <div className={classes(styles.title)}>
    <div className={classes(styles.titleText)}>
      <h1 className={classes(styles.heading, { margin: 0 })}>
        + 38%
      </h1>
    </div>
  </div>
)

const NewRegistrationsStatsTwo = () => (
  <div className={classes(styles.base)}>
    <div className={classes(styles.text)}>
      <h1 className={classes(styles.heading)}>
        But wait... <br />there's more
      </h1>
      <Grid>
        <GridItem span={4}>
          <p className={classes({ margin: 0 })}>
            BAT
          </p>
          <h1 className={classes(styles.heading, { margin: 0 })}>
            15.38%
          </h1>
        </GridItem>
        <GridItem span={4}>
          <p className={classes({ margin: 0 })}>
            V3 API
          </p>
          <h1 className={classes(styles.heading, { margin: 0 })}>
            <em>34.37%</em>
          </h1>
        </GridItem>
      </Grid>
    </div>
  </div>
)

const NewRegistrationsStatsTwoResult = () => (
  <div className={classes(styles.title)}>
    <div className={classes(styles.titleText)}>
      <h1 className={classes(styles.heading, { margin: 0 })}>
        + 123% !!!
      </h1>
    </div>
  </div>
)

export default [
  Who,
  BoilerRoomBuilder,
  BoilerRoomBuilderUsage,
  EventBrite,
  EventbriteLaunch,
  EventbriteFlow,
  EventbriteUsage,
  EventbriteFinale,
  RobotEmma,
  RobotEmmaPurpose,
  NewRegistrationsStatsOne,
  NewRegistrationsStatsOneResult,
  NewRegistrationsStatsTwo,
  NewRegistrationsStatsTwoResult
]
