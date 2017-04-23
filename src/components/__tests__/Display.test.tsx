import Display from '../Display'
import snapshot from './utils/snapshot'

describe('Display', () => {
  it('renders', () => snapshot(Display))
  it('renders output property', () => snapshot(Display, { output: '13' }))
})
