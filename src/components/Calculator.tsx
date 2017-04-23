import { StyleAttribute, css } from 'glamor'
import { h } from 'preact'

type CalculatorProps = {
  children?: JSX.Element,
}

const calculator: StyleAttribute = css({
  background: '#838383',
  borderRadius: 5,
  overflow: 'hidden',
  width: '14em',
})

const Calculator = ({ children }: CalculatorProps): JSX.Element => (
  <div className={calculator.toString()}>
    {children}
  </div>
)

export default Calculator
