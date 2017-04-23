import operations, {
  Operation,
  OperationsActions,
  OperationsState,
  Sign,
  add,
  clear,
  equals,
  input,
  multiply,
  percent,
  posneg,
  subtract,
} from '../operations'

const apply = ( ...actions: OperationsActions[] ) =>
  actions.reduce(
    ( state: OperationsState, action ) => operations(state, action),
    [],
  )

const op = ( left: string, right: string, sign: Sign | undefined, total: number ): Operation =>
  ({ key: expect.any(String), left, right, sign, total })

const verify = ( actual: OperationsActions[], expected: OperationsState ) =>
  expect(apply(...actual)).toEqual(expected)

describe('operations', () => {
  it('handles INPUT', () =>
    verify(
      [ input('1'), input('2') ],
      [ op('12', '', undefined, 12) ],
    ),
  )

  it('handles INPUT after SIGN', () =>
    verify(
      [ input('1'), add(), input('1') ],
      [ op('1', '1', Sign.Add, 2) ],
    ),
  )

  it('handles INPUT after SIGN.Equals', () =>
    verify(
      [
        input('1'),
        add(),
        input('2'),
        equals(),
        input('4'),
      ],
      [
        op('4', '', undefined, 4),
        op('3', '3', Sign.Equals, 3),
        op('1', '2', Sign.Add, 3),
      ],
    ),
  )

  it('handles CLEAR', () =>
    verify(
      [ input('1'), input('3'), clear() ],
      [],
    ),
  )

  it('handles SIGN.Add', () =>
    verify(
      [ input('1'), add() ],
      [ op('1', '', Sign.Add, 1) ],
    ),
  )

  it('handles EQUALS', () =>
    verify(
      [ input('1'), add(), input('2'), equals() ],
      [
        op('3', '3', Sign.Equals, 3),
        op('1', '2', Sign.Add, 3),
      ],
    ),
  )

  it('handles double EQUALS', () =>
    verify(
      [
        input('1'),
        add(),
        input('2'),
        equals(),
        equals(),
      ],
      [
        op('5', '5', Sign.Equals, 5),
        op('3', '2', Sign.Add, 5),
        op('3', '3', Sign.Equals, 3),
        op('1', '2', Sign.Add, 3),
      ],
    ),
  )

  it('handles switch from SIGN.Add to SIGN.Subtract', () =>
    verify(
      [ input('1'), add(), subtract() ],
      [ op('1', '', Sign.Subtract, 1) ],
    ),
  )

  it('handles SIGN.Add after SIGN.Equals', () =>
    verify(
      [ input('1'), add(), input('1'), equals(), add() ],
      [
        op('2', '', Sign.Add, 2),
        op('2', '2', Sign.Equals, 2),
        op('1', '1', Sign.Add, 2),
      ],
    ),
  )

  it('handles POSNEG with initial state', () =>
    verify(
      [ posneg() ],
      [],
    ),
  )

  it('handles POSNEG', () =>
    verify(
      [ input('4'), posneg() ],
      [ op('-4', '', undefined, -4) ],
    ),
  )

  it('handles POSNEG when total would be 0', () =>
    verify(
      [ input('5'), subtract(), input('5'), posneg() ],
      [ op('5', '-5', Sign.Subtract, 10) ],
    ),
  )

  it('handles POSNEG with no right value', () =>
    verify(
      [ input('4'), add(), posneg() ],
      [ op('4', '-4', Sign.Add, 0) ],
    ),
  )

  it('handles POSNEG with SIGN', () =>
    verify(
      [ input('4'), add(), input('2'), posneg() ],
      [ op('4', '-2', Sign.Add, 2) ],
    ),
  )

  it('handles POSNEG then double SIGN.Equals', () =>
    verify(
      [
        input('5'),
        multiply(),
        input('3'),
        posneg(),
        equals(),
        equals(),
      ],
      [
        op('45', '45', Sign.Equals, 45),
        op('-15', '-3', Sign.Multiply, 45),
        op('-15', '-15', Sign.Equals, -15),
        op('5', '-3', Sign.Multiply, -15),
      ],
    ),
  )

  it('handles POSNEG -> SIGN.Equals -> POSNEG -> SIGN.Equals', () =>
    verify(
      [
        input('5'),
        multiply(),
        input('3'),
        posneg(),
        equals(),
        posneg(),
        equals(),
      ],
      [
        op('-45', '-45', Sign.Equals, -45),
        op('15', '-3', Sign.Multiply, -45),
        op('15', '15', Sign.Equals, 15),
        op('5', '-3', Sign.Multiply, -15),
      ],
    ),
  )

  it('handles INPUT with decimals', () =>
    verify(
      [
        input('5'),
        input('.'),
        input('3'),
        add(),
        input('4'),
        input('.'),
        input('7'),
        equals(),
      ],
      [
        op('10', '10', Sign.Equals, 10),
        op('5.3', '4.7', Sign.Add, 10),
      ],
    ),
  )

  it('handles INPUT with double decimals', () =>
    verify(
      [
        input('2'),
        input('.'),
        input('.'),
        input('3'),
        add(),
        input('2'),
        input('.'),
        input('7'),
        input('.'),
        input('5'),
        equals(),
      ],
      [
        op('5.05', '5.05', Sign.Equals, 5.05),
        op('2.3', '2.75', Sign.Add, 5.05),
      ],
    ),
  )

  it('handles PERCENT with initial state', () =>
    verify(
      [ percent() ],
      [],
    ),
  )

  it('handles PERCENT', () =>
    verify(
      [ input('4'), percent() ],
      [ op('0.04', '', undefined, 0.04) ],
    ),
  )

  it('handles PERCENT with no right value', () =>
    verify(
      [ input('4'), add(), percent() ],
      [ op('4', '0.04', Sign.Add, 4.04) ],
    ),
  )

  it('handles PERCENT with SIGN', () =>
    verify(
      [ input('4'), add(), input('2'), percent() ],
      [ op('4', '0.02', Sign.Add, 4.02) ],
    ),
  )

  it('handles PERCENT then double SIGN.Equals', () =>
    verify(
      [
        input('5'),
        multiply(),
        input('5'),
        input('0'),
        percent(),
        equals(),
        equals(),
      ],
      [
        op('1.25', '1.25', Sign.Equals, 1.25),
        op('2.5', '0.5', Sign.Multiply, 1.25),
        op('2.5', '2.5', Sign.Equals, 2.5),
        op('5', '0.5', Sign.Multiply, 2.5),
      ],
    ),
  )

  it('handles PERCENT -> SIGN.Equals -> PERCENT -> SIGN.Equals', () =>
    verify(
      [
        input('5'),
        multiply(),
        input('5'),
        input('0'),
        percent(),
        equals(),
        percent(),
        equals(),
      ],
      [
        op('0.0125', '0.0125', Sign.Equals, 0.0125),
        op('0.025', '0.5', Sign.Multiply, 0.0125),
        op('0.025', '0.025', Sign.Equals, 0.025),
        op('5', '0.5', Sign.Multiply, 2.5),
      ],
    ),
  )
})
