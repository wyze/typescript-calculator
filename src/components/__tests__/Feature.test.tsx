import Feature, { Emoji } from '../Feature'
import snapshot from './utils/snapshot'

describe('Feature', () => {
  it('renders', () => snapshot(Feature))
  it('renders text property', () => snapshot(Feature, { text: 'Awesome' }))
  it('renders with Checkmark emoji', () => snapshot(Feature, { emoji: Emoji.Checkmark }))
  it('renders with Soon emoji', () => snapshot(Feature, { emoji: Emoji.Soon }))
})
