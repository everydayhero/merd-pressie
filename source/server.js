import React from 'react'
import { createServer } from 'boiler-room-runner'
import { renderToStaticMarkup } from 'react-dom/server'

import { basepath } from './shared'

import Document from './layouts/Document'
import routes from './routes'

export const renderDocument = ({
  assets = [],
  content = ''
}) => (
  '<!DOCTYPE html>' + renderToStaticMarkup(
    <Document
      assets={assets}
      content={content}
    />
  )
)

export default ({ assets }) => (
  createServer({
    assets,
    routes,
    basepath,
    renderDocument
  })
)
