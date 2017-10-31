import { css } from 'glamor'
import { h } from 'preact'
import Button from '../Button'
import snapshot from './utils/snapshot'

const props = {
  action: jest.fn(),
  text: '.',
}

const propsWithClassName = {
  ...props,
  className: css({ color: 'rebeccapurple' }),
}

const propsWithHtmlEntities = {
  ...props,
  text: '&minus;',
}

describe('<Button />', () => {
  it('renders', () => snapshot(<Button {...props} />))
  it('renders with className', () => snapshot(<Button {...propsWithClassName} />))
  it('renders with html entities', () => snapshot(<Button {...propsWithHtmlEntities} />))
  xit('handles onclick event')
})
