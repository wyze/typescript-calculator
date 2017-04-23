import { Sign } from '../modules/operations'
import { _, match1 } from 'typematch'

const add = ( left: number, right: number ): number => left + right
const divide = ( left: number, right: number ): number => left / right
const multiply = ( left: number, right: number ): number => left * right
const noop = ( left: number ): number => left
const subtract = ( left: number, right: number ): number => left - right

const signToFunction = ( sign: Sign | undefined ) =>
  match1(sign,
    [ Sign.Add, () => add ],
    [ Sign.Divide, () => divide ],
    [ Sign.Multiply, () => multiply ],
    [ Sign.Subtract, () => subtract ],
    [ _, () => noop ],
  )

export default signToFunction
