import { h } from 'preact'
import Buttons from '../Buttons'
import snapshot from './utils/snapshot'

const props = {
  actions: {
    add: jest.fn(),
    clear: jest.fn(),
    divide: jest.fn(),
    equals: jest.fn(),
    input: jest.fn(),
    multiply: jest.fn(),
    percent: jest.fn(),
    posneg: jest.fn(),
    subtract: jest.fn(),
  },
}

describe('<Buttons />', () => {
  it('renders', () => snapshot(<Buttons {...props} />))
})
