import cxs from 'cxs'
import prefixer from 'inline-style-prefixer/static'
import merge from 'lodash/merge'

export * from './traits'

export const classes = (...styles) => (
  cxs(prefixer(merge({}, ...styles)))
)

