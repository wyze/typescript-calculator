import { BoundAction } from '../types'
import { StyleAttribute, css, hover } from 'glamor'
import { h } from 'preact'
import Button from './Button'

type OperationButtonProps = {
  action: BoundAction,
  className?: StyleAttribute,
  text: string,
}

const operationButton: StyleAttribute = css(
  { background: '#ff8754' },
  hover({ color: '#ff8754' }),
)

const OperationButton = ({ action, className, text }: OperationButtonProps): JSX.Element => (
  <Button
    action={action}
    className={css(operationButton, className)}
    text={text}
  />
)

export default OperationButton
