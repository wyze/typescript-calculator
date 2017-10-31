import { Input } from '../../redux/modules/operations'
import { css } from 'glamor'
import { h } from 'preact'
import InputButton from '../InputButton'
import snapshot from './utils/snapshot'

const props = {
  action: jest.fn(),
  value: '1' as Input,
}

const propsWithClassName = {
  ...props,
  className: css({ color: 'rebeccapurple' }),
}

describe('<InputButton />', () => {
  it('renders', () => snapshot(<InputButton {...props} />))
  it('renders with className', () => snapshot(<InputButton {...propsWithClassName} />))
})
