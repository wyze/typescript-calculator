import { css } from 'glamor'
import { h } from 'preact'
import OperationButton from '../OperationButton'
import snapshot from './utils/snapshot'

const props = {
  action: jest.fn(),
  text: '+',
}

const propsWithClassName = {
  ...props,
  className: css({ color: 'rebeccapurple' }),
}

describe('<OperationButton />', () => {
  it('renders', () => snapshot(<OperationButton {...props} />))
  it('renders with className', () => snapshot(<OperationButton {...propsWithClassName} />))
})
