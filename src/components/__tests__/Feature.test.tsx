import { h } from 'preact'
import Feature, { Emoji } from '../Feature'
import snapshot from './utils/snapshot'

const props = {
  emoji: Emoji.Checkmark,
  text: 'Some Feature',
}

const propsWithSoon = {
  ...props,
  emoji: Emoji.Soon,
}

describe('<Feature />', () => {
  it('renders', () => snapshot(<Feature {...props} />))
  it('renders with Soon emoji', () => snapshot(<Feature {...propsWithSoon} />))
})
