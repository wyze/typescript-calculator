import { App } from '../App'
import { h } from 'preact'
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
  output: '12',
}

describe('<App />', () => {
  it('renders', () => snapshot(<App {...props} />))
})
