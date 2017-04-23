import { BoundActions } from '../types'
import { StyleAttribute, css, hover } from 'glamor'
import { h } from 'preact'
import ButtonGroup from './ButtonGroup'
import OperationButton from './OperationButton'
import InputButton from './InputButton'

type ButtonsProps = {
  actions: BoundActions,
}

const greenButton: StyleAttribute = css(
  { background: '#3bf3a9' },
  hover({ color: '#3bf3a9' }),
)
const zeroButton: StyleAttribute = css({
  flex: '50%',
  paddingLeft: '.9em',
  textAlign: 'left',
})

const Buttons = ({
  actions: {
    add,
    clear,
    divide,
    equals,
    input,
    multiply,
    percent,
    posneg,
    subtract,
  },
}: ButtonsProps): JSX.Element => (
  <div>
    <ButtonGroup>
      <OperationButton action={clear} className={greenButton} text="C" />
      <OperationButton action={posneg} className={greenButton} text="+/&minus;" />
      <OperationButton action={percent} className={greenButton} text="%" />
      <OperationButton action={divide} text="&divide;" />
    </ButtonGroup>
    <ButtonGroup>
      <InputButton action={input} value="7" />
      <InputButton action={input} value="8" />
      <InputButton action={input} value="9" />
      <OperationButton action={multiply} text="&times;" />
    </ButtonGroup>
    <ButtonGroup>
      <InputButton action={input} value="4" />
      <InputButton action={input} value="5" />
      <InputButton action={input} value="6" />
      <OperationButton action={subtract} text="&minus;" />
    </ButtonGroup>
    <ButtonGroup>
      <InputButton action={input} value="1" />
      <InputButton action={input} value="2" />
      <InputButton action={input} value="3" />
      <OperationButton action={add} text="+" />
    </ButtonGroup>
    <ButtonGroup>
      <InputButton action={input} className={zeroButton} value="0" />
      <InputButton action={input} value="." />
      <OperationButton action={equals} text="=" />
    </ButtonGroup>
  </div>
)

export default Buttons
