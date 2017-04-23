import InputButton from '../InputButton'
import snapshot from './utils/snapshot'

const action = ( payload: string ) => () => ({ payload, type: 'INPUT' })

describe('InputButton', () => {
  it('renders', () => snapshot(InputButton))
  it.skip('passes action property', () => snapshot(InputButton, { action }))
  it('passes className property', () => snapshot(InputButton, { className: 'css-1j2u492' }))
  it('passes value property', () => snapshot(InputButton, { value: '1' }))
})
