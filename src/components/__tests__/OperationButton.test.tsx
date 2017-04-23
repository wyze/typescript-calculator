import OperationButton from '../OperationButton'
import snapshot from './utils/snapshot'

const action = () => ({ type: 'ADD' })

describe('OperationButton', () => {
  it('renders', () => snapshot(OperationButton))
  it.skip('passes action property', () => snapshot(OperationButton, { action }))
  it('passes className property', () => snapshot(OperationButton, { className: 'css-1j2u492' }))
  it('passes text property', () => snapshot(OperationButton, { text: '+' }))
})
