import { h } from 'preact'
import Features from '../Features'
import snapshot from './utils/snapshot'

describe('<Features />', () => {
  it('renders', () => snapshot(<Features />))
})
