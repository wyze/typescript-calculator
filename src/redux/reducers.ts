import { combineReducers } from 'redux'
import operations, { OperationsState } from './modules/operations'

export type State = {
  operations: OperationsState,
}

const reducers = combineReducers<State>({
  operations,
})

export default reducers
