export const base = {
  fontSize: '0.9em',
  backgroundColor: '#262626',
  padding: '0.5em',
  overflow: 'auto',
  whiteSpace: 'nowrap'
}

export const link = {
  display: 'inline-block',
  lineHeight: '1em',
  textDecoration: 'none',
  padding: '0.75em 1.25em',
  color: 'white',
  borderRadius: '0.25em',
  backgroundColor: 'rgba(255, 255, 255, 0.125)',
  transition: 'background-color 0.3s ease',
  marginRight: '0.25em',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)'
  }
}

export const activeLink = {
  ...link,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  color: '#262626'
}
