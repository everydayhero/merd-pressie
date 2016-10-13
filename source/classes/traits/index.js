export const rhythm = (value = 1, unit = 'rem', basis = 1.5) => (
  `${basis * value}${unit}`
)

export const scale = (exponent = 0, scale = 1.2) => (
  `${Math.pow(scale, exponent)}rem`
)

export const radiuses = {
  round: rhythm(100),
  rounded: rhythm(0.125)
}

export const transitions = {
  easeOut: 'ease-out .25s'
}

export const fonts = {
  interface: 'Lato, Helvetica Neue, Helvetica, sans-serif',
  display: 'Lato, Helvetica Neue, Helvetica, sans-serif'
}

export const colors = {
  white: 'white',

  grey: {
    dark: '#585858',
    light: '#b3b3b3'
  },

  green: {
    primary: '#00a044',
    secondary: '#7ec774'
  },

  orange: '#cf4c22'
}
