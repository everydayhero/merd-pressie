import React from 'react'
import NavLink from '../../components/NavLink'
import { classes } from '../../classes'
import * as styles from './styles'

const renderLinks = (count, current) => (
  [
    <NavLink
      className={classes(styles.link)}
      key={-1}
      to={(current === 0) || current === '1' ? '' : `/slides/${parseInt(current) - 1}`}>
      Prev
    </NavLink>,
    <NavLink
      className={classes(current === 0 ? styles.activeLink : styles.link)}
      key={0}
      to='/'>
      Start
    </NavLink>
  ].concat(Array.from({ length: count }).map((n, i) => (
    <NavLink
      className={classes(current === (i + 1).toString() ? styles.activeLink : styles.link)}
      key={i + 1}
      to={`/slides/${i + 1}`}>
      {i + 1}
    </NavLink>)
  )).concat(
    <NavLink
      className={classes(styles.link)}
      key={count + 1}
      to={(current === count.toString()) ? `/slides/${current}` : `/slides/${parseInt(current) + 1}`}>
      Next
    </NavLink>
  )
)

export default ({
  count = 0,
  current = 0
}) => (
  <nav className={classes(styles.base)}>
    {renderLinks(count, current)}
  </nav>
)
