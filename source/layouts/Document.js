import React from 'react'

const renderStyles = (styles) => (
  styles.map((style, index) => <link key={index} rel='stylesheet' href={style} />)
)

const renderScripts = (scripts) => (
  scripts.map((script, index) => <script key={index} src={script} />)
)

export default ({
  assets = [],
  title = 'MERD',
  content = '',
  state = {}
}) => {
  const styles = assets.filter((asset) => asset.match(/.css$/))
  const scripts = assets.filter((asset) => asset.match(/.js$/))

  return (
    <html>
      <head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {renderStyles(styles)}
      </head>
      <body>
        <main
          id='app'
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />

        <script
          id='initial-state'
          type='application/json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(state)
          }}
        />
        {renderScripts(scripts)}
      </body>
    </html>
  )
}
