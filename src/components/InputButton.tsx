import { BoundAction } from '../types'
import { Input } from '../redux/modules/operations'
import { StyleAttribute } from 'glamor'
import { h } from 'preact'
import Button from './Button'

type InputButtonProps = {
  action: BoundAction,
  className?: StyleAttribute,
  value: Input,
}

const bindValue = ( action: BoundAction, value: Input ): BoundAction => () => action(value)

const InputButton = ({ action, className, value }: InputButtonProps): JSX.Element => (
  <Button
    action={bindValue(action, value)}
    className={className}
    text={value}
  />
)

export default InputButton
