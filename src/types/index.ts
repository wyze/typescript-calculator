import { Actions } from '../redux'
import { Input, Sign } from '../redux/modules/operations'

export type BoundAction = ( payload?: Input | Sign ) => Actions
export type BoundActions = {
  add: BoundAction,
  clear: BoundAction,
  divide: BoundAction,
  equals: BoundAction,
  input: BoundAction,
  multiply: BoundAction,
  percent: BoundAction,
  posneg: BoundAction,
  subtract: BoundAction,
}
