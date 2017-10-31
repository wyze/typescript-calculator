import { h } from 'preact'
import ButtonGroup from '../ButtonGroup'
import snapshot from './utils/snapshot'

describe('<ButtonGroup />', () => {
  it('renders', () => snapshot(<ButtonGroup />))
  it('renders with children', () => snapshot(<ButtonGroup><span /></ButtonGroup>))
})
