import { StyleAttribute, css, media } from 'glamor'
import { h } from 'preact'
import { small } from '../styles/breakpoints'

type SvgProps = {
  children?: JSX.Element,
}

const viewBox: string = '0 0 64 64'
const svg: StyleAttribute = css(
  {
    height: 16,
    marginRight: '1em',
    marginTop: 0,
    width: 16,
  },
  media(small, { marginTop: -6 }),
)

const Svg = ({ children }: SvgProps): JSX.Element => (
  <div className={svg.toString()}>
    <svg
      enableBackground={`new ${viewBox}`}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  </div>
)

export default Svg
