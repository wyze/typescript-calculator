import { h } from 'preact'
import Svg from '../Svg'
import snapshot from './utils/snapshot'

describe('Svg', () => {
  it('renders', () => snapshot(Svg))
  it('renders children', () => snapshot(Svg, { children: <g /> }))
})
