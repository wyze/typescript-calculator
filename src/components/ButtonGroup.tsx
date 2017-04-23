import { StyleAttribute, css } from 'glamor'
import { h } from 'preact'

type ButtonGroupProps = {
  children?: JSX.Element,
}

const buttonGroup: StyleAttribute = css({ display: 'flex' })

const ButtonGroup = ({ children }: ButtonGroupProps): JSX.Element => (
  <div className={buttonGroup.toString()}>
    {children}
  </div>
)

export default ButtonGroup
