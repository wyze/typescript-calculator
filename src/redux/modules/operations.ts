import { _, match1, match2, match3 } from 'typematch'
import { Action } from '../'
import { State } from '../reducers'
import { createSelector } from 'reselect'
import { v4 as uuid } from 'uuid'
import signToFunction from '../utils/signToFunction'
import exhaustive from '../../utils/exhaustive'

/* Types */
export type Operation = {
  key: string,
  left: string,
  right: string,
  sign?: Sign,
  total: number,
}
export type OperationsState = Operation[]
export type Input = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.'

export type ClearAction = Action<'operations/CLEAR', void>
export type InputAction = Action<'operations/INPUT', Input>
export type PercentAction = Action<'operations/PERCENT', Modifier.Percent>
export type PosNegAction = Action<'operations/POSNEG', Modifier.PosNeg>
export type SignAction = Action<'operations/SIGN', Sign>

type ActionToFunction = ( left: number, right: number ) => number
export type OperationsActions =
  | ClearAction
  | InputAction
  | PercentAction
  | PosNegAction
  | SignAction
export enum Sign { Add, Subtract, Multiply, Divide, Equals }
export enum Modifier { Percent, PosNeg }

/* Actions */
export const clear = (): ClearAction => ({
  type: 'operations/CLEAR',
})
export const input = ( payload: Input ): InputAction => ({
  payload,
  type: 'operations/INPUT',
})
export const percent = (): PercentAction => ({
  payload: Modifier.Percent,
  type: 'operations/PERCENT',
})
export const posneg = (): PosNegAction => ({
  payload: Modifier.PosNeg,
  type: 'operations/POSNEG',
})

/* Actions (Sign) */
const sign = ( payload: Sign ) => (): SignAction => ({
  payload,
  type: 'operations/SIGN',
})
export const add = sign(Sign.Add)
export const divide = sign(Sign.Divide)
export const equals = sign(Sign.Equals)
export const multiply = sign(Sign.Multiply)
export const subtract = sign(Sign.Subtract)

/* Helpers */
const createEquals = ({ total }: Operation) =>
  init(total.toString(), total.toString(), Sign.Equals, total)
const addEquals = ( lst: Operation[], current: Operation ) => {
  const { right, sign: sgn } = match1(lst,
    [ [], () => init() ],
    [ _, () => lst.find(({ sign: sygn }) => sygn !== Sign.Equals) || init() ],
  )
  const prev = update('', init(current.total.toString(), right, sgn, 0.0))

  return match1(current.sign,
    [ Sign.Equals, () => [ createEquals(prev), prev ] ],
    [ _, () => [ createEquals(current) ] ],
  )
}
const execute = ( func: ActionToFunction, left: number, right: number ): number =>
  func(left, right)
const head = ( state: OperationsState ): Operation =>
  state.length === 0 ? init() : state.slice(0).shift() as Operation
const init = ( left = '', right = '', sgn?: Sign, total = 0.0 ): Operation => ({
  key: uuid(),
  left,
  right,
  sign: sgn,
  total,
})
const isFloat = ( value: string ): boolean => value.includes('.')
const update = ( digit: Input | '', { left, right, sign: sgn }: Operation ): Operation => {
  const [ lft, rght ] = match2(digit, sgn,
    [ '.', undefined, () => [ isFloat(left) ? left : left + digit, right ] ],
    [ '.', _, () => [ left, isFloat(right) ? right : right + digit ] ],
    [ _, undefined, () => [ left + digit, right ] ],
    [ _, Sign.Equals, () => [ left, right ] ],
    [ _, _, () => [ left, right + digit ] ],
  )

  return init(lft, rght, sgn, execute(signToFunction(sgn), +lft, +rght))
}
const multiplyBy = ( factor: number ) => ( value: string ) =>
  (parseFloat(value) * factor).toString()
const doOperation = ( factor: number, cur: Operation ) => {
  const op = multiplyBy(factor)
  const { left, right, sign: sgn } = cur
  const [ lft, rght ] = match2(right, sgn,
    [ '', undefined, () => [ op(left), right ] ],
    [ '', _, () => [ left, op(left) ] ],
    [ _, Sign.Equals, () => [ op(left), op(right) ] ],
    [ _, _, () => [ left, op(right) ] ],
  )

  return update('', init(lft, rght, sgn, 0.0))
}

/* Reducers */
const reducer = ( state: OperationsState = [], action: OperationsActions ): OperationsState => {
  const current = head(state)
  const tail = state.slice(1)

  switch ( action.type ) {
    case 'operations/CLEAR':
      return []
    case 'operations/INPUT':
      return match1(current.sign,
        [ Sign.Equals, () => [ update(action.payload as Input, init()), ...state ] ],
        [ _, () => [ update(action.payload as Input, current), ...tail ] ],
      )
    case 'operations/PERCENT':
    case 'operations/POSNEG':
      return match3(action.payload, current.sign, current.total,
        [ _, undefined, 0.0, () => state ],
        [ Modifier.Percent, _, _, () => [ doOperation(0.01, current), ...tail ] ],
        [ Modifier.PosNeg, _, _, () => [ doOperation(-1.0, current), ...tail ] ],
      )
    case 'operations/SIGN':
      return match2(action.payload, current.sign,
        [ Sign.Equals, _, () => [ ...addEquals(state, current), ...state ] ],
        [ _, Sign.Equals, () => [ init(current.total.toString(), '', action.payload, current.total), ...state ] ],
        [ _, _, () => [ init(current.total.toString(), '', action.payload, current.total), ...tail ] ],
      )
    default:
      exhaustive(action)

      return state
  }
}

export default reducer

/* Selectors */
const get = ( state: State ): OperationsState => state.operations

const getCurrent = createSelector(
  get,
  ( operations: OperationsState ): Operation => head(operations),
)

export const getOutput = createSelector(
  getCurrent,
  ( operation: Operation ) => {
    const { left, right } = operation

    return right || left || '0'
  },
)
