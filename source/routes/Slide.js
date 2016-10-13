import React from 'react'
import slides from '../components/Slides'

export default ({ params, router }) => {
  const Slide = slides[parseInt(params.number - 1)]

  if (!Slide) {
    return router.replace('/404')
  }

  return <Slide />
}
