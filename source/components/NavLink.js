import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <Link
    { ...props }
    to={`${process.env.BASE_PATH || ''}${props.to}`}
  />
)
