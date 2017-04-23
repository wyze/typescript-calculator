import Buttons from '../Buttons'
import snapshot from './utils/snapshot'

const actions = { add: () => ({ type: 'ADD' }) }

describe('Buttons', () => {
  it('renders', () => snapshot(Buttons, { actions }))
})
