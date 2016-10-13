import React, { cloneElement } from 'react'
import SlideInSlideOut from '../../components/SlideInSlideOut'
import Nav from '../Nav'
import slides from '../../components/Slides'
import './styles.css'
import { classes } from '../../classes'
import * as styles from './styles'

const COUNT = slides.length

export default ({
  children,
  location,
  params
}) => (
  <article className={classes(styles.base)}>
    <div className={classes(styles.slide)}>
      <SlideInSlideOut location={location}>
        {cloneElement(children, { key: location.pathname })}
      </SlideInSlideOut>
    </div>
    <div className={classes(styles.nav)}>
      <Nav count={COUNT} current={params.number} />
    </div>
  </article>
)
