import Button from '../Button'
import snapshot from './utils/snapshot'

describe('Button', () => {
  it('renders', () => snapshot(Button))
  it.skip('sets onClick property', () => snapshot(Button, { action: () => ({ type: 'ADD' }) }))
  it('sets className property', () => snapshot(Button, { className: 'css-3lj4th1' }))
  it('sets text property', () => snapshot(Button, { text: '.' }))
  it('sets text property with HTML entities', () => snapshot(Button, { text: '&minus;' }))
})
