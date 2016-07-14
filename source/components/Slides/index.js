import React from 'react'

import TourTracker from '../TourTracker'
import Grid from '../Grid'
import GridItem from '../Grid/Item'
import styles from './styles.css'

import alex from './alex.jpg'
import dave from './dave.jpg'
import kanika from './kanika.jpg'
import keiran from './keiran.jpg'
import brad from './brad.jpg'

import builder from './builder.gif'
import runner from './runner.gif'

import librato from './librato.png'
import template1 from './template-1.png'
import template2 from './template-2.png'

export const Slide1 = () => (
  <div className={styles.base}>
    <div className={styles.text}>
      <h1 className={styles.heading}>Who's merd?</h1>

      <Grid>
        <GridItem divisions={['one-third', 'regular-one-fifth']}>
          <p><strong>Alex</strong></p>
          <img className={styles.avatar} src={alex} />
        </GridItem>

        <GridItem divisions={['one-third', 'regular-one-fifth']}>
          <p><strong>Dave</strong></p>
          <img className={styles.avatar} src={dave} />
        </GridItem>

        <GridItem divisions={['one-third', 'regular-one-fifth']}>
          <p><strong>Kanika</strong></p>
          <img className={styles.avatar} src={kanika} />
        </GridItem>

        <GridItem divisions={['one-third', 'regular-one-fifth']}>
          <p><strong>Keiran</strong></p>
          <img className={styles.avatar} src={keiran} />
        </GridItem>

        <GridItem divisions={['one-third', 'regular-one-fifth']}>
          <p><strong>Me (Brad)</strong></p>
          <img className={styles.avatar} src={brad} />
        </GridItem>
      </Grid>
    </div>
  </div>
)

export const Slide2 = () => (
  <div style={{
    backgroundImage: 'url(https://media.giphy.com/media/yELX2McZhcfYI/giphy.gif)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%'
  }} className={styles.title}>
    <div className={styles.titleText}>
      <h1 className={styles.headingSmall}>How is merd trying to help?</h1>
    </div>
  </div>
)

const TOURERS = [
  { id: '1', distance: 1000000, data: { name: 'Alex', image: alex } },
  { id: '2', distance: 2000000, data: { name: 'Dave', image: dave } },
  { id: '3', distance: 3000000, data: { name: 'Kankia', image: kanika } },
  { id: '4', distance: 4000000, data: { name: 'Keiren', image: keiran } }
]

export const Slide3 = () => (
  <div className={styles.base}>
    <div className={styles.text}>
      <h1 className={styles.heading}>Tour trackers galore</h1>
      <div style={{ height: '50vh', borderRadius: '0.25em', overflow: 'hidden' }}>
        <TourTracker tourers={TOURERS} />
      </div>
    </div>
  </div>
)

export const Slide4 = () => (
  <div className={styles.base}>
    <div className={styles.text}>
      <h1 className={styles.heading}>Tools</h1>

      <Grid>
        <GridItem divisions={['one-half']}>
          <img src={runner} className={styles.img} />
        </GridItem>

        <GridItem divisions={['one-half']}>
          <img src={builder} className={styles.img} />
        </GridItem>
      </Grid>
    </div>
  </div>
)

export const Slide5 = () => (
  <div className={styles.base}>
    <div className={styles.text}>
      <h1 className={styles.heading}>Event registrations</h1>

      <div className={styles.regDiagram}>
        <div className={styles.regDiagramIntegrator}>
          <div className={styles.regDiagramBox}>
            Begin registering
          </div>
          <div className={styles.regDiagramBox}>
            Choose a charity
            <h3 className={styles.littleStat}>28%</h3>
          </div>
          <div className={styles.regDiagramBox}>
            Click call to action
            <h3 className={styles.littleStat}>16%</h3>
          </div>
        </div>
        <div className={styles.regDiagramBox}>
          Activate page / account
          <h1 className={styles.bigStat}>79%</h1>
        </div>
      </div>
    </div>
  </div>
)

export const Slide6 = () => (
  <div style={{
    backgroundImage: 'url(https://media.giphy.com/media/3oEjI6hkw6nbYNQkz6/giphy.gif)',
    backgroundSize: '110% auto',
    backgroundPosition: '50% 50%'
  }} className={styles.title}>
    <div className={styles.titleText}>
      <h1 className={styles.headingSmall}>Postoffice</h1>
    </div>
  </div>
)

export const Slide7 = () => (
  <div className={styles.base}>
    <div className={styles.text}>
      <h1 className={styles.heading}>What is postoffice?</h1>

      <ul className={styles.list}>
        <li className={styles.listItem}>Right now the goal is to increase donations</li>
        <li className={styles.listItem}>Achieved with behavioural marketing</li>
        <li className={styles.listItem}>This means coaching users who create pages</li>
        <li className={styles.listItem}>Will be used for more messaging purposes in future</li>
      </ul>
    </div>
  </div>
)

export const Slide8 = () => (
  <div className={styles.base}>
    <div className={styles.text}>
      <Grid>
        <GridItem divisions={['one-sixth']} />
        <GridItem divisions={['one-third']}>
          <img src={template1} className={styles.img} />
        </GridItem>
        <GridItem divisions={['one-third']}>
          <img src={template2} className={styles.img} />
        </GridItem>
        <GridItem divisions={['one-sixth']} />
      </Grid>
    </div>
  </div>
)

export const Slide9 = () => (
  <div className={styles.base}>
    <div className={styles.text}>
      <h1 className={styles.heading}>Released to production!</h1>

      <Grid>
        <GridItem divisions={['one-half']}>
          <img src={librato} className={styles.img} />
        </GridItem>
        <GridItem divisions={['one-half']}>
          <h3 className={styles.headingSmaller}>With whitelist in place on 07/07/16</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>The serverless architecture is working!</li>
            <li className={styles.listItem}>Valuable time to tease out bugs in production while whitelist is in play</li>
          </ul>
        </GridItem>
      </Grid>
    </div>
  </div>
)

export const Slide10 = () => (
  <div className={styles.base}>
    <div className={styles.text}>
      <h1 className={styles.heading}>Precious stats</h1>

      <Grid>
        <GridItem divisions={['one-half']}>
          <div className={styles.bigBlueStat}>
            <div className={styles.bigBlueStatNum}>1000</div>
            <p className={styles.bigBlueStatContent}>message requests per day</p>
          </div>
        </GridItem>

        <GridItem divisions={['one-half']}>
          <div className={styles.bigBlueStat}>
            <div className={styles.bigBlueStatNum}>30-40</div>
            <p className={styles.bigBlueStatContent}>message requests per hour</p>
          </div>
        </GridItem>
      </Grid>
    </div>
  </div>
)
