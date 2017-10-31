import { h } from 'preact'
import Calculator from '../Calculator'
import snapshot from './utils/snapshot'

describe('<Calculator />', () => {
  it('renders', () => snapshot(<Calculator />))
  it('renders with children', () => snapshot(<Calculator><span /></Calculator>))
})
