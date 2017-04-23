import { Actions } from '../redux'
import { BoundActions } from '../types'
import { State } from '../redux/reducers'
import { StyleAttribute, css } from 'glamor'
import {
  add,
  clear,
  divide,
  equals,
  getOutput,
  input,
  multiply,
  percent,
  posneg,
  subtract,
} from '../redux/modules/operations'
import { bindActionCreators } from 'redux'
import { connect } from 'preact-redux'
import { h } from 'preact'
import Buttons from './Buttons'
import Calculator from './Calculator'
import Display from './Display'
import Hero from './Hero'

type Dispatch = ( action: Actions ) => never
type AppProps = {
  actions: BoundActions,
  output: string,
}

const app: StyleAttribute = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
})

export const App = ({ actions, output }: AppProps): JSX.Element => (
  <main className={app.toString()}>
    <Hero />
    <Calculator>
      <Display output={output} />
      <Buttons actions={actions} />
    </Calculator>
  </main>
)

const mapDispatchToProps = ( dispatch: Dispatch ) => ({
  actions: bindActionCreators(
    { add, clear, divide, equals, input, multiply, percent, posneg, subtract },
    dispatch,
  ),
})

const mapStateToProps = ( state: State ) => ({
  output: getOutput(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
