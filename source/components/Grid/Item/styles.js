export const division = (a, b) => ({
  boxSizing: 'border-box',
  flex: `0 0 ${a / b * 100}%`
})

export const loose = { padding: '2em' }
export const standard = { padding: '1em' }
export const tight = { padding: '0.5em' }
export const none = { padding: 0 }
