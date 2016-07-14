import React from 'react'

import styles from '../components/Slides/styles.css'

export default () => (
  <div style={{
    backgroundImage: 'url(http://static1.gamespot.com/uploads/original/1550/15507091/2844642-1530281363-giphy.gif)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%'
  }} className={styles.title}>
    <div className={styles.titleText}>
      <h1 className={styles.heading}>Merd ... </h1>
    </div>
  </div>
)
