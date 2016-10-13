export const base = {
  padding: '4.5em 4em'
}

const img = {
  width: '100%',
  maxWidth: '100%',
  borderRadius: '0.25em',
  overflow: 'hidden',
  display: 'block'
}

export const avatar = {
  ...img
}

export const title = {
  ...base,
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  ':before': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
}

export const titleText = {
  fontSize: '5vw',
  margin: '0',
  color: 'whitesmoke',
  position: 'relative'
}

export const heading = {
  fontWeight: 'bold',
  lineHeight: '1.1em',
  fontSize: '3em',
  letterSpacing: '0.005em',
  marginTop: '0',
  marginBottom: '1em'
}

export const headingSmall = {
  ...heading,
  fontSize: '2em'
}

export const headingSmaller = {
  ...heading,
  fontSize: '1.25em'
}
export const content = {
  marginTop: 0,
  marginBottom: '1em'
}

export const text = {
  fontSize: '2vw'
}

export const list = {
  marginTop: 0
}

export const listItem = {
  lineHeight: 'inherit',
  marginBottom: '0.5em'
}

export const bigBlueStat = {
  backgroundColor: '#1d83f6',
  color: 'white',
  padding: '1.25em'
}

export const bigBlueStatNum = {
  ...heading,
  fontSize: '3.5em',
  marginBottom: '0.25em'
}

export const bigBlueStatContent = {
  lineHeight: '1em',
  margin: 0
}
