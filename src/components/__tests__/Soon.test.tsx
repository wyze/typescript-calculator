import { h } from 'preact'
import Soon from '../Soon'
import snapshot from './utils/snapshot'

describe('<Soon />', () => {
  it('renders', () => snapshot(<Soon />))
})
