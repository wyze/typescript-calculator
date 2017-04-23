import { BoundAction } from '../types'
import { StyleAttribute, css } from 'glamor'
import { button } from '../styles'
import { h } from 'preact'

type ButtonProps = {
  action: BoundAction,
  className?: StyleAttribute,
  text: string,
}

const handleClick = ( action: BoundAction ) => (): void => {
  action()
}

const Button = ({ action, className, text }: ButtonProps): JSX.Element => (
  <button
    className={css(button, className).toString()}
    dangerouslySetInnerHTML={{ __html: text }}
    onClick={handleClick(action)}
  />
)

export default Button
