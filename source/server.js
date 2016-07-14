import React from 'react'
import createServerApp from 'boiler-room-runner/server'
import routes from './routes'
import { renderToStaticMarkup } from 'react-dom/server'
import Document from './layouts/Document'

export const renderDocument = (
  content = ''
) => (
  '<!DOCTYPE html>' + renderToStaticMarkup(
    <Document
      content={content}
    />
  )
)

export default createServerApp({
  routes,
  renderDocument
})
