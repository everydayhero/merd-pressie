import React from 'react'
import * as slides from '../components/Slides'

export default ({ params, router }) => {
  const Slide = slides[`Slide${params.number}`]

  if (!Slide) {
    return router.replace('/404')
  }

  return (
    <Slide />
  )
}
