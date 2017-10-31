import { h } from 'preact'
import Display from '../Display'
import snapshot from './utils/snapshot'

describe('<Display />', () => {
  it('renders', () => snapshot(<Display output="13" />))
})
