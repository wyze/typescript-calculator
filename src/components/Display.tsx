import { StyleAttribute, css } from 'glamor'
import { h } from 'preact'

type DisplayProps = {
  output: string,
}

const display: StyleAttribute = css({
  alignItems: 'center',
  color: '#fafafa',
  display: 'flex',
  fontSize: '1.5em',
  height: '2.5em',
  justifyContent: 'flex-end',
  padding: '0 1em',
})

const Display = ({ output }: DisplayProps): JSX.Element => (
  <div className={display.toString()}>
    {output}
  </div>
)

export default Display
