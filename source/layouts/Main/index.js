import React, { cloneElement } from 'react'
import SlideInSlideOut from '../../components/SlideInSlideOut'
import Nav from '../Nav'
import * as slides from '../../components/Slides'
import styles from './styles.css'

const COUNT = Object.keys(slides).length

export default ({
  children,
  location,
  params
}) => (
  <article className={styles.base}>
    <div className={styles.slide}>
      <SlideInSlideOut location={location}>
        {cloneElement(children, { key: location.pathname })}
      </SlideInSlideOut>
    </div>
    <div className={styles.nav}>
      <Nav count={COUNT} current={params.number} />
    </div>
  </article>
)
