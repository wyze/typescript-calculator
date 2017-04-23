import { App } from '../App'
import snapshot from './utils/snapshot'

const actions = { add: () => 1 + 1 }

describe('App', () => {
  it('renders', () => snapshot(App))
  it('passes output to <Display />', () => snapshot(App, { output: '12' }))
  it('passes actions to <Buttons />', () => snapshot(App, { actions }))
})
