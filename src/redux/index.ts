import { OperationsActions } from './modules/operations'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import reducers, { State } from './reducers'

export type Action<T, P> = {
  type: T,
  payload?: P,
  error?: boolean,
  meta?: any,
}

export type Actions = OperationsActions

const store = createStore<State>(
  reducers,
  applyMiddleware(
    createLogger({ collapsed: true }),
  ),
)

export default store
